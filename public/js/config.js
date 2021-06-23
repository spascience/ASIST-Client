var phaserConfig = {
    type: Phaser.AUTO,
    backgroundColor:0xffffff,
    scale: {
        _mode: Phaser.Scale.FIT,
        parent: 'phaser-game',
        width: 775,
        height: 625,
    },
    dom: {
        createContainer: true
    },
};
    //scene: {
    //    preload: preload,
    //    create: create,
    //    update: update
    //},
    //physics: {
    //    default: 'arcade',
    //    arcade: {
    //        gravity: { y: 0 },
    //        debug: false
    //    }
    //} 



var mapData = {'cols': 50,'rows': 92, 'victimIndexes': [2802, 3666],
'hallwayBoundaryIndexes':[107,	108,	109,	110,	111,
    155,	156,	157,
    161,	162,	163,
    203,	204,	205,
    213,	214,	215,
    253,265,
    302,	303,315,	316,
    352,366,
    401,	402,416,	417,
    451, 467,
    501,	502,	503,	504,	505,	506,	507,	508, 510,	511,	512,	513,	514,	515,	516,	517,	518,	519,	520,	521,	522,	523,	524,	525,	526,	527,	528,	529,	530,	531,	532,	533,	534,	535,	536,	537,	538,	539,	540,	541,	542,	543,	544,	545,	546,	547,	548,	549,	550,
    551,567,	568,577,586,591,600,  
    601, 617,	618, 627, 636, 641,650,
    651, 667,	668, 677, 686,691, 700,
    701, 717,	718, 724, 727, 735,	736, 741,	742,750,
    751, 767,	768, 774, 777, 784,	785,	786,791,	792,	793, 800,
    801, 817,	818, 824, 827, 831,	832,	833,	834,	835,	836,841,	842,	843,	844,	845,	846,850,
    851, 867,	868, 873,	874, 877, 886, 891,900,
    901, 917,	918, 922,	923,	924, 927,950,
    951, 959,	960,	961,	962,	963,	964,	965,	966,	967,	968,	969,	970,	971,	972,	973,	974,	975, 977,	978, 979,	980,	981,	982,	983,	984,	985,	986, 991,	992, 993,	994,	995,	996,	997,	998,	999,	1000,
    1001, 1008,	1009, 1041, 1050,
    1051, 1057,	1058,	1059, 1091, 1100,
    1101, 1105,	1106,	1107,	1108,	1109, 1141, 1150,
    1151, 1159, 1191,	1192, 1200,
    1201, 1209, 1214,	1215,	1216, 1218,	1219,	1220,	1221,	1222,	1223,	1224,	1225,	1226,	1227,	1228,	1229,	1230,	1231,	1232,	1233,	1234,	1235,	1236, 1241,	1242,	1243, 1250,
    1251, 1264,  1284,	1285,	1286, 1291,	1292,	1293,	1294,	1295,	1296, 1300,
    1301, 1302,	1303,	1304,	1305,	1306,	1307,	1308,	1309, 1314, 1335,	1336, 1341, 1350,   
    1351, 1359, 1364, 1386, 1400,
    1401, 1409, 1414, 1436, 1441,	1442,	1443,	1444,	1445,	1446,	1447,	1448,	1449,	1450, 
    1451, 1459, 1464, 1486, 1491, 1500,
    1501, 1509, 1514, 1536, 1541, 1550,
    1551, 1559, 1564,	1565, 1586, 1591, 1600,
    1601, 1609, 1614,	1615,	1616, 1636, 1641,	1642, 1650,
    1651, 1659, 1664,	1665,	1666,	1667,	1668,	1669,	1670,	1671,	1672,	1673,	1674,	1675,	1676,	1677,	1678,	1679,	1680,	1681,	1682, 1683, 1684, 1685,	1686, 1691,	1692,	1693, 1700,   
    1701, 1709, 1741,	1742,	1743,	1744,	1745,	1746, 1750, 
    1751, 1759, 1791, 1800, 
    1801, 1808,	1809, 1850,
    1851, 1857,	1858,	1859, 1891,	1892,	1893,	1894,	1895,	1896,	1897,	1898,	1899,	1900,
    1901, 1905,	1906,	1907,	1908,	1909, 1914,	1915,	1916,	1917,	1918,	1919,	1920,	1921,	1922,	1923, 1925, 1927, 1928,	1929,	1930,	1931,	1932,	1933,	1934,	1935,	1936, 1941, 1950, 
    1951, 1959, 1964,	1965,	1966, 1975, 1984,	1985,	1986, 1991, 2000,
    2001, 2014,	2015, 2025, 2035,	2036, 2041, 2050, 
    2051, 2052,	2053,	2054,	2055,	2056,	2057,	2058,	2059, 2064, 2075, 2086,  2091,	2092, 2100, 
    2101, 2109, 2114, 2125,2136, 2141,	2142,	2143, 2150, 
    2151, 2159, 2164, 2175, 2186, 2191,	2192,	2193,	2194,	2195,	2196, 2200,
    2201, 2209, 2214, 2225, 2236, 2241, 2250, 
    2251, 2259, 2264, 2275, 2286, 2300, 
    2301, 2309, 2314, 2325, 2336, 2341, 2342,	2343,	2344,	2345,	2346,	2347,	2348,	2349,	2350, 
    2351, 2359, 2364,	2365,	2366,	2367,	2368,	2369,	2370,	2371,	2372,	2373,	2374,	2375,	2376,	2377,	2378,	2379,	2380,	2381,	2382,	2383,	2384,	2385,	2386, 2391, 2400,  
    2401, 2409, 2414,	2415,	2416,	2417,	2418,	2419,	2420,	2421,	2422,	2423,	2424,	2425,	2426,	2427,	2428,	2429,	2430,	2431,	2432,	2433,	2434,	2435,	2436, 2441, 2450, 
    2451, 2459, 2464, 2468, 2477, 2486, 2491, 2500, 
    2501, 2509, 2514, 2518, 2527, 2536, 2541,	2542, 2550, 
    2551, 2559, 2564, 2568, 2570, 2572,	2573,	2574, 2576,	2577, 2579, 2581,	2582,	2583, 2585,	2586, 2591,	2592,	2593, 2600,  
    2601, 2609, 2614, 2618, 2620, 2623,	2624, 2627, 2629,  2632,	2633, 2636, 2641,	2642,	2643,	2644,	2645,	2646, 2650, 
    2651, 2658,	2659, 2667,	2668, 2670, 2673,	2674, 2677, 2679, 2682,	2683, 2686, 2691, 2700, 
    2701, 2707,	2708,	2709, 2714,	2715,	2716,	2717,	2718, 2720, 2723,	2724, 2727, 2729, 2732,	2733, 2736, 2750,
    2751, 2755,	2756,	2757,	2758,	2759, 2764,	2765,	2766,	2767,	2768, 2770,	2771,	2772,	2773,	2774,	2775,	2776,	2777, 2779,	2780,	2781,	2782,	2783,	2784,	2785,	2786, 2791,	2792,	2793,	2794,	2795,	2796,	2797,	2798,	2799,	2800, 
    2801, 2809, 2841, 2850, 
    2851, 2891, 2900, 
    2901, 2902,	2903,	2904,	2905,	2906,	2907,	2908,	2909, 2941, 2950, 
    2951, 2959, 2991,	2992, 3000,
    3001, 3009, 3014,	3015,	3016,	3017,	3018,	3019,	3020,	3021,	3022,	3023,	3024,	3025,	3026,	3027,	3028,	3029,	3030,	3031,	3032,	3033,	3034,	3035,	3036, 3041,	3042,	3043, 3050, 
    3051, 3064, 3086, 3091,	3092,	3093,	3094,	3095,	3096, 3100, 
    3101, 3109, 3114, 3136, 3141, 3150, 
    3151, 3159, 3164, 3167, 3171, 3175, 3179, 3183, 3186, 3200,
    3201, 3209, 3214, 3217, 3221, 3225, 3229, 3233, 3236, 3241,	3242,	3243,	3244,	3245,	3246,	3247,	3248,	3249,	3250, 
    3251, 3259, 3264, 3267,	3268,	3269,	3270,	3271,	3272,	3273,	3274,	3275,	3276,	3277,	3278,	3279,	3280,	3281,	3282,	3283, 3286, 3291, 3300,  
    3301, 3309, 3314, 3317, 3321, 3325, 3329, 3333, 3336, 3341, 3350, 
    3351, 3352,	3353,	3354,	3355,	3356,	3357,	3358,	3359, 3364, 3367, 3371, 3375, 3379, 3383, 3386, 3391, 3400,
    3401, 3409, 3414, 3436, 3441,	3442, 3450, 
    3451, 3486, 3491,	3492,	3493, 3500, 
    3501, 3509, 3514, 3536, 3541,	3542,	3543,	3544,	3545,	3546, 3550, 
    3551, 3552,	3553,	3554,	3555,	3556,	3557,	3558,	3559, 3564, 3567, 3571, 3575, 3579, 3583, 3586, 3591, 3600, 
    3601, 3608, 3614, 3617, 3621, 3625, 3629, 3633, 3636, 3650, 
    3651, 3658, 3664, 3667,	3668,	3669,	3670,	3671,	3672,	3673,	3674,	3675,	3676,	3677,	3678,	3679,	3680,	3681,	3682,	3683, 3686, 3691,	3692,	3693,	3694,	3695,	3696,	3697,	3698,	3699,	3700, 
    3701, 3714, 3717, 3721, 3725, 3729, 3733, 3736, 3741, 3750, 
    3751, 3758, 3764, 3767, 3771, 3775, 3779, 3783, 3786, 3791, 3800, 
    3801, 3808, 3813,	3814, 3836, 3841, 3850, 
    3851, 3858, 3862,	3863,	3864, 3886, 3891,	3892, 3900, 
    3901, 3902, 3903, 3904, 3905, 3906, 3907,	3908,	3909,	3910,	3911,	3912,	3913,	3914,	3915,	3916,	3917,	3918,	3919,	3920,	3921,	3922,	3923,	3924,	3925,	3926,	3927,	3928,	3929,	3930,	3931,	3932,	3933,	3934,	3935,	3936, 3941,	3942,	3943,  3950,
    3986, 3991,	3992,	3993,	3994,	3995,	3996, 4000,
    4036, 4041, 4050,
    4086, 4100,
    4136, 4141,	4142,	4143,	4144,	4145,	4146,	4147,	4148,	4149,	4150,
    4186, 4191, 4200,
    4236, 4241, 4250,
    4286, 4291, 4300,
    4336, 4341,	4342, 4350,
    4386, 4391,	4392,	4393, 4400,
    4436, 4441,	4442,	4443,	4444,	4445,	4446, 4450,
    4486, 4491, 4500,
    4536, 4550,
    4586, 4587,	4588,	4589,	4590,	4591,	4592,	4593,	4594,	4595,	4596,	4597,	4598,	4599
],
"doorIndexes": [509, 936, 941, 976, 1217, 1259, 1391, 1841, 1924, 1926, 2009, 2291, 2664, 2741, 2769, 2778, 2859, 3059, 3191, 3459, 3464, 3641, 3708, 4091, 4541],
"toneIndexes":[2860, 3463],
'roomToneMapping': {'509': [], '936': [], '941': [], '976': [], '1217': [], '1259': [], '1391': [], '1841': [], '1924': [], '1926': [], '2009': [], '2291': [], '2664': [], '2741': [], '2769': [], '2778': [], "2859": [2860], '3059': [], '3191': [], '3459': [], "3464": [3463], '3641': [], '3708': [], '4091': [], '4541': []},
'roomVictimMapping': {'509': [], '936': [], '941': [], '976': [], '1217': [], '1259': [], '1391': [], '1841': [], '1924': [], '1926': [], '2009': [], '2291': [], '2664': [], '2741': [], '2769': [], '2778': [], "2859": [2802], '3059': [], '3191': [], '3459': [], "3464": [3666], '3641': [], '3708': [], '4091': [], '4541': []},
'noGameBox': [0, 1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,
    51,	52,	53,	54,	55,	56,	57,	58,	59,	60,	61,	62,	63,	64,	65,	66,	67,	68,	69,	70,	71,	72,	73,	74,	75,	76,	77,	78,	79,	80,	81,	82,	83,	84,	85,	86,	87,	88,	89,	90,	91,	92,	93,	94,	95,	96,	97,	98,	99,	100,
    101,	102,	103,	104,	105,	106, 112,	113,	114,	115,	116,	117,	118,	119,	120,	121,	122,	123,	124,	125,	126,	127,	128,	129,	130,	131,	132,	133,	134,	135,	136,	137,	138,	139,	140,	141,	142,	143,	144,	145,	146,	147,	148,	149,	150,
    151,	152,	153,	154, 164,	165,	166,	167,	168,	169,	170,	171,	172,	173,	174,	175,	176,	177,	178,	179,	180,	181,	182,	183,	184,	185,	186,	187,	188,	189,	190,	191,	192,	193,	194,	195,	196,	197,	198,	199,	200,
    201,	202, 216,	217,	218,	219,	220,	221,	222,	223,	224,	225,	226,	227,	228,	229,	230,	231,	232,	233,	234,	235,	236,	237,	238,	239,	240,	241,	242,	243,	244,	245,	246,	247,	248,	249,	250,
    251,	252, 266,	267,	268,	269,	270,	271,	272,	273,	274,	275,	276,	277,	278,	279,	280,	281,	282,	283,	284,	285,	286,	287,	288,	289,	290,	291,	292,	293,	294,	295,	296,	297,	298,	299,	300,
    301, 317,	318,	319,	320,	321,	322,	323,	324,	325,	326,	327,	328,	329,	330,	331,	332,	333,	334,	335,	336,	337,	338,	339,	340,	341,	342,	343,	344,	345,	346,	347,	348,	349,	350,
    351, 367,	368,	369,	370,	371,	372,	373,	374,	375,	376,	377,	378,	379,	380,	381,	382,	383,	384,	385,	386,	387,	388,	389,	390,	391,	392,	393,	394,	395,	396,	397,	398,	399,	400,
    418,	419,	420,	421,	422,	423,	424,	425,	426,	427,	428,	429,	430,	431,	432,	433,	434,	435,	436,	437,	438,	439,	440,	441,	442,	443,	444,	445,	446,	447,	448,	449,	450,
    468,	469,	470,	471,	472,	473,	474,	475,	476,	477,	478,	479,	480,	481,	482,	483,	484,	485,	486,	487,	488,	489,	490,	491,	492,	493,	494,	495,	496,	497,	498,	499,	500,
    3951,	3952,	3953,	3954,	3955,	3956,	3957,	3958,	3959,	3960,	3961,	3962,	3963,	3964,	3965,	3966,	3967,	3968,	3969,	3970,	3971,	3972,	3973,	3974,	3975,	3976,	3977,	3978,	3979,	3980,	3981,	3982,	3983,	3984,	3985,
    4001,	4002,	4003,	4004,	4005,	4006,	4007,	4008,	4009,	4010,	4011,	4012,	4013,	4014,	4015,	4016,	4017,	4018,	4019,	4020,	4021,	4022,	4023,	4024,	4025,	4026,	4027,	4028,	4029,	4030,	4031,	4032,	4033,	4034,	4035,
    4051,	4052,	4053,	4054,	4055,	4056,	4057,	4058,	4059,	4060,	4061,	4062,	4063,	4064,	4065,	4066,	4067,	4068,	4069,	4070,	4071,	4072,	4073,	4074,	4075,	4076,	4077,	4078,	4079,	4080,	4081,	4082,	4083,	4084,	4085,
    4101,	4102,	4103,	4104,	4105,	4106,	4107,	4108,	4109,	4110,	4111,	4112,	4113,	4114,	4115,	4116,	4117,	4118,	4119,	4120,	4121,	4122,	4123,	4124,	4125,	4126,	4127,	4128,	4129,	4130,	4131,	4132,	4133,	4134,	4135,
    4151,	4152,	4153,	4154,	4155,	4156,	4157,	4158,	4159,	4160,	4161,	4162,	4163,	4164,	4165,	4166,	4167,	4168,	4169,	4170,	4171,	4172,	4173,	4174,	4175,	4176,	4177,	4178,	4179,	4180,	4181,	4182,	4183,	4184,	4185,
    4201,	4202,	4203,	4204,	4205,	4206,	4207,	4208,	4209,	4210,	4211,	4212,	4213,	4214,	4215,	4216,	4217,	4218,	4219,	4220,	4221,	4222,	4223,	4224,	4225,	4226,	4227,	4228,	4229,	4230,	4231,	4232,	4233,	4234,	4235,
    4251,	4252,	4253,	4254,	4255,	4256,	4257,	4258,	4259,	4260,	4261,	4262,	4263,	4264,	4265,	4266,	4267,	4268,	4269,	4270,	4271,	4272,	4273,	4274,	4275,	4276,	4277,	4278,	4279,	4280,	4281,	4282,	4283,	4284,	4285,
    4301,	4302,	4303,	4304,	4305,	4306,	4307,	4308,	4309,	4310,	4311,	4312,	4313,	4314,	4315,	4316,	4317,	4318,	4319,	4320,	4321,	4322,	4323,	4324,	4325,	4326,	4327,	4328,	4329,	4330,	4331,	4332,	4333,	4334,	4335,
    4351,	4352,	4353,	4354,	4355,	4356,	4357,	4358,	4359,	4360,	4361,	4362,	4363,	4364,	4365,	4366,	4367,	4368,	4369,	4370,	4371,	4372,	4373,	4374,	4375,	4376,	4377,	4378,	4379,	4380,	4381,	4382,	4383,	4384,	4385,
    4401,	4402,	4403,	4404,	4405,	4406,	4407,	4408,	4409,	4410,	4411,	4412,	4413,	4414,	4415,	4416,	4417,	4418,	4419,	4420,	4421,	4422,	4423,	4424,	4425,	4426,	4427,	4428,	4429,	4430,	4431,	4432,	4433,	4434,	4435,
    4451,	4452,	4453,	4454,	4455,	4456,	4457,	4458,	4459,	4460,	4461,	4462,	4463,	4464,	4465,	4466,	4467,	4468,	4469,	4470,	4471,	4472,	4473,	4474,	4475,	4476,	4477,	4478,	4479,	4480,	4481,	4482,	4483,	4484,	4485,
    4501,	4502,	4503,	4504,	4505,	4506,	4507,	4508,	4509,	4510,	4511,	4512,	4513,	4514,	4515,	4516,	4517,	4518,	4519,	4520,	4521,	4522,	4523,	4524,	4525,	4526,	4527,	4528,	4529,	4530,	4531,	4532,	4533,	4534,	4535,
    4551,	4552,	4553,	4554,	4555,	4556,	4557,	4558,	4559,	4560,	4561,	4562,	4563,	4564,	4565,	4566,	4567,	4568,	4569,	4570,	4571,	4572,	4573,	4574,	4575,	4576,	4577,	4578,	4579,	4580,	4581,	4582,	4583,	4584,	4585],
}

var gameSetUpData = {"roundCount":100, "playerX":5, "playerY":77, "leaderX":3, "leaderY":75, "gameTime":2, dTime: new Date().toISOString(),
//fix leaderMovementIndexes
"leaderMovementIndexes": [[3, 75, "right"], [4, 75, "right"], [5, 75, "right"], [6, 75, "right"], [7, 75, "right"], [8, 75, "right"], 
[8, 74, "up"], [9, 74, "right"], [10, 74, "right"], [10, 73, "up"], [10, 72, "up"], [9, 72, "left"],
[9, 73, "down"]]
}


var socketURL = "https://asist-vsb.herokuapp.com/"
export {phaserConfig, mapData, gameSetUpData, socketURL};
