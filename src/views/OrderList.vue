<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>我的订单列表</span>
    </nav-bread>
    <svg style="position: absolute; wilih: 0; height: 0; overflow: hidden;" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
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
      </defs>
    </svg>
    <div class="container">
        <div class="order">
            <div class="page-title-normal">
                <h2 class="page-title-h2"><span>我的订单列表</span></h2>
                <h3 class="page-title-h3"><span>共有{{orderList.length}}条订单</span></h3>
            </div>
        </div>
        <div class="orderList">
            <ul class="order-item-list clearfix">
                <li v-for="(item, index) in orderList" key="index" class="order-item" 
                :class="{'checked': checkIndex == index }" @click="checkIndex = index; ">
                    <div>
                        <ul class="order-list">
                            <li><strong>订单ID: </strong>{{item.orderId}}</li>
                            <li class="total"><strong>订单总价: </strong>{{item.orderTotal | currency('￥')}}</li>
                            <li class="date"><strong>创建时间: </strong>{{item.createDate}}</li>
                            <li class="user"><strong>收货人: </strong>{{item.addressInfo.userName}}</li>
                            <li class="tel"><strong>手机: </strong>{{item.addressInfo.tel}}</li>
                            <li class="street"><strong>收货地址: </strong>{{item.addressInfo.streetName}}</li>
                        </ul>
                        <div class="more">
                            <a href="javascript:;" @click="checkIndex = index;enterDetail()">详细信息</a>
                        </div>
                        <div class="order-opration order-del">
                            <a href="javascript:;" class="order-del-btn" @click="delOrderConfirm(item)">
                                <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30" class="load-more">
            <img src="../assets/loading-spinning-bubbles.svg" alt="" v-show="loading">
        </div>
    </div>
    <Modal :mdShow="modalConfirm" @close="closeModal">
      <p slot="message">你确认要删除此条数据吗?</p>
      <div slot="btnGroup" class="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="delOrder">确认</a>
        <a class="btn btn--m btn--red" href="javascript:;" @click="modalConfirm = false">关闭</a>
      </div>
    </Modal>
    <nav-footer class="noPadding"></nav-footer>
  </div>
</template>

<script>
    import '@/assets/css/orderList.scss'

    const NavHeader = resolve => require(['@/components/Header'], resolve)
    const NavFooter = resolve => require(['@/components/Footer'], resolve)
    const NavBread = resolve => require(['@/components/Bread'], resolve)
    const Modal = resolve => require(['@/components/Modal'], resolve)
    
    import axios from 'axios'
    export default {
        data() {
            return {
                orderList: [],
                modalConfirm: false,
                delItem: '',
                checkIndex: 0,
                loading: false,
                busy: true,
                page: 1,
                pageSize: 6
            }
        },
         components:{
          NavHeader,
          NavFooter,
          NavBread,
          Modal
        },
        mounted() {
            this.init()
        },
        computed: {
           
        },
         methods:{
             init(flag) {
                const param = {
                    page: this.page,
                    pageSize: this.pageSize
                }
                this.loading = true
                axios.get("/users/orderList", {
                    params: param
                })
                .then(res => res.data)
                .then(data => {
                    if(data.status === '200') {
                        if(flag) {
                            this.orderList = this.orderList.concat(data.result.list)
                            if(data.result.count === 0) {
                                this.busy = true
                            } else {
                                this.busy = false
                            }
                        }
                        else {
                            this.orderList = data.result.list
                            this.busy = false
                        }
                    }
                    this.loading = false
                })
             },
             closeModal() {
                 this.modalConfirm = false
             },
             delOrderConfirm(item) {
                 this.delItem = item
                 this.modalConfirm = true
             },
             delOrder() {
                 axios.post("/users/delOrder",{
                     orderId: this.delItem.orderId
                 })
                 .then(res => res.data)
                 .then(data => {
                    if(data.status === '200') {
                        this.modalConfirm = false
                        for(let key in this.orderList) {
                        if(this.orderList[key].orderId === this.delItem.orderId) {
                                this.orderList.splice(key, 1)
                                break
                            }
                        }
                        /*this.init()*/
                    }
                })
             },
             loadMore() {
                this.busy = true
                setTimeout(() => {
                    this.page++
                    this.init(true)
                }, 800);
             },
             enterDetail() {
                 const data = this.orderList[this.checkIndex]
                 console.log(this.checkIndex)
                 this.$store.commit('updeteDetailDate', data)
                 this.$router.push({
                     path: '/orderDetail'
                 })
             }
            
        }
    }
</script>