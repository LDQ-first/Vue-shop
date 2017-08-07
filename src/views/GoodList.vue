<template>
    <div>
      <NavHeader/>
      <Bread>
        <span>Goods</span>
      </Bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd @click="setPriceFilter('all')" ><a href="javascript:void(0)" :class="{'cur':priceChecked === 'all'}">All</a></dd>
                <dd v-for="(price, index) in priceFilter" key="index" @click="setPriceFilter(index)"  >
                  <a href="javascript:void(0)" :class="{'cur': priceChecked == index}">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
                <!--<dd>
                  <a href="javascript:void(0)">100 - 500</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">500 - 1000</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">1000 - 2000</a>
                </dd>-->
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="(item, index) in goodsList" key="index">
                    <div class="pic">
                      <a href="#"><img v-lazy="`static/${item.prodcutImg}`" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.prodcutPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <!--<li>
                    <div class="pic">
                      <a href="#"><img src="static/2.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">1000</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="pic">
                      <a href="#"><img src="static/3.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">500</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="pic">
                      <a href="#"><img src="static/4.jpg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">2499</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>-->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
     <NavFooter/>
    </div>
</template>
<script>
    import '@/assets/css/base.css'
    import '@/assets/css/product.css'
    import '@/assets/css/login.css'
    import NavHeader from '@/components/Header'
    import NavFooter from '@/components/Footer'
    import Bread from '@/components/Bread'
    import axios from 'axios'
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
                    }
                ],
                priceChecked: 'all',
                filterBy: false,
                overLayFlag: false

            }
        },
        components:{
            NavHeader,
            NavFooter,
            Bread
        },
        mounted: function () {
            this.getGoodsList()
        },
        methods: {
            getGoodsList() {
                axios.get("/goods").then(result => {
                    var res = result.data.data
                    this.goodsList = res
                })
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
            }
        }
    }
</script>
