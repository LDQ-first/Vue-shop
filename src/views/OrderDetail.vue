<template>
  <div>
  <div class="page-container">
    <nav-header></nav-header>
    <nav-bread>
      <span class="item-sp">订单详情</span>
    </nav-bread>
    <div class="container clearfix">
        <div class="order">
            <div class="page-title-normal">
                <h2 class="page-title-h2"><span>订单详情</span></h2>
            </div>
        </div>
          <div class="orderDetail">
            <div class="priceEcharts" ref="priceEcharts"></div>
            <ul class="goods-list">
              <li v-for="(good, index) in goodsList" key="index" class="goods-item">
                 <ripple speed="1" children="true"> 
                   <div slot="children" class="children">
                      <img :src="`/static/${good.productImage}`" alt="">
                      <div>
                        <h3><strong>商品：</strong>{{good.productName}}</h3>
                        <span class="item-sp"><strong>价格：</strong>{{good.salePrice | currency('￥')}}</span>
                        <span class="item-sp"><strong>数量：</strong>{{good.productNum}}</span>
                        <span class="item-sp"><strong>总价：</strong>{{(good.salePrice * good.productNum) | currency('￥')}}</span>
                      </div>
                    </div>
                  </ripple>
              </li>
            </ul>
            <ul class="order-list">
                <li><strong>订单ID: </strong>{{orderList.orderId}}</li>
                <li class="shipping"><strong>运费：</strong>{{shipping | currency('￥')}}</li>
                <li class="discount"><strong>折扣：</strong>{{discount | currency('￥')}}</li>
                <li class="tax"><strong>税：</strong>{{tax | currency('￥')}}</li>
                <li class="total"><strong>订单总价：</strong>{{orderList.orderTotal | currency('￥')}}</li>
                <li class="date"><strong>创建时间：</strong>{{orderList.createDate}}</li>
                <li class="user"><strong>收货人：</strong>{{addressInfo.userName}}</li>
                <li class="tel"><strong>手机：</strong>{{addressInfo.tel}}</li>
                <li class="postCode"><strong>邮编：</strong>{{addressInfo.postCode}}</li>
                <li class="street"><strong>收货地址：</strong>{{addressInfo.streetName}}</li>
                <li class="isDefault"><strong>是否为默认地址：</strong>{{addressInfo.isDefault ? '是' : '否'}}</li>

            </ul>
          </div>
          <div class="enterOrderList">
            <a href="javascript:;" @click="entryOrderList">订单列表</a>
          </div>
    </div>
    </div>
    <nav-footer class="noPadding"></nav-footer>
  </div>
</template>

