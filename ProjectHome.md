smallgfw:  一个基于DFA的敏感词检测和替换模块，用法如doctest所示。

```
>>> gfw = GFW()
>>> gfw.set(["sexy","girl","love","shit"])#设置敏感词列表
>>> s = gfw.replace("shit!,Cherry is a sexy girl. She loves python.","*")
>>> print s
*!,Cherry is a * *. She *s python. #屏蔽后的效果

>>> gfw = GFW()
>>> gfw.set(["abd","defz","bcz"])
>>> print gfw.check("xabdabczabdxaadefz") #检测敏感词的出现位置
[(1, 3, 'abd'), (5, 3, 'bcz'), (8, 3, 'abd'), (14, 4, 'defz')] #例如，(5, 3, 'bcz')表示下标5之后长度为3的子串
```


---

```
check 1 times
re cost: 0.0160000324249
smallgfw cost: 0.0160000324249
===================================
check 2 times
re cost: 0.0309998989105
smallgfw cost: 0.0
===================================
check 3 times
re cost: 0.047000169754
smallgfw cost: 0.0149998664856
===================================
check 4 times
re cost: 0.0629999637604
smallgfw cost: 0.0150001049042
===================================
check 5 times
re cost: 0.0789999961853
smallgfw cost: 0.0309998989105
===================================
check 6 times
re cost: 0.0780000686646
smallgfw cost: 0.0469999313354
===================================
check 7 times
re cost: 0.0940001010895
smallgfw cost: 0.0460000038147
===================================
check 8 times
re cost: 0.109999895096
smallgfw cost: 0.047000169754
===================================
check 9 times
re cost: 0.125
smallgfw cost: 0.0620000362396
===================================
check 10 times
re cost: 0.125
smallgfw cost: 0.077999830246
===================================
check 11 times
re cost: 0.172000169754
smallgfw cost: 0.0629999637604
===================================
check 12 times
re cost: 0.171999931335
smallgfw cost: 0.0780000686646
===================================
check 13 times
re cost: 0.18700003624
smallgfw cost: 0.077999830246
===================================
check 14 times
re cost: 0.18799996376
smallgfw cost: 0.0940001010895
===================================
check 15 times
re cost: 0.203000068665
smallgfw cost: 0.0929999351501
===================================
check 16 times
re cost: 0.219000101089
smallgfw cost: 0.109999895096
===================================
check 17 times
re cost: 0.233999967575
smallgfw cost: 0.108999967575
===================================
check 18 times
re cost: 0.25
smallgfw cost: 0.110000133514
===================================
check 19 times
re cost: 0.264999866486
smallgfw cost: 0.110000133514
===================================
check 20 times
re cost: 0.280999898911
smallgfw cost: 0.141000032425
===================================
replace 1 times
re cost: 0.0
smallgfw cost: 0.0150001049042
===================================
replace 2 times
re cost: 0.0309998989105
smallgfw cost: 0.0
===================================
replace 3 times
re cost: 0.0469999313354
smallgfw cost: 0.0160000324249
===================================
replace 4 times
re cost: 0.0620000362396
smallgfw cost: 0.0160000324249
===================================
replace 5 times
re cost: 0.0780000686646
smallgfw cost: 0.0309998989105
===================================
replace 6 times
re cost: 0.0789999961853
smallgfw cost: 0.0460000038147
===================================
replace 7 times
re cost: 0.0940001010895
smallgfw cost: 0.0469999313354
===================================
replace 8 times
re cost: 0.108999967575
smallgfw cost: 0.0469999313354
===================================
replace 9 times
re cost: 0.125
smallgfw cost: 0.0780000686646
===================================
replace 10 times
re cost: 0.141000032425
smallgfw cost: 0.0629999637604
===================================
replace 11 times
re cost: 0.155999898911
smallgfw cost: 0.0780000686646
===================================
replace 12 times
re cost: 0.156000137329
smallgfw cost: 0.077999830246
===================================
replace 13 times
re cost: 0.18799996376
smallgfw cost: 0.0780000686646
===================================
replace 14 times
re cost: 0.203000068665
smallgfw cost: 0.0939998626709
===================================
replace 15 times
re cost: 0.203000068665
smallgfw cost: 0.0940001010895
===================================
replace 16 times
re cost: 0.233999967575
smallgfw cost: 0.0939998626709
===================================
replace 17 times
re cost: 0.234000205994
smallgfw cost: 0.109999895096
===================================
replace 18 times
re cost: 0.25
smallgfw cost: 0.125
===================================
replace 19 times
re cost: 0.25
smallgfw cost: 0.125
===================================
replace 20 times
re cost: 0.296000003815
smallgfw cost: 0.125
===================================

 
```

