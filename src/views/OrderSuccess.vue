<template>
    <div>
    <div class="page-container">
      <nav-header></nav-header>
      <div class="container">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>确认</span></h2>
        </div>
        <!-- 进度条 -->
        <div class="check-step">
          <ul>
            <li class="cur"><span>确认</span> 地址</li>
            <li class="cur"><span>查看</span> 订单</li>
            <li class="cur"><span>付</span> 款</li>
            <li class="cur"><span>订单</span> 确认</li>
          </ul>
        </div>

        <div class="order-create">
          <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
          <div class="order-create-main">
            <h3>恭喜! <br>你的订单正在处理!</h3>
            <p>
              <span>订单ID：{{orderId}}</span>
              <span>订单总价：{{orderTotal|currency('￥')}}</span>
            </p>
            <div class="order-create-btn-wrap">
              <div class="btn-l-wrap">
                <router-link class="btn btn--m" to="/cart">购物车列表</router-link>
              </div>
              <div class="btn-r-wrap">
                <router-link class="btn btn--m" to="/">商品列表</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <nav-footer class="noPadding"></nav-footer>
    </div>
</template>
<script>

    const NavHeader = resolve => require(['@/components/Header'], resolve)
    const NavFooter = resolve => require(['@/components/Footer'], resolve)
    const NavBread = resolve => require(['@/components/Bread'], resolve)
    
    import axios from 'axios'
    export default{
        data(){
            return{
                orderId:'',
                orderTotal:0
            }
        },
        components:{
          NavHeader,
          NavFooter,
          NavBread
        },
        mounted(){
            const orderId = this.$route.query.orderId
            if(!orderId){
              return;
            }
            axios.get("/users/orderDetail",{
                params:{
                  orderId:orderId
                }
            })
            .then(res => res.data)
            .then(data => {
                if(data.status === '200'){
                    this.orderId = orderId
                    this.orderTotal = data.result.orderTotal
                }
            })
        }
    }
</script>