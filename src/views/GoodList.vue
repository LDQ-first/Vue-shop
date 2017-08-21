<template>
    <div>
    <div class="page-container">
      <nav-header/>
      <bread>
        <span>商品</span>
      </bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">排序:</span>
            <a href="javascript:void(0)" class="default cur">默认</a>
            <a @click="sortGoods" href="javascript:void(0)" class="price" :class="{'sort-up':sortFlag}">价格 
              <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg>
            </a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">过滤</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}">
              <dl class="filter-price">
                <dt>价格:</dt>
                <dd @click="setPriceFilter('all')" ><a href="javascript:void(0)" :class="{'cur':priceChecked === 'all'}">全部</a></dd>
                <dd v-for="(price, index) in priceFilter" key="index" @click="setPriceFilter(index)"  >
                  <a href="javascript:void(0)" :class="{'cur': priceChecked == index}">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <pull-refresh :next="pullRefresh">
              <div slot="list" class="accessory-list col-4">
                <ul>
                  <li v-for="(item, index) in goodsList" key="index">
                    <div class="pic">
                      <a href="javascript:;"><img v-lazy="`static/${item.productImage}`" alt="" @click="showPirceDetail(item)"></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.salePrice | currency('￥')}}</div>   
                        <div class="btn-area">
                          <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                        </div>
                    </div>
                  </li>
                </ul>
              </div>
               </pull-refresh>
               <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30" class="load-more">
                  <img src="../assets/loading-spinning-bubbles.svg" alt="" v-show="loading">
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
      <modal :mdShow="mdShow" @close="closeModal">
        <p slot="message">
          请先登录，否则无法加入到购物车中!
        </p>
        <div slot="btnGroup" class="btnGroup">
          <a class="btn btn--m" @click="mdShow=false">关闭</a>
        </div>
      </modal>
      <modal :mdShow="mdShowCart" @close="closeModal">
        <p slot="message">
          <svg class="icon-status-ok">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
          </svg>
          <span>加入购物车成功！</span>
        </p>
        <div slot="btnGroup" class="btnGroup">
          <a class="btn btn--m" @click="mdShowCart=false">继续购物</a>
           <router-link class="btn btn--m" to="/cart">查看购物车</router-link>
        </div>
      </modal>
      <modal :mdShow="goodsPrice" @close="closeModal" id="goodsPrice">
        <div slot="title" class="md-title">价格走势</div>
        <div slot="message">
          <div class="goodsPriceEcharts" ref="goodsPriceEcharts"></div>
        </div>
        <div slot="btnGroup" class="btnGroup"></div>
      </modal>
      </div>
     <nav-footer class="noPadding"/>
    </div>
</template>

<style lang="scss">
  #goodsPrice {
    .md-modal {
      width: 80% !important;
      @media screen and (max-width: 580px) {
        width: 100% !important;
      }
    }
  }
</style>

