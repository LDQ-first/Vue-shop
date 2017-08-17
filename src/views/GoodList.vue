<template>
    <div>
      <NavHeader/>
      <Bread>
        <span>商品</span>
      </Bread>
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
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="(item, index) in goodsList" key="index">
                    <div class="pic">
                      <a href="#"><img v-lazy="`static/${item.productImage}`" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.salePrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30" class="load-more">
                  <img src="../assets/loading-spinning-bubbles.svg" alt="" v-show="loading">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
      <Modal :mdShow="mdShow" @close="closeModal">
        <p slot="message">
          请先登录，否则无法加入到购物车中!
        </p>
        <div slot="btnGroup" class="btnGroup">
          <a class="btn btn--m" @click="mdShow=false">关闭</a>
        </div>
      </Modal>
      <Modal :mdShow="mdShowCart" @close="closeModal">
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
      </Modal>
     <NavFooter class="noPadding"/>
    </div>
</template>
<script>
    import '@/assets/css/base.css'
    import '@/assets/css/product.css'
    import NavHeader from '@/components/Header'
    import NavFooter from '@/components/Footer'
    import Bread from '@/components/Bread'
    import Modal from '@/components/Modal'
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
                pageSize: 8,
                busy: true,
                loading: false,
                mdShow: false,
                mdShowCart: false

            }
        },
        components:{
            NavHeader,
            NavFooter,
            Bread,
            Modal
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
                axios.get("/goods/list", {
                    params: param
                }).then( res => res.data).then(data => {
                  if(flag) {
                     this.goodsList = this.goodsList.concat(data.result.list)
                     if(data.result.count === 0) {
                       this.busy = true
                     }
                     else {
                       this.busy = false
                     }
                  }
                  else {
                    this.goodsList = data.result.list
                    this.busy = false
                  }
                  this.loading = false
                })
            },
            sortGoods() {
              this.sortFlag = !this.sortFlag
              this.page = 1
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
                this.getGoodsList()
            },
            loadMore() { 
              //禁止滚动加载
              this.busy = true
              setTimeout(() => {
                this.page++
                this.getGoodsList(true)
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
            }
        }
    }
</script>
