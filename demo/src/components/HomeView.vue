<template>
    

<div>
    <div>
        
        <!-- 头部区域 -->
       <header class="mui-bar mui-bar-nav" id="header">
            <!-- <a class="btn" href="javascript:history.go(-1)" v-show="fanhui">
                <i class="iconfont icon-fanhui"></i>
            </a> -->
            <h4>首页</h4>
            <!-- <a class="btn" href="#" v-show="erweima">
                <i class="iconfont icon-erweima"></i>
            </a> -->
        </header>

    </div>
    <div id="main" class="clearfloat warp">     
        <div class="mui-content">
        <!--banner开始-->
             
            <SwiperView></SwiperView>  

            <!--第一栏分类开始-->
            <div class="cation clearfloat box-s">
              <ul>
                <li>
                  <a href="#">
                    <img src="../assets/images/ico5.png"/>
                    <p>新品专区</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/images/ico2.png"/>
                    <p>送礼首选</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/images/ico3.png"/>
                    <p>积分获取</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../assets/images/ico4.png"/>
                    <p>私人定制</p>
                  </a>
                </li>
              </ul>
            </div>
            <!--第一栏分类结束-->
            
          
            <!--新品专区-->
            <div class="onnew clearfloat">
              <div class="boutit clearfloat">
                <span></span>
                <samp>新品专区</samp>
              </div>
              <div class="content clearfloat">
                <div class="top clearfloat">
                  <div class="list clearfloat fl box-s">
                    <a href="detail.html">
                      <div class="zuo clearfloat fl box-s">
                        <p class="tit text">单反相机，彰显你的风格</p>
                        <p><span>￥:</span><span class="over db red">8888</span></p>
                      </div>
                      <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/xj.jpg"/>
                      </div>
                    </a>
                  </div>
                  <div class="list clearfloat fl box-s">
                    <a href="detail.html">
                      <div class="zuo clearfloat fl box-s">
                        <p class="tit text">单反相机，彰显你的风格</p>
                        <p><span>￥:</span><span class="over db red">8888</span></p>
                      </div>
                      <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/xj.jpg"/>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="bottom clearfloat">
                  <div class="list clearfloat fl">
                    <a href="detail.html">
                      
                      <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/dd.jpg"/>
                      </div>
                      <div class="shang clearfloat fl box-s">
                        <p class="tit over">实现梦想的哆啦A梦</p>
                        <p><span>￥:</span><span class="over db red">66</span></p>
                      </div>
                    </a>
                  </div>
                  <div class="list clearfloat fl">
                    <a href="detail.html">
                      
                      <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/dd.jpg"/>
                      </div>
                      <div class="shang clearfloat fl box-s">
                        <p class="tit over">实现梦想的哆啦A梦</p>
                        <p><span>￥:</span><span class="over db red">66</span></p>
                      </div>
                    </a>
                  </div>
                  <div class="list clearfloat fl">
                    <a href="detail.html">
                      
                      <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/dd.jpg"/>
                      </div>
                      <div class="shang clearfloat fl box-s">
                        <p class="tit over">实现梦想的哆啦A梦</p>
                        <p><span>￥:</span><span class="over db red">66</span></p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <!--1F家居用品、电器-->
            <div class="theme clearfloat">
              <div class="boutit clearfloat">
                <span></span>
                <samp>1F家居用品、电器</samp>
              </div>
              <div class="content clearfloat">
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/1f1.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">利仁（Liven） DHG-233A 电火锅</p>
                        <p><span>￥:</span><span class="over db red">200</span></p>
                    </div>
                </a>
            </div>

                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/1f2.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">九阳（Joyoung）榨汁机家用果汁机（汁渣分离</p>
                        <p><span>￥:</span><span class="over db red">110</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/1f3.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">亿嘉IJARL LOTOTO 时尚创意 带盖马克杯 水杯 绿色兔子 FM491008TZM</p>
                        <p><span>￥:</span><span class="over db red">50</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/1f2.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">九阳（Joyoung）榨汁机家用果汁机（汁渣分离</p>
                        <p><span>￥:</span><span class="over db red">110</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/1f3.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">亿嘉IJARL LOTOTO 时尚创意 带盖马克杯 水杯 绿色兔子 FM491008TZM</p>
                        <p><span>￥:</span><span class="over db red">50</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/1f1.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">利仁（Liven） DHG-233A 电火锅</p>
                        <p><span>￥:</span><span class="over db red">200</span></p>
                    </div>
                </a>
            </div>
              </div>                  
            </div>
            <!--2F小吃零食-->
            <div class="theme clearfloat">
              <div class="boutit clearfloat">
                <span></span>
                <samp>2F小吃零食</samp>
              </div>
              <div class="content clearfloat">
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/2f1.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">百草味 年货坚果炒货 碧根果190g/袋</p>
                        <p><span>￥:</span><span class="over db red">60</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/2f2.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over"> 德芙Dove糖果巧克力礼盒年货大礼包968g </p>
                        <p><span>￥:</span><span class="over db red">120</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/2f3.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">【中粮海外直采】Glica格力高巧克力涂层饼干105.6g（日本进口 盒）</p>
                        <p><span>￥:</span><span class="over db red">40</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/2f4.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">百草味 中秋礼盒 零食坚果礼盒 团圆大礼包1478g</p>
                        <p><span>￥:</span><span class="over db red">98</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        
                        <img src="../assets/images/2f5.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">百草味 年货坚果零食干果 夏威夷果奶油味200g/袋 内含开果器</p>
                        <p><span>￥:</span><span class="over db red">88</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/2f6.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">波兰进口 摩卡特（MOKATE）冰拿铁咖啡 412.5g （内含15袋）</p>
                        <p><span>￥:</span><span class="over db red">43</span></p>
                    </div>
                </a>
            </div>
              </div>                  
            </div>
            <!--3F男女服装-->
            <div class="theme clearfloat">
              <div class="boutit clearfloat">
                <span></span>
                <samp>3F男女服装</samp>
              </div>
              <div class="content clearfloat">
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/3f1.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">休闲运动男女春夏秋冬款</p>
                        <p><span>￥:</span><span class="over db red">88</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/3f2.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">休闲运动男女春夏秋冬款</p>
                        <p><span>￥:</span><span class="over db red">50</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/3f3.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">婴儿亲肤纯棉女春秋款</p>
                        <p><span>￥:</span><span class="over db red">98</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/3f2.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">休闲运动男女春夏秋冬款</p>
                        <p><span>￥:</span><span class="over db red">50</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/3f3.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">婴儿亲肤纯棉女春秋款</p>
                        <p><span>￥:</span><span class="over db red">98</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/3f1.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">休闲运动男女春夏秋冬款</p>
                        <p><span>￥:</span><span class="over db red">88</span></p>
                    </div>
                </a>
            </div>
              </div>                  
            </div>
            <!--4F手机、数码配件-->
            <div class="theme clearfloat">
              <div class="boutit clearfloat">
                <span></span>
                <samp>4F手机、数码配件</samp>
              </div>
              <div class="content clearfloat">
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/xj.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">单反相机，彰显你的风格</p>
                        <p><span>￥:</span><span class="over db red">8888</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/4f2.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">吸盘式手机支架/车载支架/汽车导航支架 </p>
                        <p><span>￥:</span><span class="over db red">99</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/4f3.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over"> Lightning数据线 手机数据/充电线 1.2米白色用于苹果</p>
                        <p><span>￥:</span><span class="over db red">26</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/4f4.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over"> 8孔位3米插座插排插线板接线板 节能防火插座板</p>
                        <p><span>￥:</span><span class="over db red">30</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/4f3.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">Lightning数据线 手机数据/充电线 1.2米白色用于苹果</p>
                        <p><span>￥:</span><span class="over db red">26</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/4f2.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">吸盘式手机支架/车载支架/汽车导航支架</p>
                        <p><span>￥:</span><span class="over db red">99</span></p>
                    </div>
                </a>
            </div>
              </div>                  
            </div>
            <!--5F个护化妆-->
            <div class="theme clearfloat">
              <div class="boutit clearfloat">
                <span></span>
                <samp>5F个护化妆</samp>
              </div>
              <div class="content clearfloat">
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/5f1.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">相宜本草 橄榄油润手霜80g</p>
                        <p><span>￥:</span><span class="over db red">90</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/5f2.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">海飞丝去屑洗发水海洋活力型200ml </p>
                        <p><span>￥:</span><span class="over db red">50</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/5f3.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">舒肤佳（Safeguard） 蜂蜜润护香皂115克X3</p>
                        <p><span>￥:</span><span class="over db red">10</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/5f3.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">舒肤佳（Safeguard） 蜂蜜润护香皂115克X3</p>
                        <p><span>￥:</span><span class="over db red">10</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/5f1.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">相宜本草 橄榄油润手霜80g</p>
                        <p><span>￥:</span><span class="over db red">90</span></p>
                    </div>
                </a>
            </div>
                <div class="list clearfloat fl">
                <a href="detail.html">
                    <div class="tu clearfloat fr">
                        <span></span>
                        <img src="../assets/images/5f2.jpg" />
                    </div>
                    <div class="shang clearfloat fl box-s">
                        <p class="tit over">海飞丝去屑洗发水海洋活力型200ml</p>
                        <p><span>￥:</span><span class="over db red">50</span></p>
                    </div>
                </a>
            </div>
              </div>                  
            </div>
          </div>
    </div>


</div>

</template>

<script>

import SwiperView from './SwiperView.vue';

export default{

    components:{

        SwiperView

    }
}
</script>