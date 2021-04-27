var us_stats = {
    'AL': {name:'Alabama', land:131426, water:4338, obese:[32.2, 30.9, 30.5, 28.9, 28.8, 28.4, 25.7, 24.5, 23.9, 22.4, 21.3, 18.2, 20.5, 18.7], over:[35.7, 35.7, 34.5, 35.6, 35.8, 34.8, 37, 37.2, 36.8, 38.4, 38.3, 37.2, 33.7, 35.4], pop:[4627851, 4661900, 4599000, 4564591, 4530182, 4509412, 4488641, 4467871, 4447100, 4406449, 4365797, 4325146, 4284495, 4243844]},
    'AK': {name:'Alaska', land:1481346, water:236507, obese:[27.1, 28.2, 26.2, 27.4, 23.7, 23.5, 23.4, 22.1, 21, 20.4, 21.4, 19.7, 17.5, 19.8], over:[38.4, 36.9, 38, 36.8, 38.9, 37.2, 37.7, 41.2, 38.2, 40.7, 36.9, 35.6, 36.8, 35.8], pop:[686293, 683478, 670000, 662718, 655435, 648309, 641184, 634058, 626932, 619243, 611554, 603865, 596176, 588488]},
    'AZ': {name:'Arizona', land:294313, water:943, obese:[25.6, 25.8, 22.9, 21.1, 21.2, 20.1, 19.6, 18.5, 19.2, 12.3, 13.1, 12.4, 15.1, 13.3], over:[35.7, 36.8, 36.7, 35.1, 34.9, 37, 36.6, 37.5, 36.8, 39.3, 36.4, 34.7, 33.6, 35.7], pop:[6500180, 6338755, 6166000, 5954917, 5743834, 5590534, 5437233, 5283933, 5130632, 4984092, 4837551, 4691011, 4544470, 4397930]},
    'AR': {name:'Arkansas', land:134856, water:2875, obese:[29.5, 29.3, 26.9, 28, 26.1, 25.2, 23.7, 22.4, 23.3, 22.7, 19.8, 18.1, 17.8, 17.5], over:[36.2, 36.3, 36.9, 36.7, 36.4, 36.8, 37.2, 37.1, 36.6, 36.2, 35.1, 34.5, 37.1, 34.8], pop:[2855390, 2834797, 2811000, 2781815, 2752629, 2732822, 2713015, 2693207, 2673400, 2641133, 2608865, 2576598, 2544330, 2512063]},
    'CA': {name:'California', land:403932, water:20036, obese:[24.3, 23.3, 23.3, 22.7, 22.2, 23.2, 19.2, 21.9, 19.9, 18.7, 17.3, 16, 14.6, 15.1], over:[37.1, 35.7, 35.5, 37.9, 38, 36.2, 37.5, 37.5, 37.4, 36.1, 36.3, 35.7, 36.3, 35.5], pop:[36756666, 36553215, 36458000, 36175900, 35893799, 35388261, 34882724, 34377186, 33871648, 33460485, 33049323, 32638160, 32226997, 31815835]},
    'CO': {name:'Colorado', land:268628, water:974, obese:[19.1, 19.3, 18.2, 17.8, 16.8, 16, 16.5, 14.9, 14.2, 14.9, 14.4, 11.8, 10.3, 10.1], over:[36.2, 36.4, 36.7, 36.7, 36.2, 35.4, 37, 36.7, 33.8, 33, 34.9, 34.6, 32.2, 35.2], pop:[4861515, 4939456, 4753000, 4677202, 4601403, 4526368, 4451332, 4376297, 4301261, 4200574, 4099888, 3999201, 3898514, 3797828]},
    'CT': {name:'Connecticut', land:12548, water:1810, obese:[21.4, 21.7, 20.6, 20.1, 19.7, 19.1, 18, 17.9, 17.4, 15.1, 15.5, 14.7, 13.4, 12.5], over:[38.3, 37.5, 38.2, 38.1, 36.5, 35.7, 37, 37.2, 36.3, 37.4, 34.3, 37.1, 36.2, 32.8], pop:[3501252, 3502309, 3505000, 3504302, 3503604, 3479094, 3454585, 3430075, 3405565, 3393720, 3381875, 3370030, 3358185, 3346341]},
    'DE': {name:'Delaware', land:5061, water:1388, obese:[27.8, 28.2, 26, 23.5, 21.1, 24, 22.4, 20.8, 16.6, 17.5, 17.2, 18.8, 17.7, 17.1], over:[36, 36.8, 37.8, 39.4, 38.6, 36.2, 36.2, 38.4, 39.2, 37.9, 36, 35, 36.2, 38], pop:[873092, 864764, 853000, 841682, 830364, 818673, 806982, 795291, 783600, 771857, 760114, 748370, 736627, 724884]},
    'DC': {name:'District of Columbia', land:158, water:18, obese:[22.3, 22.2, 22.5, 21.7, 22.5, 20.3, 20.7, 20, 21.5, 18.5, 20.2, 14.5, 16.8, -1], over:[32.8, 33.1, 32.1, 33.3, 33, 31.9, 32.1, 32.1, 31.7, 32.4, 30.5, 38.3, 34, -1], pop:[591833, 588292, 582000, 567762, 553523, 558157, 562791, 567425, 572059, 575543, 579027, 582511, 585995, 589480]},
    'FL': {name:'Florida', land:139670, water:30634, obese:[25.2, 24.1, 23.1, 22.8, 22.9, 19.9, 19.4, 18.8, 18.7, 18.6, 18, 16.1, 16.7, 17.2], over:[35, 38, 36.5, 37.9, 36.9, 38.7, 37.6, 37.1, 35.2, 38.2, 35.5, 36.9, 35.7, 34.7], pop:[18328340, 18251243, 18090000, 17743581, 17397161, 17043465, 16689770, 16336074, 15982378, 15677933, 15373488, 15069042, 14764597, 14460152]},
    'GA': {name:'Georgia', land:149976, water:3934, obese:[27.8, 28.7, 27.1, 26.5, 24.7, 25.2, 23.5, 22.7, 21.5, 21.1, 19.2, 14.4, 11.5, 13.3], over:[36.9, 36.3, 34.6, 36.4, 34.7, 35.4, 35.4, 36.7, 37.9, 36.5, 35.4, 43.8, 40.4, 39.9], pop:[9685744, 9544750, 9364000, 9096692, 8829383, 8668651, 8507918, 8347186, 8186453, 8015629, 7844806, 7673982, 7503158, 7332335]},
    'HI': {name:'Hawaii', land:16635, water:11676, obese:[23.1, 21.7, 20.6, 19.7, -1, 16.4, 17.1, 17.9, 15.7, 15.7, 15.5, 13.6, 12.9, 10.8], over:[34.2, 35.1, 35.5, 33.3, -1, 33.6, 36, 33.5, 34.5, 34.4, 32.2, 36.6, 31.8, 32], pop:[1288198, 1283388, 1285000, 1273920, 1262840, 1250014, 1237189, 1224363, 1211537, 1201206, 1190875, 1180545, 1170214, 1159883]},
    'ID': {name:'Idaho', land:214314, water:2132, obese:[25.2, 25.1, 24.1, 24.5, 20.8, 21.8, 20.2, 20.5, 18.9, 20, 16.4, 16.3, 16.9, 14.2], over:[37, 38, 35.6, 36.8, 37.4, 37.2, 37.1, 38.8, 36.8, 35.3, 36.7, 35.9, 34.7, 37.4], pop:[1523816, 1499402, 1466000, 1429631, 1393262, 1368435, 1343608, 1318780, 1293953, 1265233, 1236512, 1207792, 1179071, 1150351]},
    'IL': {name:'Illinois', land:143962, water:6037, obese:[26.9, 25.6, 25.1, 25.1, 23, 23.7, 21.9, 21, 21.7, 20.9, 18.5, 17.1, 17, 16.7], over:[36.4, 37.4, 36.6, 35.7, 36.5, 37.4, 37.3, 37.6, 37.2, 36, 36.6, 36.8, 35.4, 36.1], pop:[12901563, 12852548, 12832000, 12772817, 12713634, 12640049, 12566464, 12492878, 12419293, 12320424, 12221555, 12122686, 12023817, 11924948]},
    'IN': {name:'Indiana', land:92895, water:1427, obese:[27, 27.4, 27.8, 27.2, 25.5, 26, 24.1, 24.5, 21.8, 19.9, 19.9, 21.2, 18.6, 20.1], over:[36.6, 35.8, 35, 35.1, 36.7, 35.7, 37.2, 35.5, 36.5, 36.9, 36.3, 35.1, 36.3, 36.1], pop:[6376792, 6345289, 6314000, 6275785, 6237569, 6198298, 6159027, 6119756, 6080485, 6026852, 5973220, 5919587, 5865955, 5812322]},
    'IA': {name:'Iowa', land:144700, water:1041, obese:[26.7, 27.7, 25.7, 25.4, 23.5, 23.9, 22.9, 22.5, 21.5, 21.5, 19.8, 19.4, 18.7, 17.5], over:[37.6, 37, 37.2, 37.1, 37.4, 37.7, 38.3, 37.3, 38.5, 36.9, 36.9, 35.7, 35.2, 37.7], pop:[3002555, 2988046, 2982000, 2968226, 2954451, 2947419, 2940388, 2933356, 2926324, 2911367, 2896410, 2881453, 2866496, 2851540]},
    'KS': {name:'Kansas', land:211900, water:1197, obese:[28.1, 27.7, 25.9, 23.9, 23.2, 22.6, 22.8, 21.6, 20.8, 18.9, 17.7, 14.7, 13.4, 15.9], over:[37.6, 36.1, 36.4, 36.9, 37.5, 37.8, 37.4, 35.4, 37.9, 37.2, 37.1, 39.2, 34.5, 34.1], pop:[2802134, 2775997, 2764000, 2749751, 2735502, 2723731, 2711960, 2700189, 2688418, 2667334, 2646249, 2625165, 2604080, 2582996]},
    'KY': {name:'Kentucky', land:102895, water:1764, obese:[30.3, 28.7, 28, 28.6, 25.8, 25.6, 24.4, 24.6, 23, 21.7, 20.4, 21.8, 19.2, 16.9], over:[36.5, 40.4, 38.4, 36.3, 37.6, 37.4, 38.1, 37.5, 38, 36.9, 37.7, 34.6, 35.7, 35.7], pop:[4269245, 4241474, 4206000, 4175961, 4145922, 4119884, 4093846, 4067807, 4041769, 4006122, 3970474, 3934827, 3899180, 3863533]},
    'LA': {name:'Louisiana', land:112825, water:21440, obese:[29, 30.7, 27.1, 30.8, 26.9, 24.8, 25.5, 24, 23.6, 22.3, 21.8, 19.6, 19.7, 17.7], over:[34.8, 34.5, 35.9, 33.8, 35.7, 36.3, 35.6, 36.3, 36.5, 36, 34.6, 36.2, 35.3, 35.1], pop:[4410796, 4293204, 4288000, 4401885, 4515770, 4504072, 4492373, 4480675, 4468976, 4444076, 4419175, 4394275, 4369375, 4344475]},
    'ME': {name:'Maine', land:79932, water:11715, obese:[25.9, 25.2, 23.1, 22.7, 23.4, 19.9, 20.7, 19.5, 20, 19.4, 17.4, 16.2, 16.1, 14.1], over:[36, 37.7, 36.6, 36.9, 37.6, 38.3, 38, 39.3, 36.3, 35.4, 37, 37, 35.8, 37.6], pop:[1316456, 1317207, 1322000, 1319627, 1317253, 1306671, 1296088, 1285506, 1274923, 1270224, 1265524, 1260825, 1256125, 1251426]},
    'MD': {name:'Maryland', land:25315, water:6819, obese:[26.7, 26.3, 24.9, 24.4, 23.9, 21.9, 19.4, 20.5, 20.2, 18.2, 20.5, 17.5, 17.7, 16.3], over:[36.7, 36.4, 35.8, 36.7, 34.6, 37.2, 38.5, 36.5, 36.5, 37.2, 35, 35.9, 34.1, 35.8], pop:[5633597, 5618344, 5616000, 5587029, 5558058, 5492665, 5427272, 5361879, 5296486, 5244984, 5193482, 5141981, 5090479, 5038977]},
    'MA': {name:'Massachusetts', land:20306, water:7032, obese:[21.5, 21.7, 20.3, 20.7, 18.4, 16.8, 18.3, 16.6, 16.8, 14.7, 14.3, 14.8, 13.1, 11.7], over:[36.6, 37.2, 35.2, 35.4, 36.1, 36.2, 36.3, 37.8, 36.1, 35.6, 35.6, 33.3, 34.9, 33.4], pop:[6497967, 6449755, 6437000, 6426753, 6416505, 6399653, 6382801, 6365949, 6349097, 6315830, 6282563, 6249295, 6216028, 6182761]},
    'MI': {name:'Michigan', land:147122, water:103372, obese:[29.5, 28.2, 28.8, 26.2, 25.4, 25.2, 25.4, 25, 22.4, 22.8, 21.2, 19.3, 18.2, 18.2], over:[35.2, 36.1, 36, 36.3, 35.5, 36.6, 36.9, 35.2, 38.7, 36.8, 36.3, 37.3, 38.1, 37.2], pop:[10003422, 10071822, 10096000, 10104310, 10112620, 10069076, 10025532, 9981988, 9938444, 9874129, 9809815, 9745500, 9681185, 9616871]},
    'MN': {name:'Minnesota', land:206189, water:18982, obese:[25.2, 26, 24.7, 23.7, 22.6, 23, 22.4, 19.9, 17.4, 15.5, 16.2, 16.5, 14.3, 15.3], over:[37.6, 36, 38, 37.2, 37.7, 38, 36.5, 40.6, 37.6, 40.4, 43.3, 38.3, 39.1, 35.3], pop:[5220393, 5197621, 5167000, 5133979, 5100958, 5055588, 5010219, 4964849, 4919479, 4865041, 4810603, 4756165, 4701727, 4647289]},
    'MS': {name:'Mississippi', land:121489, water:3945, obese:[33.4, 32.6, 31.4, 30.9, 29.5, 28.1, 26.8, 26.5, 25, 23.2, 22.8, 22, 19.8, 19.5], over:[34.1, 35.5, 35.3, 36.4, 36.1, 36.7, 36.3, 37.4, 36.7, 39.1, 36.5, 35.8, 34.7, 35.1], pop:[2938618, 2918785, 2911000, 2906983, 2902966, 2888389, 2873812, 2859235, 2844658, 2817514, 2790370, 2763225, 2736081, 2708937]},
    'MO': {name:'Missouri', land:178414, water:2119, obese:[29.1, 28.2, 27.2, 26.9, 24.9, 23.6, 23.2, 23.2, 22.1, 21.7, 20.5, 19.1, 19.2, 18.9], over:[36.4, 35.1, 35.7, 37, 36.8, 35.6, 37, 36.2, 34.4, 36, 36.6, 35.9, 35.3, 36.8], pop:[5911605, 5878415, 5843000, 5798809, 5754618, 5714766, 5674915, 5635063, 5595211, 5547397, 5499583, 5451770, 5403956, 5356142]},
    'MT': {name:'Montana', land:376978, water:3859, obese:[24.3, 22.6, 21.2, 21.3, 19.7, 18.8, 18.7, 18.8, 15.9, 15.8, 15, 14.6, 14.3, 13.4], over:[37.4, 39.2, 38.1, 36.2, 37.3, 38.1, 37.9, 38, 37.2, 36.8, 36.4, 37.8, 37.9, 36.6], pop:[967440, 957861, 945000, 935933, 926865, 920698, 914530, 908363, 902195, 891882, 881569, 871256, 860943, 850630]},
    'NE': {name:'Nebraska', land:199098, water:1246, obese:[27.2, 26.5, 26.9, 26, 23.2, 23.9, 23.2, 20.7, 21.1, 21, 18.3, 17, 16.3, 16.3], over:[36.9, 38.2, 37, 37.2, 38.6, 37, 37, 38.4, 37.4, 36.8, 35.7, 37.3, 37.3, 37], pop:[1783432, 1774571, 1768000, 1757607, 1747214, 1738226, 1729239, 1720251, 1711263, 1697975, 1684687, 1671400, 1658112, 1644824]},
    'NV': {name:'Nevada', land:284448, water:1904, obese:[25.6, 24.6, 25, 21.2, 21.1, 21.2, 21.6, 19.5, 17.9, 15.8, 14, 14.1, 15.5, 13.3], over:[37, 38.4, 38.6, 37.6, 38.9, 37.3, 37.3, 37, 35.3, 37.8, 36.2, 34.6, 32.8, 35.1], pop:[2600167, 2565382, 2496000, 2415386, 2334771, 2250643, 2166514, 2082386, 1998257, 1918615, 1838972, 1759330, 1679687, 1600045]},
    'NH': {name:'New Hampshire', land:23227, water:989, obese:[24.9, 25.1, 22.4, 23.1, 21.6, 20.2, 17.9, 19.4, 18.1, 14.6, 15.6, 14.2, 14.5, 15.1], over:[38.2, 36.7, 38.3, 36.8, 36.1, 36.7, 38.5, 36.6, 36.5, 35.5, 36.3, 37.7, 35.1, 34.3], pop:[1315809, 1315828, 1315000, 1307250, 1299500, 1283572, 1267643, 1251715, 1235786, 1223133, 1210479, 1197826, 1185172, 1172519]},
    'NJ': {name:'New Jersey', land:19210, water:3377, obese:[23.6, 24.1, 22.6, 22.1, 21.9, 20.1, 19, 19.6, 18.5, 17, 15.5, 16, 13.5, 14.5], over:[38.5, 38.2, 37.3, 37.1, 37.8, 37.2, 37.3, 38.1, 38.3, 37.5, 38.9, 35.1, 35.4, 33.5], pop:[8682661, 8685920, 8725000, 8711940, 8698879, 8627747, 8556615, 8485482, 8414350, 8345934, 8277518, 8209101, 8140685, 8072269]},
    'NM': {name:'New Mexico', land:314311, water:606, obese:[25.7, 25.1, 22.9, 21.7, 21.5, 20.2, 19.7, 19.7, 19.3, 17.7, 15.2, 14.9, 14.1, 13], over:[34.2, 35.7, 36.9, 38.6, 36.4, 36.4, 36.7, 37.4, 36.2, 37.6, 36.5, 38.1, 36.6, 36.4], pop:[1984356, 1969915, 1955000, 1929145, 1903289, 1882228, 1861168, 1840107, 1819046, 1788648, 1758251, 1727853, 1697455, 1667058]},
    'NY': {name:'New York', land:122284, water:19016, obese:[25.1, 25.5, 22.9, 22.2, 22.1, 20.9, 20.6, 20.3, 17.7, 17.4, 16.3, 16, 14.5, 13.9], over:[35.2, 36.4, 35.4, 37.6, 35.7, 35.3, 36.7, 35.7, 39.2, 36.5, 35, 34.1, 37.5, 35.4], pop:[19490297, 19297729, 19306000, 19266544, 19227088, 19164430, 19101773, 19039115, 18976457, 18877857, 18779257, 18680656, 18582056, 18483456]},
    'NC': {name:'North Carolina', land:126161, water:13230, obese:[29.5, 28.7, 26.6, 25.9, 24.2, 24, 23.5, 22.9, 21.8, 21.5, 19.4, 18.3, 18.1, 16.9], over:[36.2, 35.9, 36.2, 36.7, 37.1, 37, 35.5, 35.9, 37.4, 36.4, 36.6, 35.6, 34.9, 35.4], pop:[9222414, 9061032, 8857000, 8699111, 8541221, 8418244, 8295267, 8172290, 8049313, 7907245, 7765178, 7623110, 7481043, 7338975]},
    'ND': {name:'North Dakota', land:178647, water:4465, obese:[27.8, 27, 25.4, 25.4, 24.6, 23.7, 23.4, 20.4, 20.4, 21.9, 19.2, 17, 18.4, 16.4], over:[39.6, 37.9, 39.1, 38.8, 38.3, 39.2, 38.2, 41.1, 40, 38.2, 37.9, 39.6, 38, 37.3], pop:[641481, 639715, 636000, 635183, 634366, 636325, 638283, 640242, 642200, 641860, 641520, 641180, 640840, 640500]},
    'OH': {name:'Ohio', land:106055, water:10041, obese:[29.3, 28.1, 28.4, 24.3, 25.3, 24.9, 23, 22.4, 21.5, 20.3, 20, 17.7, 18.9, 17.5], over:[34.1, 35.4, 35.5, 38.1, 35.8, 36, 35.8, 37.7, 35.7, 36.7, 35.1, 38.1, 35.5, 35.4], pop:[11485910, 11466917, 11478000, 11468506, 11459011, 11432543, 11406076, 11379608, 11353140, 11302538, 11251935, 11201333, 11150730, 11100128]},
    'OK': {name:'Oklahoma', land:177847, water:3188, obese:[31, 28.8, 28.8, 26.8, 24.9, 24.4, 22.9, 22.6, 19.7, 21.1, 19.5, 15.1, 16.8, 13.5], over:[35.6, 36.3, 36, 36.1, 36.1, 36.1, 35.8, 39, 36.6, 36.8, 33.5, 34.1, 34.7, 35.8], pop:[3642361, 3617316, 3579000, 3551277, 3523553, 3505328, 3487104, 3468879, 3450654, 3420147, 3389640, 3359133, 3328626, 3298120]},
    'OR': {name:'Oregon', land:248631, water:6175, obese:[25, 26.3, 24.8, 23.8, 21.2, 21.5, 20.3, 21.1, 21.5, 19.9, 18.3, 19.4, 16.4, 15.2], over:[36.7, 35.7, 35.9, 35.9, 37.8, 36.7, 36.9, 37.1, 36.1, 34.6, 36.4, 35.1, 34.8, 37.1], pop:[3790060, 3747455, 3701000, 3647793, 3594586, 3551289, 3507993, 3464696, 3421399, 3363491, 3305583, 3247676, 3189768, 3131860]},
    'PA': {name:'Pennsylvania', land:116075, water:3209, obese:[28.4, 27.8, 24, 25.3, 24.3, 23.8, 23.9, 22.1, 21.2, 20.3, 19.4, 17.5, 18.7, 16.4], over:[36, 34.9, 37.3, 36.6, 36.8, 36.3, 35.6, 38.3, 36.4, 35.9, 39.2, 36.4, 34.4, 37.2], pop:[12448279, 12432792, 12441000, 12423646, 12406292, 12374983, 12343673, 12312364, 12281054, 12241113, 12201172, 12161231, 12121290, 12081349]},
    'RI': {name:'Rhode Island', land:2707, water:1295, obese:[22.1, 21.7, 21.4, 21, 19, 18.4, 18.5, 17.7, 17.1, 16.8, 16.8, 13.8, 14.3, 13.2], over:[37.9, 39.1, 39.6, 38.2, 37.1, 38.5, 37.6, 38.3, 36.6, 37.4, 35.5, 37.6, 36.7, 35.3], pop:[1050788, 1057832, 1068000, 1074316, 1080632, 1072554, 1064476, 1056397, 1048319, 1043834, 1039348, 1034863, 1030377, 1025892]},
    'SC': {name:'South Carolina', land:77982, water:4949, obese:[30.7, 29, 29.4, 29.1, 25.1, 24.5, 25.8, 22.5, 22, 20.6, 20.6, 16.9, 18.4, 16.7], over:[35.2, 36.3, 36, 35.5, 36.2, 35.8, 35.6, 37.3, 36.9, 37.6, 34.4, 38.9, 37.3, 35.5], pop:[4479800, 4407709, 4321000, 4259534, 4198068, 4151554, 4105040, 4058526, 4012012, 3959481, 3906950, 3854419, 3801888, 3749358]},
    'SD': {name:'South Dakota', land:196541, water:3191, obese:[28.1, 27.2, 25.4, 25.5, 23.8, 22.9, 21.2, 21.2, 19.8, 19.6, 15.8, 17, 14.7, 13.9], over:[36.8, 38.3, 38.7, 37.3, 38, 37.3, 39.4, 38.3, 38.9, 39.7, 35.7, 39.3, 38.7, 39.8], pop:[804194, 796214, 782000, 776442, 770883, 766873, 762864, 758854, 754844, 748960, 743076, 737192, 731308, 725424]},
    'TN': {name:'Tennessee', land:106752, water:2398, obese:[31.2, 30.7, 28.8, 27.4, 27.2, 25, 24.5, 23.4, 22.9, 20.5, 19.2, 17.7, 17.4, 18.4], over:[36.8, 36.7, 36.5, 34.9, 37, 35.4, 36.8, 35.4, 36.5, 36.1, 35.2, 35, 32.7, 35.2], pop:[6214888, 6156719, 6039000, 5969981, 5900962, 5848042, 5795123, 5742203, 5689283, 5608073, 5526863, 5445654, 5364444, 5283234]},
    'TX': {name:'Texas', land:678051, water:17570, obese:[28.9, 28.6, 26.1, 27, 25.8, 24.6, 25.5, 24.6, 23.1, 21.6, 20.2, 18.7, 17.2, 15.9], over:[37.3, 37.2, 36.3, 37.1, 37.2, 36.9, 37.3, 36.7, 36.7, 36.7, 37.1, 37.4, 35.7, 35.9], pop:[24326974, 23904380, 23508000, 22999011, 22490022, 22080472, 21670921, 21261371, 20851820, 20465289, 20078758, 19692227, 19305696, 18919165]},
    'UT': {name:'Utah', land:212752, water:7135, obese:[23.1, 22.4, 21.9, 21.2, 20.4, 20.8, 17.5, 19.1, 19.1, 16.7, 15.9, 15.2, 14.6, 14.0], over:[35.1, 35.6, 33, 35, 36.1, 33.8, 36.1, 35.6, 35, 34.2, 33.4, 33.2, -1, -1], pop:[2736424, 2645330, 2550000, 2469520, 2389039, 2350072, 2311104, 2272137, 2233169, 2182137, 2131105, 2080073, 2029041, 1978010]},
    'VT': {name:'Vermont', land:23957, water:945, obese:[23.3, 21.9, 21.2, 20.2, 18.7, 19.6, 18.9, 17.6, 18.2, 18, 14.8, 15.9, 14.9, 14.6], over:[35.2, 36.9, 34.8, 35.6, 35.6, 35.9, 35.6, 34.5, 34.6, 34.4, 33.1, 34.8, 34.2, 33], pop:[621270, 621254, 624000, 622697, 621394, 618252, 615111, 611969, 608827, 604220, 599613, 595006, 590399, 585793]},
    'VA': {name:'Virginia', land:102548, water:8236, obese:[25.8, 25.3, 25.1, 25.1, 23.1, 21.7, 23.8, 20.9, 18.2, 19.3, 18.7, 16.4, 15.9, 15.7], over:[35.8, 36.6, 36.7, 36.1, 36.9, 36, 35.1, 36.7, 38, 39.4, 34.4, 34.1, 33.4, 35.2], pop:[7769089, 7712091, 7643000, 7551414, 7459827, 7364499, 7269171, 7173843, 7078515, 6989399, 6900284, 6811168, 6722052, 6632937]},
    'WA': {name:'Washington', land:172348, water:12318, obese:[26, 25.9, 24.2, 23.3, 22.2, 21.7, 21.3, 19.3, 18.8, 18.2, 18.1, 15.2, 15.6, 13.9], over:[35.8, 36.2, 36.5, 36.1, 36.2, 36.8, 37.7, 36.7, 36.3, 36.2, 36.4, 37.3, 34.4, 35.3], pop:[6549224, 6468424, 6396000, 6299894, 6203788, 6126371, 6048955, 5971538, 5894121, 5791378, 5688635, 5585892, 5483149, 5380407]},
    'WV': {name:'West Virginia', land:62362, water:394, obese:[31.9, 30.3, 31, 30.6, 27.6, 27.7, 27.6, 25.1, 23.2, 24.6, 23.9, 20.6, 19.9, 18.3], over:[36.9, 37.7, 36, 34.8, 36.4, 34, 36.1, 37.9, 36.5, 37.4, 33.3, 36.5, 36, 37.4], pop:[1814468, 1812035, 1818000, 1816677, 1815354, 1813602, 1811849, 1810097, 1808344, 1806857, 1805371, 1803884, 1802397, 1800911]},
    'WI': {name:'Wisconsin', land:140662, water:28977, obese:[26.1, 25.3, 26.6, 24.4, 23.2, 20.9, 21.6, 22.4, 20, 19.9, 18.3, 16.6, 17.1, 16], over:[37.5, 37, 36.8, 37.1, 37.3, 39.1, 36.3, 36.7, 37.8, 35.7, 38.1, 38.8, 36.4, 37.9], pop:[5627967, 5601640, 5557000, 5533013, 5509026, 5472688, 5436351, 5400013, 5363675, 5316484, 5269294, 5222103, 5174913, 5127722]},
    'WY': {name:'Wyoming', land:251488, water:1847, obese:[25.2, 24.5, 23.3, 24.2, 20.8, 20.1, 19.5, 19.7, 18, 16.9, 15.1, 15, 15.1, 14.3], over:[36.9, 37.7, 38.1, 37.4, 37, 37, 36.4, 36, 37.2, 38.5, 36.4, 34.3, 33.3, 34.5], pop:[532668, 522830, 515000, 510765, 506529, 503342, 500156, 496969, 493782, 489763, 485743, 481724, 477704, 473685]}
    };
    
    us_stats.maxYear = 2008;
    us_stats.minYear = 1995;
    us_stats.yearIdx = function(year) { return 2008-year; }
    