<script>
    import '@/assets/css/base.scss'
    import '@/assets/css/product.scss'
   

    const NavHeader = resolve => require(['@/components/Header'], resolve)
    const NavFooter = resolve => require(['@/components/Footer'], resolve)
    const Bread = resolve => require(['@/components/Bread'], resolve)
    const Modal = resolve => require(['@/components/Modal'], resolve)

    import axios from 'axios'
    import echarts from 'echarts/lib/echarts'
    import macarons from 'echarts/theme/macarons'

    const pullRefresh = resolve => require(['@/components/pullRefreshs'], resolve)

    export default{
        data(){
            return {
                goodsList: [],
                priceFilter: [
                    {
                        startPrice: '0.00',
                        endPrice: '500.00'
                    },
                    {
                        startPrice: '500.00',
                        endPrice: '1000.00'
                    },
                    {
                        startPrice: '1000.00',
                        endPrice: '2000.00'
                    },
                    {
                        startPrice: '2000.00',
                        endPrice: '4000.00'
                    }
                ],
                priceChecked: 'all',
                filterBy: false,
                overLayFlag: false,
                sortFlag: true,
                page: 1,
                refreshPage: 2,
                pageSize: 8,
                busy: false,
                loading: false,
                mdShow: false,
                mdShowCart: false,
                goodsPrice: false,
                myCharts: ''
            }
        },
        components:{
            NavHeader,
            NavFooter,
            Bread,
            Modal,
            pullRefresh
        },
        mounted: function () {
            this.getGoodsList()
        },
        methods: {
            getGoodsList(flag) {
                const param = {
                  page: this.page, 
                  pageSize: this.pageSize,
                  sort: this.sortFlag ? 1 : -1,
                  priceChecked: this.priceChecked
                }
                this.loading = true;
                if(!this.busy) {
                  axios.get("/goods/list", {
                      params: param
                  }).then( res => res.data).then(data => {
                      if(data.result.count === 0) {
                        this.page = 1
                        this.busy = true
                      }
                      else {
                        if(flag) {
                          this.goodsList = this.goodsList.concat(data.result.list)
                        }
                        else {
                          this.goodsList = data.result.list
                        }
                        this.busy = false
                      }
                    this.loading = false
                  })
                }
                else {
                  return 
                }
            },
            pullRefresh() {
               const param = {
                  page: this.refreshPage, 
                  pageSize: this.pageSize,
                  sort: this.sortFlag ? 1 : -1,
                  priceChecked: this.priceChecked
                }
               return axios.get("/goods/list", {
                    params: param
                })
                .then( res => res.data)
                .then(data => {              
                  if(data.result.count === 0) {
                    this.refreshPage = 1
                    this. pullRefresh() 
                  }
                  else {
                    this.goodsList = data.result.list
                    this.page = this.refreshPage
                    this.refreshPage++
                  }
                  this.busy = false
                })
            },
            sortGoods() {
              this.sortFlag = !this.sortFlag
              this.page = 1
              this.busy = false
              this.getGoodsList()
            },
            showFilterPop() {
                this.filterBy = true
                this.overLayFlag = true
            },
            closePop() {
                this.filterBy = false
                this.overLayFlag = false
            },
            setPriceFilter(state) {
                this.priceChecked = state
                this.closePop()
                this.page = 1
                this.busy = false
                this.getGoodsList()
            },
            loadMore() { 
              setTimeout(() => {
                this.page++
                this.getGoodsList(true)
                this.busy = true
              }, 500);
            },
            addCart(productId) {
              axios.post("/goods/addCart", { productId: productId })
                   .then( res => res.data)
                   .then( data => {
                      if(data.status !== '200') {
                        this.mdShow = true
                      }
                      else {
                        this.$store.commit("updateCartCount", 1)
                        this.mdShowCart = true
                      }
                   })
            },
            closeModal() {
              this.mdShow = false,
              this.mdShowCart = false
              this.goodsPrice = false
            },
            showPirceDetail(item) {
              const productId = item.productId,
                    productName = item.productName
              this.findPirceDetail(productId)
                  .then(priceDetail => {
                    this.echartsInit(priceDetail, productName)
                    window.addEventListener('resize',() => {
                      this.echartsInit(priceDetail, productName)  
                    })
                    this.goodsPrice = true
                  })
            },
            findPirceDetail(productId) {
              return axios.get('/goods/priceDetail',{
                params: {
                  productId: productId
                }
              }).then(res => res.data)
                .then(data => {
                  if(data.status === '200') {
                    return data.result.priceDetail
                  } else {
                    return []
                  }
                })
            },
             echartsInit(priceDetail, productName) {

             if(this.myCharts != '') {
               echarts.dispose(this.myCharts)
             }

             this.myCharts = echarts.init(this.$refs.goodsPriceEcharts, 'macarons')
 
              let lineData = priceDetail,
                  linelegendData = [],
                  lineXData = [],
                  month = new Date().getMonth() + 1
             
             for(let i = 0; i < 4; i++) {
               lineXData[3 - i] = month - i + '月'
             }
              linelegendData.push(productName)

              const option = {

                baseOption: {
                  backgroundColor: 'rgba(54, 190, 217, 0.3)',
                  title: {
                    text: '近四个月的价格趋势(单位：￥)',
                    x: 'center'
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                  },
                  legend: {
                    orient: 'vertical',
                    left: 30,
                    top: 40,
                    data: linelegendData
                  },
                  toolbox: {
                    show: true,
                    orient: 'vertical',
                    top: 40,
                    right: 30,
                    feature: {
                        saveAsImage: {
                          show: true
                        },
                        dataZoom: {
                          show: true
                        },
                        magicType: {
                          show: true,
                          type: ['line', 'bar']
                        }
                    }
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    data: lineXData
                  },
                  yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                  },
                  grid: {
                      left: 'center',
                      top: 100,
                  },
                  series: [ {
                      name: productName,
                      type: 'line',
                      smooth: true,
                      lineStyle: {
                      normal: {
                            width: 2
                        }
                      },
                      areaStyle: {
                          normal: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: 'rgba(107, 61, 207, 0.4)'
                              }, {
                                  offset: 0.8,
                                  color: 'rgba(169, 143, 227, 0.1)'
                              }], false),
                              shadowColor: 'rgba(0, 0, 0, 0.1)',
                              shadowBlur: 10
                          }
                      },
                      data: lineData
                    }
                  ],
                  itemStyle: {
                    normal: {
                      
                    }
                  }
                }
              }

              this.myCharts.setOption(option)
            }
        }
    }
</script>
