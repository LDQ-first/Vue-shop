<template>
  <div class="orderDetail-wrapper">
    <nav-header></nav-header>
    <nav-bread>
      <span class="item-sp">订单详情</span>
    </nav-bread>
    <svg style="position: absolute; wilih: 0; height: 0; overflow: hidden;" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-add" viewBox="0 0 32 32">
          <title>add2</title>
          <path class="path1"
                d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
        </symbol>
        <symbol id="icon-ok" viewBox="0 0 32 32">
          <title>ok</title>
          <path class="path1"
                d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path class="path1"
                d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path class="path1"
                d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
          <path class="path2"
                d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          <path class="path3"
                d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          <path class="path4"
                d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
        </symbol>
        <symbol id="icon-clock" viewBox="0 0 32 32">
          <title>clock</title>
          <path class="path1" fill="#605f5f"
                d="M16 29c-7.168 0-13-5.831-13-13s5.832-13 13-13c7.168 0 13 5.832 13 13s-5.832 13-13 13zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
          <path class="path2" fill="#605f5f"
                d="M23.958 21.837l-6.958-6.489v-6.282c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v6.934c0 0.414 0.174 0.814 0.477 1.098l7.435 6.934c0.279 0.259 0.642 0.402 1.023 0.402 0.415 0 0.814-0.174 1.096-0.477 0.564-0.605 0.532-1.555-0.073-2.12z"></path>
        </symbol>
      </defs>
    </svg>
    <div class="container clearfix">
        <div class="order">
            <div class="page-title-normal">
                <h2 class="page-title-h2"><span>订单详情</span></h2>
            </div>
        </div>
          <div class="orderDetail">
            <ul class="goods-list">
              <li v-for="(good, index) in goodsList" key="index" class="goods-item">
                  <img :src="`static/${good.productImage}`" alt="">
                  <h3><strong>商品：</strong>{{good.productName}}</h3>
                  <span class="item-sp"><strong>价格：</strong>{{good.salePrice | currency('￥')}}</span>
                  <span class="item-sp"><strong>数量：</strong>{{good.productNum}}</span>
                  <span class="item-sp"><strong>总价：</strong>{{(good.salePrice * good.productNum) | currency('￥')}}</span>
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
    <nav-footer class="noPadding"></nav-footer>
  </div>
</template>

<script>
    import '@/assets/css/orderDetail.scss'

    const NavHeader = resolve => require(['@/components/Header'], resolve)
    const NavFooter = resolve => require(['@/components/Footer'], resolve)
    const NavBread = resolve => require(['@/components/Bread'], resolve)
    
    import axios from 'axios'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
               addressInfo: [],
               goodsList: [],
               orderList: {}
            }
        },
         components:{
          NavHeader,
          NavFooter,
          NavBread,
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
         methods:{
           init(DetailData) {
             if(!DetailData && !localStorage.DetailData) {
               this.$router.push('/orderList')
             } else if(DetailData){
              localStorage.DetailData = JSON.stringify(DetailData)
              this.addressInfo = DetailData.addressInfo
              this.goodsList = DetailData.goodsList,
              this.orderList = DetailData
             } else {
               const data = JSON.parse(localStorage.DetailData)
               this.addressInfo = data.addressInfo
               this.goodsList = data.goodsList
               this.orderList = data
             }  
           },
            entryOrderList() {
              this.$router.push({
                path: '/orderList'
              })
            }
        }
    }
</script>