psyco优化后
```
check 1 times
re cost: 0.0149998664856
smallgfw cost: 0.0
===================================
check 2 times
re cost: 0.0320000648499
smallgfw cost: 0.0
===================================
check 3 times
re cost: 0.0460000038147
smallgfw cost: 0.0
===================================
check 4 times
re cost: 0.0629999637604
smallgfw cost: 0.0
===================================
check 5 times
re cost: 0.0780000686646
smallgfw cost: 0.0160000324249
===================================
check 6 times
re cost: 0.077999830246
smallgfw cost: 0.0150001049042
===================================
check 7 times
re cost: 0.0940001010895
smallgfw cost: 0.0159997940063
===================================
check 8 times
re cost: 0.109000205994
smallgfw cost: 0.0159997940063
===================================
check 9 times
re cost: 0.125
smallgfw cost: 0.0150001049042
===================================
check 10 times
re cost: 0.125
smallgfw cost: 0.0320000648499
===================================
check 11 times
re cost: 0.139999866486
smallgfw cost: 0.0320000648499
===================================
check 12 times
re cost: 0.155999898911
smallgfw cost: 0.0310001373291
===================================
check 13 times
re cost: 0.171999931335
smallgfw cost: 0.0160000324249
===================================
check 14 times
re cost: 0.203000068665
smallgfw cost: 0.0149998664856
===================================
check 15 times
re cost: 0.219000101089
smallgfw cost: 0.0160000324249
===================================
check 16 times
re cost: 0.233999967575
smallgfw cost: 0.0160000324249
===================================
check 17 times
re cost: 0.233999967575
smallgfw cost: 0.0309998989105
===================================
check 18 times
re cost: 0.25
smallgfw cost: 0.0320000648499
===================================
check 19 times
re cost: 0.265000104904
smallgfw cost: 0.0309998989105
===================================
check 20 times
re cost: 0.28200006485
smallgfw cost: 0.0309998989105
===================================
replace 1 times
re cost: 0.0160000324249
smallgfw cost: 0.0150001049042
===================================
replace 2 times
re cost: 0.0159997940063
smallgfw cost: 0.0150001049042
===================================
replace 3 times
re cost: 0.0320000648499
smallgfw cost: 0.0149998664856
===================================
replace 4 times
re cost: 0.047000169754
smallgfw cost: 0.0
===================================
replace 5 times
re cost: 0.077999830246
smallgfw cost: 0.0
===================================
replace 6 times
re cost: 0.0940001010895
smallgfw cost: 0.0160000324249
===================================
replace 7 times
re cost: 0.0929999351501
smallgfw cost: 0.0160000324249
===================================
replace 8 times
re cost: 0.108999967575
smallgfw cost: 0.0
===================================
replace 9 times
re cost: 0.125
smallgfw cost: 0.0160000324249
===================================
replace 10 times
re cost: 0.141000032425
smallgfw cost: 0.0149998664856
===================================
replace 11 times
re cost: 0.15700006485
smallgfw cost: 0.0150001049042
===================================
replace 12 times
re cost: 0.171999931335
smallgfw cost: 0.0160000324249
===================================
replace 13 times
re cost: 0.18700003624
smallgfw cost: 0.0309998989105
===================================
replace 14 times
re cost: 0.18799996376
smallgfw cost: 0.0310001373291
===================================
replace 15 times
re cost: 0.218999862671
smallgfw cost: 0.0160000324249
===================================
replace 16 times
re cost: 0.21799993515
smallgfw cost: 0.0320000648499
===================================
replace 17 times
re cost: 0.233999967575
smallgfw cost: 0.0310001373291
===================================
replace 18 times
re cost: 0.25
smallgfw cost: 0.0309998989105
===================================
replace 19 times
re cost: 0.296999931335
smallgfw cost: 0.0320000648499
===================================
replace 20 times
re cost: 0.280999898911
smallgfw cost: 0.0310001373291
===================================
```