<script>
    import '@/assets/css/orderDetail.scss'

    const NavHeader = resolve => require(['@/components/Header'], resolve)
    const NavFooter = resolve => require(['@/components/Footer'], resolve)
    const NavBread = resolve => require(['@/components/Bread'], resolve)
    const Ripple = resolve => require(['@/components/Ripple'],resolve)
    
    import axios from 'axios'
    import { mapState } from 'vuex'
    import echarts from 'echarts/lib/echarts'
    import macarons from 'echarts/theme/macarons'

    export default {
        data() {
            return {
               addressInfo: [],
               goodsList: [],
               orderList: {},
               myCharts: ''
            }
        },
         components:{
          NavHeader,
          NavFooter,
          NavBread,
          Ripple
        },
        computed: {
          DetailData() {
            return this.$store.state.detail.DetailData
          },
          ...mapState({
            shipping: state => state.order.shipping,
            discount:state => state.order.discount,
            tax: state => state.order.tax,
          })
        },
        mounted() {
           this.init(this.DetailData)
        },
        updated() {
          this.echartsInit(this.goodsList, this.orderList.orderTotal)
        },
         methods:{
           init(DetailData) {
             if(!DetailData && !localStorage.DetailData) {
               this.$router.push('/orderList')
               return
             } else if(DetailData){
              localStorage.DetailData = JSON.stringify(DetailData)
              this.addressInfo = DetailData.addressInfo
              this.goodsList = DetailData.goodsList,
              this.orderList = DetailData
              this.echartsInit(this.goodsList, this.orderList.orderTotal)
             } else {
               const data = JSON.parse(localStorage.DetailData)
               this.addressInfo = data.addressInfo
               this.goodsList = data.goodsList
               this.orderList = data
               this.echartsInit(this.goodsList, this.orderList.orderTotal)
             }  

             window.addEventListener('resize',() => {
               this.echartsInit(this.goodsList, this.orderList.orderTotal)  
             })
           },
            entryOrderList() {
              this.$router.push({
                path: '/orderList'
              })
            },
            echartsInit(goodsList, orderTotal) {

             if(this.myCharts != '') {
               echarts.dispose(this.myCharts)
             }

             this.myCharts = echarts.init(this.$refs.priceEcharts, 'macarons')
 
              const areaData = [],
                    pielegendData = [],
                    barData = [],
                    barXData = []

              for(let item of goodsList) {
                const obj = {},
                      singleTotal = item.salePrice * item.productNum
                obj.name = item.productName + ' ' + singleTotal + '￥'
                obj.value = singleTotal
                areaData.push(obj)
                pielegendData.push(obj.name)
                barData.push(singleTotal)
                barXData.push(item.productName)
              }

              const option = {

                baseOption: {
                  backgroundColor: 'rgba(54, 190, 217, 0.3)',
                  title: {
                    text: '价格组成',
                    subtext: `共计${orderTotal}￥`,
                    subtextStyle: {
                      color: '#F15B47',
                      fontWeight: 'bold',
                      fontSize: 18
                    },
                    x: 'center'
                  },
                  tooltip: {
                    trigger: 'item',
                    formatter: '{a}<br/>{b} : {c} ({d}%)'
                  },
                  legend: {
                    orient: 'vertical',
                    left: 10,
                    top: 60,
                    data: pielegendData
                  },
                  toolbox: {
                    show: true,
                    orient: 'vertical',
                    top: 60,
                    right: 30,
                    feature: {
                        saveAsImage: {
                          show: true
                        }
                    }
                  },
                  series: [ {
                      name: '价格组成',
                      type: 'pie',
                      radius: ['10%', '50%'],
                      center: ['50%', '55%'],
                      roseType: 'area',
                      data: areaData
                    }
                  ],
                  itemStyle: {
                    normal: {
                      shadowBlur: 300,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowColor: 'rgba(74, 187, 240, 1)'
                    }
                  }
                },

                media: [{
                  query: {
                    maxWidth: 900
                  },
                  option: {
                    series: [{
                      radius: '40%',
                      roseType: false
                    }]
                  }
                }, {
                  query: {
                    maxWidth: 780
                  },
                  option: {
                    legend: {
                      orient: 'vertical',
                      left: 'left',
                      top: 60,
                      data: ['价格组成']
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{a}<br/>{b} : {c}￥',
                      axisPointer: {
                        type: 'shadow',
                        label: {
                          backgroundColor: '#B97AFF'
                        }
                      }
                    },
                     grid: {
                        left: 'center',
                        top: 120,
                        width: '70%',
                        height: '70%'
                    },
                    xAxis: { },
                    yAxis: {
                       data: barXData
                    },
                    series: [{
                      type: 'bar',
                      data: barData,
                      barWidth: 20,
                    }],
                    itemStyle: {
                      normal: {
                        barBorderRadius: [0,10,10,0]
                      }
                    }
                  }
                }, {
                  query: {
                    maxWidth: 620
                  },
                  option: {
                     grid: {
                        width: '60%'
                    }
                  } 
                },{
                  query: {
                    maxWidth: 460
                  },
                  option: {
                     grid: {
                        width: '50%'
                    },
                    xAxis: {
                      splitNumber: 3
                    }
                  } 
                },{
                  query: {
                    maxWidth: 370
                  },
                  option: {
                     grid: {
                        width: '42%'
                    },
                    xAxis: {
                      splitNumber: 3
                    }
                  } 
                },{
                  query: {
                    maxWidth: 330
                  },
                  option: {
                     grid: {
                        width: '36%'
                    },
                    xAxis: {
                      splitNumber: 2
                    }
                  } 
                },{
                  query: {
                    maxWidth: 290
                  },
                  option: {
                     grid: {
                        width: '30%'
                    },
                    xAxis: {
                      splitNumber: 1
                    }
                  } 
                }] 
              }

              this.myCharts.setOption(option)
            }
        }
    }
</script>