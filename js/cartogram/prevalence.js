$(yearSlider).slider({
    min: us_stats.minYear,
    max: us_stats.maxYear,
    value: us_stats.maxYear,
    slide: function(e, ui) {
      year = ui.value;
      updateYear();
      vis.render();
    }
  });
  
  var year = 2008;
  
  us_lowres.forEach(function(c) {
    c.code = c.code.toUpperCase();
    c.center = centroid(c.borders[0]);
  });
  
  var i = 0,
      w = 810,
      h = 400,
      mapMargin = 30;
  
  var scale = pv.Geo.scale()
      .domain({lng: -128, lat: 24}, {lng: -64, lat: 50})
      .range({x: mapMargin, y: mapMargin}, {x: w-mapMargin, y: h-mapMargin});
  
  var legendMargin = 20,
      ease = null,
      yearsMargin = 100;
  
  var yearsScale = pv.Scale.linear()
      .domain(us_stats.minYear, us_stats.maxYear)
      .range(yearsMargin + 2, w - yearsMargin);
  
  var legendScale = pv.Scale.linear()
      .domain(14, 35)
      .range(legendMargin, w - legendMargin);
  
  var col = function(v) {
    if (v < 17) return "#008038";
    if (v < 20) return "#A3D396";
    if (v < 23) return "#FDD2AA";
    if (v < 26) return "#F7976B";
    if (v < 29) return "#F26123";
    if (v < 32) return "#E12816";
    /* else */ return "#B7161E";
  };
  
  var numToRad = function(n) {
    return Math.sqrt(n)/45;
  };
  
  var nodes = [],
      codeToNode = [],
      links = [];
  
  us_lowres.forEach(function(s) {
    if (us_stats[s.code]) {
      var x = scale(s.center).x,
          y = scale(s.center).y,
          numObese = us_stats[s.code].pop[us_stats.yearIdx(year)]*us_stats[s.code].obese[us_stats.yearIdx(year)]/100,
          n = {x: x, y: y, p: {x: x, y: y}, r: numToRad(numObese), code:s.code};
      nodes.push(n);
      codeToNode[s.code] = n;
    }
  });
  
  us_lowres.forEach(function(s) {
    if (us_stats[s.code]) {
      var borders = us_borders[s.code];
      borders.forEach(function(b) {
        if (codeToNode[s.code] && codeToNode[b] && s.code < b) {
          var nodeA = codeToNode[s.code];
          var nodeB = codeToNode[b];
          links.push({sourceNode:nodeA, targetNode:nodeB, length:(nodeA.r + nodeB.r + 2)});
        }
      });
    }
  });
  
  function updateYear() {
    nodes.forEach(function(n)
    {
         n.r = numToRad(us_stats[n.code].pop[us_stats.yearIdx(year)]*us_stats[n.code].obese[us_stats.yearIdx(year)]/100)
    });
    links.forEach(function(l) {l.length = (l.sourceNode.r + l.targetNode.r + 2)});
    i = 0;
    var stepSome = setInterval(function() {
      if (i++ > 10) clearInterval(stepSome);
      sim.step();
      vis.render();
    }, 20);
  }
  
  var timer = undefined;
  function playClick() {
    if (timer) {
      stop();
    } else {
      if (year == us_stats.maxYear) year = us_stats.minYear;
      $(yearSlider).slider('value', year);
      $(play).attr("src", 'stop.png');
      updateYear();
      vis.render();
      timer = setInterval(function() {
        year++;
        if (year >= us_stats.maxYear) stop();
        $(yearSlider).slider('value', year);
        updateYear();
        vis.render();
      }, 900);
    }
  }
  
  // Stop the animation
  function stop() {
    clearInterval(timer);
    timer = undefined;
    $(play).attr("src", 'play.png');
  }
  
  var collisionConstraint = pv.Constraint.collision((d) => d.r + 1),
      positionConstraint = pv.Constraint.position((d)=> d.p),
      linkConstraint = pv.Force.spring(100).links(links);
  
  var sim = pv.simulation(nodes)
      .constraint(collisionConstraint)
      .constraint(positionConstraint)
      .constraint(linkConstraint)
      .force(pv.Force.drag());
  
  var vis = new pv.Panel()
      .width(w)
      .height(h)
      .top(50)
      .bottom(30);
  
  // Add the ticks and labels for the year slider
  vis.add(pv.Rule)
       .data(pv.range(us_stats.minYear, us_stats.maxYear + .1))
       .left(yearsScale)
       .height(4)
       .top(-40)
     .anchor("bottom").add(pv.Label);
  
  vis.add(pv.Dot)
      .data(nodes)
      .left(d => d.x)
      .top(d => d.y)
      .radius((d) => d.r)
      .fillStyle((d) => col(us_stats[d.code].obese[us_stats.yearIdx(year)]))
      .strokeStyle(null)
      .title((d) => us_stats[d.code].name + ": " + us_stats[d.code].obese[us_stats.yearIdx(year)] + "%")
     .add(pv.Label)
      .text((d) => d.code)
      .textStyle("#fee")
      .font((d) => "bold " + (4*Math.log(d.r)).toFixed(0) + "px sans-serif")
      .textAlign("center")
      .textBaseline("middle");
  
  vis.add(pv.Dot)
      .data([
          {v: 10000000, l: "10M"},
          {v: 1000000, l: "1M"},
          {v: 5000000, l: "5M"},
          {v: 100000, l: "100K"}
        ])
      .fillStyle(null)
      .strokeStyle("#555")
      .left(150)
      .bottom(-30)
      .radius((d) =>numToRad(d.v))
    .anchor("top").add(pv.Label)
      .text((d) =>d.l)
  
  // Add the color bars for the color legend
  vis.add(pv.Bar)
      .data(pv.range(14,32.1,3))
      .bottom((d) =>this.index * 15 - 28)
      .height(10)
      .width(10)
      .left(5)
       .fillStyle((d)=> col(14 + 3 * this.index))
      .lineWidth(null)
    .anchor("right").add(pv.Label)
      .textAlign("left")
      .text((d) =>d + " - " + (d+3) + "%");
  
  ease = setInterval(function() {
    if (i++ > 140) {
      clearInterval(ease);
      ease = null;
    }
    sim.step();
    positionConstraint.alpha(Math.pow(.7, i + 2) + .03);
    linkConstraint.damping(Math.pow(.7, i + 2) + .03);
    vis.render();
  }, 42);