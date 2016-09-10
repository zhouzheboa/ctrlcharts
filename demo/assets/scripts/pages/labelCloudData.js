//页面ID 和数据KEY值映射对象
var cloudMap = {
	"face": {
		"id": "#face",
		"key": "face",
		"animateClass":"zoomInDown"
	},
	"leftEar": {
		"id": "#leftEar",
		"key": "leftEar",
		"animateClass":"bounceInDown"
	},
	"rightEar": {
		"id": "#rightEar",
		"key": "rightEar",
		"animateClass":"bounceInDown"
	},
	"neck": {
		"id": "#neck",
		"key": "neck",
		"animateClass":"bounceInDown"
	},
	"chest": {
		"id": "#chest",
		"key": "chest",
		"animateClass":"bounceInDown"
	},
	"colorArr":[
       "#0099FF", "#Fe00Fe", "#FF0000", 
       "#Fa00aF", " #FFFF33", "#6600FF",
       "#006666", " #00FFFF", "#7FFFD4", "#6600ee"
	]
}


//客户画像数据切换
var labelDataArr = {
	 "1":{
         "face" :[
		           
		          [ '教育',16,24],[ '大学',12,46],[ '科技',15,67],
		          [ '公司',3,23],[ '电子',11,9],[ 'IT',6,67],
		          [ '电影',5,84],[ '影视',9,57],[ '电视',20,86],
		          [ '动漫',9,10],[ '动画',14,42],[ '航空',8,72],
		          [ '制造',4,56],[ '发动机',15,6],[ '商业',6,43],
		          [ '组织',11,25],[ '科学',14,30],[ '研究',11,20],
		          [ '协会',14,2],[ '物理',18,57],[ '太空',2,58],
		          [ '航天',16,39],[ '地图',4,56],[ '导航',13,74],
		          [ '军事',11,52],[ '政府',9,4],[ '食品',9,56],
		          [ '农业',10,84],[ '文化',20,77],[ '艺术',18,6],
		          [ '金融',17,48],[ '国防',19,95],[ '安全',15,83],
		          [ '健康',10,25],[ '卫生',12,48],[ '品牌',7,89],
		          [ '手表',12,14],[ '珠宝',17,78],[ '学院',18,4],
		          [ '鞋',19,73],[ '运动',17,87],[ '户外',16,32],
		          [ '体育',12,78],[ '购物',6,79],[ '拳击',7,65],
		          [ '网球',13,74],[ '高尔夫',11,45],[ '服饰',5,53],
		          [ '电子商务',18,85],[ '奢侈品',3,5],[ '内衣',8,24],
		          [ '足球',8,87],[ '俱乐部',8,36],[ '比赛',17,51],
		          [ '石油',12,28],[ '能源',2,60],[ '化工',3,50],
		          [ '涂料',9,31],[ '钢铁',19,3],[ '工业',3,79],
		          [ '时尚',14,28],[ '化学',5,1],[ '鞋类',1,17],
		          [ '电力',17,43],[ '服装',14,46],[ '家居',7,63],
		          [ '牛仔裤',1,93],[ '零售',11,16],[ '篮球',3,37],
		          [ '箱包',15,52]

         ],
         "leftEar":[
            {text: "美国", weight: 1} ,
	        {text: "新闻", weight: 1} ,
	        {text: "艺术", weight: 1} 
         ],
         "rightEar":[
            {text: "大学", weight: 1} ,
	        {text: "图书", weight: 1} ,
	        {text: "传媒", weight: 1} 
         ],
         "neck":[
                {text: "Lorem", weight: 13, html: {"class": "vertical"}},
		        {text: "Ipsum", weight: 10.5, html: {"class": "vertical"}},
		        {text: "Dolor", weight: 9.4, html: {"class": "vertical"}},
		        {text: "Sit", weight: 8, html: {"class": "vertical"}},
		        {text: "Amet", weight: 6.2},
		        {text: "Consectetur", weight: 5},
		        {text: "Adipiscing", weight: 5},
		        {text: "Elit", weight: 5},
		        {text: "Nam et", weight: 5},
		        {text: "Leo", weight: 4, html: {"class": "vertical"}},
		        {text: "Sapien", weight: 4},
		        {text: "Pellentesque", weight: 3},
		        {text: "habitant", weight: 3, html: {"class": "vertical"}},
		        {text: "morbi", weight: 3},
		        {text: "tristisque", weight: 3, html: {"class": "vertical"}},
		        {text: "senectus", weight: 3},
		        {text: "et netus", weight: 3, html: {"class": "vertical"}},
		        {text: "et malesuada", weight: 3, html: {"class": "vertical"}},
		        {text: "fames", weight: 2}
		       
         ],
         "chest":[
                {text: "Lorem", weight: 13, html: {"class": "vertical"}},
		        {text: "Ipsum", weight: 10.5, html: {"class": "vertical"}},
		        {text: "Dolor", weight: 9.4, html: {"class": "vertical"}},
		        {text: "Sit", weight: 8, html: {"class": "vertical"}},
		        {text: "Amet", weight: 6.2},
		        {text: "Consectetur", weight: 5},
		        {text: "Adipiscing", weight: 5},
		        {text: "Elit", weight: 5},
		        {text: "Nam et", weight: 5},
		        {text: "Leo", weight: 4, html: {"class": "vertical"}},
		        {text: "Sapien", weight: 4},
		        {text: "Pellentesque", weight: 3},
		        {text: "habitant", weight: 3, html: {"class": "vertical"}},
		        {text: "morbi", weight: 3},
		        {text: "tristisque", weight: 3, html: {"class": "vertical"}},
		        {text: "senectus", weight: 3},
		        {text: "et netus", weight: 3, html: {"class": "vertical"}},
		        {text: "et malesuada", weight: 3, html: {"class": "vertical"}},
		        {text: "fames", weight: 2},
		        {text: "ac turpis", weight: 2},
		        {text: "egestas", weight: 2},
		        {text: "Aenean", weight: 2, html: {"class": "vertical"}},
		        {text: "vestibulum", weight: 2},
		        {text: "elit", weight: 2},
		        {text: "sit amet", weight: 2, html: {"class": "vertical"}},
		        {text: "metus", weight: 2},
		        {text: "adipiscing", weight: 2, html: {"class": "vertical"}},
		        {text: "ut ultrices", weight: 2},
		        {text: "justo", weight: 1},
		        {text: "dictum", weight: 1, html: {"class": "vertical"}},
		        {text: "Ut et leo", weight: 1},
		        {text: "metus", weight: 1},
		        {text: "at molestie", weight: 1},
		        {text: "purus", weight: 1, html: {"class": "vertical"}},
		        {text: "Curabitur", weight: 1},
		        {text: "diam", weight: 1, html: {"class": "vertical"}},
		        {text: "metus", weight: 1},
		        {text: "metus", weight: 1, html: {"class": "vertical"}},
		        {text: "metus", weight: 1},
		        {text: "metus", weight: 7, html: {"class": "vertical"}},
		        {text: "metus", weight: 6},
		        {text: "metus", weight: 5},
		        {text: "metus", weight: 1},
		        {text: "metus", weight: 1, html: {"class": "vertical"}},
		        {text: "metus", weight: 8},
		        {text: "metus", weight: 1},
		        {text: "metus", weight: 1, html: {"class": "vertical"}},
		        {text: "metus", weight: 1},
		        {text: "at molestie", weight: 1},
		        {text: "purus", weight: 1, html: {"class": "vertical"}},
		        {text: "Curabitur", weight: 1},
		        {text: "diam", weight: 1, html: {"class": "vertical"}},
		        {text: "dui", weight: 1},
		        {text: "ullamcorper", weight: 1},
		        {text: "id vuluptate ut", weight: 1, html: {"class": "vertical"}},
		        {text: "mattis", weight: 1},
		        {text: "ut ultrices", weight: 2},
		        {text: "justo", weight: 1},
		        {text: "dictum", weight: 1, html: {"class": "vertical"}},
		        {text: "Ut et leo", weight: 1},
		        {text: "metus", weight: 1},
		        {text: "at molestie", weight: 1},
		        {text: "purus", weight: 1, html: {"class": "vertical"}},
		        {text: "Curabitur", weight: 1},
		        {text: "diam", weight: 1, html: {"class": "vertical"}}
		       
         ]
	 },
	 "2":{
      
         "face" :[
		         [ '教育',6,53],[ '大学',3,54],[ '科技',12,40],
		         [ '公司',13,22],[ '电子',7,24],[ 'IT',19,92],
		         [ '电影',8,25],[ '影视',3,42],[ '电视',12,76],
		         [ '动漫',5,89],[ '动画',3,67],[ '航空',10,15],
		         [ '制造',12,90],[ '发动机',14,80],[ '商业',14,35],
		         [ '组织',19,30],[ '科学',12,95],[ '研究',12,62],
		         [ '协会',19,37],[ '物理',15,27],[ '太空',12,8],
		         [ '航天',3,14],[ '地图',9,95],[ '导航',13,93],
		         [ '军事',4,26],[ '政府',15,28],[ '食品',17,99],
		         [ '农业',10,62],[ '文化',2,64],[ '艺术',11,92],
		         [ '金融',8,63],[ '国防',14,13],[ '安全',1,38],
		         [ '健康',11,38],[ '卫生',17,10],[ '品牌',7,11],
		         [ '手表',8,84],[ '珠宝',8,11],[ '学院',14,96],
		         [ '鞋',18,86],[ '运动',11,7],[ '户外',18,19],
		         [ '体育',11,34],[ '购物',11,28],[ '拳击',8,64],
		         [ '网球',9,72],[ '高尔夫',20,39],[ '服饰',12,67],
		         [ '电子商务',2,20],[ '奢侈品',16,52],[ '内衣',2,93],
		         [ '足球',17,23],[ '俱乐部',16,67],[ '比赛',14,94],
		         [ '石油',19,55],[ '能源',17,69],[ '化工',1,47],
		         [ '涂料',17,83],[ '钢铁',13,41],[ '工业',17,59],
		         [ '时尚',11,8],[ '化学',7,56],[ '鞋类',14,75],
		         [ '电力',10,45],[ '服装',8,12],[ '家居',10,92],
		         [ '牛仔裤',18,49],[ '零售',12,32],
		         [ '篮球',5,10],[ '箱包',7,14]
         ],
         "leftEar":[
            {text: "新疆", weight: 7} ,
	        {text: "香港", weight: 10} ,
	        {text: "澳门", weight: 15} 
         ],
         "rightEar":[
            {text: "北京", weight: 8} ,
	        {text: "上海", weight: 16} ,
	        {text: "广东", weight:  7} 
         ],
         "neck":[
                {text: "陕西", weight: 3, html: {"class": "vertical"}},
		        {text: "甘肃", weight: 3.5, html: {"class": "vertical"}},
		        {text: "青海", weight: 1, html: {"class": "vertical"}},
		        {text: "台湾", weight: 2, html: {"class": "vertical"}},
		        {text: "内蒙古", weight: 2},
		        {text: "广西", weight: 5},
		        {text: "西藏", weight: 5},
		        {text: "云南", weight: 4},
		        {text: "安徽", weight: 3}
         ],
         "chest":[
                {text: "福建", weight: 13, html: {"class": "vertical"}},
		        {text: "江西", weight: 10.5, html: {"class": "vertical"}},
		        {text: "山东", weight: 9.4, html: {"class": "vertical"}},
		        {text: "河南", weight: 8, html: {"class": "vertical"}},
		        {text: "湖北", weight: 6.2},
		        {text: "湖南", weight: 5},
		        {text: "海南", weight: 5},
		        {text: "四川", weight: 5},
		        {text: "贵州", weight: 4, html: {"class": "vertical"}},
		        {text: "云南", weight: 4},
		        {text: "安徽", weight: 3},
                {text: "亚洲", weight: 13, html: {"class": "vertical"}},
		        {text: "韩国", weight: 10.5, html: {"class": "vertical"}},
		        {text: "日本", weight: 9.4, html: {"class": "vertical"}},
		        {text: "新加坡", weight: 8, html: {"class": "vertical"}},
		        {text: "北美洲", weight: 6.2},
		        {text: "美国", weight: 5},
		        {text: "加拿大", weight: 5},
		        {text: "墨西哥", weight: 5},
		        {text: "欧洲", weight: 4, html: {"class": "vertical"}},
		        {text: "英国", weight: 4},
		        {text: "法国", weight: 3},      
		        {text: "德国", weight: 13, html: {"class": "vertical"}},
		        {text: "南美洲", weight: 10.5, html: {"class": "vertical"}},
		        {text: "巴西", weight: 9.4, html: {"class": "vertical"}},
		        {text: "阿根廷", weight: 8, html: {"class": "vertical"}},
		        {text: "秘鲁", weight: 6.2},
		        {text: "非洲", weight: 5},
		        {text: "埃及", weight: 5},
		        {text: "肯尼亚", weight: 5},
		        {text: "大洋洲", weight: 4, html: {"class": "vertical"}},
		        {text: "澳大利亚", weight: 4},
		        {text: "安徽", weight: 3},
		         {text: "新西兰", weight: 13, html: {"class": "vertical"}},
		        {text: "斐济", weight: 10.5, html: {"class": "vertical"}}
		    ]
	 },

	 "3":{

         "face" :[
		          [ '内衣',9,8],[ 'Email',3,70],
		          [ '冲浪',6,48],[ '首富',9,28],
		          [ '地图',4,54],[ '分类网站',19,2],
		          [ '潮品',4,59],[ '玻璃',10,38],
		          [ '航天',6,94],[ '文库',13,77],
		          [ '支付',3,60],[ '酒水',5,23],
		          [ 'Jaguar',4,68],[ '美职棒',10,68],
		          [ 'Chrysler',6,97],[ '世界杯',3,34],
		          [ '音频',5,61],[ 'mac OS',19,79],
		          [ '拳击',9,46],[ '翻译软件',9,55],
		          [ '是继',17,95],[ '杂志',2,31],
		          [ 'Magento模板',3,81],[ '阿拉伯语',16,19],
		          [ '3D',12,44],[ '八卦',7,16],
		          [ '英特尔',3,15],[ '摇滚',9,49],
		          [ 'D',1,55],[ '文具',7,29],
		          [ 'Stevens',17,48],[ '船厂',5,92],
		          [ '内务部',9,17],[ '报刊',16,29],
		          [ '财富500强',17,50],[ '希腊',9,31],
		          [ 'AllianzSE',14,86],[ '贷款',19,27],
		          [ 'HP',12,43],[ 'BARtrend',8,56],
		          [ 'TERRA',6,54],[ '跑车',17,27],
		          [ '家具',8,48],[ '政治',2,37],
		          [ '公益',15,41],[ '能源',16,49],
		          [ '冰淇淋',5,57],[ '老人',8,83],
		          [ 'Georgetown',6,71],[ '机械',2,90]
		       
         ],

         "leftEar":[
            {text: "电视剧", weight: 7} ,
	        {text: "综艺", weight: 10} ,
	        {text: "游戏", weight: 15} 
         ],
         "rightEar":[
            {text: "小游戏", weight: 8} ,
	        {text: "看这里", weight: 16} ,
	        {text: "电影", weight:  7} 
         ],

 

         "neck":[
                {text: "艾薇儿", weight:2, html: {"class": "vertical"}},
		        {text: "安吉丽娜·朱莉", weight: 1.5, html: {"class": "vertical"}},
		        {text: "奥黛丽·赫本", weight: 2.4, html: {"class": "vertical"}},
		        {text: "艾玛·沃特森", weight: 1},
		        {text: "艾莉婕", weight: 1},
		        {text: "BigBang", weight:3, html: {"class": "vertical"}},
		        {text: "金范", weight: 1},    
		        {text: "安吉丽娜·朱莉", weight: 1.5, html: {"class": "vertical"}},
		        {text: "奥黛丽·赫本", weight: 2.4, html: {"class": "vertical"}},
		        {text: "艾玛·沃特森", weight: 1},
		        {text: "艾莉婕", weight: 1},
		        {text: "BigBang", weight:3, html: {"class": "vertical"}},
		        {text: "金范", weight: 1},
         ],
         "chest":[
                {text: "福建", weight: 13, html: {"class": "vertical"}},
		        {text: "江西", weight: 10.5, html: {"class": "vertical"}},
		        {text: "山东", weight: 9.4, html: {"class": "vertical"}},
		        {text: "河南", weight: 8, html: {"class": "vertical"}},
		        {text: "湖北", weight: 6.2},
		        {text: "湖南", weight: 5},
		        {text: "海南", weight: 5},
		        {text: "四川", weight: 5},
		        {text: "贵州", weight: 4, html: {"class": "vertical"}},
		        {text: "云南", weight: 4},
		        {text: "安徽", weight: 3},     

		        {text: "碧昂丝", weight: 13, html: {"class": "vertical"}},
		        {text: "仓木麻衣", weight: 10.5, html: {"class": "vertical"}},
		        {text: "崔智友", weight: 9.4, html: {"class": "vertical"}},
		        {text: "查理兹·塞隆", weight: 8, html: {"class": "vertical"}},
		        {text: "赤西仁", weight: 6.2},
		        {text: "成宥利", weight: 5},
		        {text: "后街男孩", weight: 5},
		        {text: "黄义达", weight: 5},
		        {text: "丹下樱", weight: 4, html: {"class": "vertical"}},
		        {text: "常盘贵子", weight: 4},
		        {text: "迪克兰", weight: 3},    

		         {text: "加藤罗莎", weight: 13, html: {"class": "vertical"}},
		        {text: "木口亚矢", weight: 10.5, html: {"class": "vertical"}},
		        {text: "玛丽亚·凯莉", weight: 9.4, html: {"class": "vertical"}},
		        {text: "米兰达·可儿", weight: 8, html: {"class": "vertical"}},
		        {text: "湖北", weight: 6.2},
		        {text: "广末凉子", weight: 5},
		        {text: "海南", weight: 5},
		        {text: "四川", weight: 5},
		        {text: "马克·沃尔伯格", weight: 4, html: {"class": "vertical"}},
		        {text: "韩智慧", weight: 4}
         ]
	 }
}


