<template>
    <div>
       <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-ok" viewBox="0 0 32 32">
          <title>ok</title>
          <path class="path1"
                d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"></path>
        </symbol>
      </defs>
    </svg>
      <nav-header></nav-header>
      <nav-bread>
        <span>地址</span>
      </nav-bread>
      <div class="checkout-page">
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <symbol id="icon-add" viewBox="0 0 31 32">
              <title>add</title>
              <path class="path1" d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"></path>
            </symbol>
            <symbol id="icon-ok" viewBox="0 0 32 32">
              <title>ok</title>
              <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
            </symbol>
            <symbol id="icon-edit" viewBox="0 0 32 32">
              <title>edit</title>
              <path class="path1" d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
            </symbol>
            <symbol id="icon-del" viewBox="0 0 32 32">
              <title>delete</title>
              <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
              <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
              <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
              <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            </symbol>
            <symbol id="icon-clock" viewBox="0 0 32 32">
              <title>clock</title>
              <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
            </symbol>
            <symbol id="icon-question" viewBox="0 0 32 32">
              <title>question</title>
              <path class="path1" d="M16 2.56c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44c-7.411 0-13.44-6.029-13.44-13.44s6.029-13.44 13.44-13.44zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
              <path class="path2" d="M16 22.080c-1.059 0-1.92 0.861-1.92 1.92s0.861 1.92 1.92 1.92c1.059 0 1.92-0.861 1.92-1.92s-0.861-1.92-1.92-1.92z"></path>
              <path class="path3" d="M12.16 12.48c0.706 0 1.28-0.574 1.28-1.28 0-1.412 1.148-2.56 2.56-2.56s2.56 1.148 2.56 2.56c0 1.412-1.148 2.56-2.56 2.56-0.706 0-1.28 0.574-1.28 1.28v3.84c0 0.706 0.574 1.28 1.28 1.28s1.28-0.574 1.28-1.28v-2.723c2.224-0.575 3.84-2.616 3.84-4.957 0-2.823-2.297-5.12-5.12-5.12s-5.12 2.297-5.12 5.12c0 0.706 0.574 1.28 1.28 1.28z"></path>
            </symbol>
          </defs>
        </svg>
        <div class="container">
          <div class="checkout-addr">
            <div class="page-title-normal">
              <h2 class="page-title-h2"><span>check out</span></h2>
            </div>
            <!-- process step -->
            <div class="check-step">
              <ul>
                <li class="cur"><span>确认</span> 地址</li>
                <li><span>查看</span> 订单</li>
                <li><span>付</span> 款</li>
                <li><span>订单</span> 确认</li>
              </ul>
            </div>

            <!-- address list -->
            <div class="page-title-normal checkout-title">
              <h2><span>送货地址</span></h2>
            </div>
            <div class="addr-list-wrap">
              <div class="addr-list">
                <ul>
                  <li v-for="(item,index) in addressListFilter" :class="{'check':checkIndex==index}" @click="checkIndex=index;selectedAddrId=item.addressId" key="index">
                    <dl>
                      <dt>{{item.userName}}</dt>
                      <dd class="address">{{item.streetName}}</dd>
                      <dd class="tel">{{item.tel}}</dd>
                    </dl>
                    <div class="addr-opration addr-del">
                      <a href="javascript:;" class="addr-del-btn" @click="delAddressConfirm(item.addressId)">
                        <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                      </a>
                    </div>
                    <div class="addr-opration addr-set-default">
                      <a href="javascript:;" class="addr-set-default-btn" v-if="!item.isDefault" @click="setDefault(item.addressId)"><i>设为默认地址</i></a>
                    </div>
                    <div class="addr-opration addr-default" v-if="item.isDefault">默认地址</div>
                  </li>
                  <li class="addr-new" @click="showAddressModal">
                    <div class="add-new-inner">
                      <i class="icon-add">
                        <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                      </i>
                      <p>添加地址</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="shipping-addr-more">
                <a class="addr-more-btn up-down-btn" href="javascript:;" @click.prevent="expand" :class="{'open':limit>3}">
                  更多
                  <i class="i-up-down">
                    <i class="i-up-down-l"></i>
                    <i class="i-up-down-r"></i>
                  </i>
                </a>
              </div>
            </div>

            <!-- shipping method-->
            <div class="page-title-normal checkout-title">
              <h2><span>送货方案</span></h2>
            </div>
            <div class="shipping-method-wrap">
              <div class="shipping-method">
                <ul>
                  <li class="check">
                    <div class="name">标准送货方案</div>
                    <div class="price">免费</div>
                    <div class="shipping-tips">
                      <p>一次送货，订单应该在7个工作日内完成</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="next-btn-wrap">
              <router-link class="btn btn--m btn--red" :to="{path:'orderConfirm',query:{'addressId':selectedAddrId}}" 
              :class="{'btn--dis': !addressList.length}">下一步</router-link>
            </div>
          </div>
        </div>
      </div>
      <modal :mdShow="isMdShow" @close="closeModal">
        <p slot="message">
          您是否确认要删除此地址?
        </p>
        <div slot="btnGroup">
            <a class="btn btn--m" href="javascript:;" @click.prevent="delAddress" >确认</a>
            <a class="btn btn--m btn--red" href="javascript:;" @click.prevent="isMdShow=false">取消</a>
        </div>
      </modal>
      <Modal :mdShow="addressModalFlag" @close="closeaddressModal">
          <div slot="title" class="md-title">添加地址</div>
          <div slot="message">
            <div class="error-wrap">
              <span class="error error-show" v-show="addressErrorTip">{{addressErrorText}}</span>
            </div>
            <ul>
              <li class="regi_form_input address_form_input" v-for="(item, index) of newAddress" key="index">
                <span class="input_title">{{newAddressTitle[index]}}</span>
                <input type="text" tabindex="2"  :name="`${index}`" v-model="newAddress[index]" v-if="isInput(index)"
                class="regi_login_input address_add_input regi_login_input_left login-input-no input_text" @blur="checkType(index)">
                <textarea name="address" class="address_textarea" v-model="newAddress.streetName" @blur="checkType(index)"
                  v-else-if="index === 'streetName'" placeholder="地址少于不能10个字"></textarea>
                <div class="cart-item-check" v-else="index === 'isDefault'">
                  <a href="javascipt:;" class="checkbox-btn item-check-btn" :class="{'check':item}" 
                    @click.prevent="editDefault('checked',item)">
                    <svg class="icon icon-ok">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-ok"></use>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div slot="btnGroup" class="btnGroup">
            <a href="javascript:;" class="btn-login" @click="addAddress">添加</a>
          </div>
        </Modal>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavHeader from '@/components/Header'
    import NavFooter from '@/components/Footer'
    import NavBread from '@/components/Bread'
    import Modal from '@/components/Modal'
    import axios from 'axios'
    export default{
        data() {
            return {
                limit: 3,
                checkIndex: 0,
                selectedAddrId: '',
                addressList: [],
                isMdShow: false,
                addressId: '',
                addressErrorTip: false,
                addressErrorText: '所有填空必填',
                addressModalFlag: false,
                newAddressTitle: {
                  "userName" : "收货人",
                  "streetName" : "地址",
                  "postCode" : "邮编",
                  "tel" : "手机",
                  "isDefault" : "是否为默认地址"
                },
                newAddress: {
                  "userName" : "",
                  "streetName" : "",
                  "postCode" : "",
                  "tel" : "",
                  "isDefault" : false
                }
            }
        },
        mounted(){
            this.init();
        },
        computed:{
            addressListFilter(){
                return this.addressList.slice(0,this.limit)
            }
        },
        components:{
            NavHeader,
            NavFooter,
            NavBread,
            Modal
        },
        methods:{
            init(){
                axios.get("/users/addressList")
                    .then(res => res.data)
                    .then(data =>{
                      if(data.status === '200') {
                          for(let i in data.result) {
                            if(data.result[i].isDefault) {
                              data.result.splice(0, 0 , data.result.splice(i,1)[0])
                            }
                          }
                          this.addressList = data.result
                          this.selectedAddrId = this.addressList[0].addressId
                        }
                        else {
                          console.log(this.addressList.length === 0)
                        }
                    })
            },
            expand(){
                if(this.limit === 3){
                    this.limit = this.addressList.length
                }else{
                    this.limit = 3
                }
            },
            editDefault(flag, isDefault) {
              console.log(isDefault)
              if(flag === 'checked') {
                     this.newAddress.isDefault = isDefault === true ? false : true
                 }
            },
            setDefault(addressId){
                axios.post("/users/setDefault",{
                    addressId:addressId
                })
                .then(res => res.data)
                .then(data =>{
                    if(data.status === '200'){
                        this.init()
                    }
                })
            },
            closeModal(){
                this.isMdShow = false
            },
            delAddressConfirm(addressId){
                this.isMdShow = true
                this.addressId = addressId
            },
            delAddress(){
                axios.post("/users/delAddress",{
                    addressId:this.addressId
                })
                .then(res => res.data)
                .then(data => {
                    if(data.status === "200"){
                        this.isMdShow = false
                        this.init()
                    }
                })
            },
            addAddress() {
              for(let key of Object.keys(this.newAddress)) {
                if(this.newAddress[key] === '') {
                  this.addressErrorText = '所有填空必填'
                  this.addressErrorTip = true
                  return
                }
              }
              
              if(!this.addressErrorTip) {
                 axios.post('/users/addAdress', {
                    newAddress: this.newAddress
                  })
                    .then(res => res.data)
                    .then(data => {
                      if(data.status === '200') {
                        this.addressModalFlag = false
                        this.init()
                      }
                    })
              }
             
            },
            closeaddressModal() {
              this.addressModalFlag = false
            },
            isInput(index) {
              if(index === 'streetName' ||
                 index === 'isDefault') {
                   return false
                 }
                 else {
                   return true
                 }
            },
            showAddressModal() {
              this.addressModalFlag = true
              this.newAddress = {
                  "userName" : "",
                  "streetName" : "",
                  "postCode" : "",
                  "tel" : "",
                  "isDefault" : false
                }
            },
            checkType(index) {
              if(index === 'postCode') {
                const re = /^[1-9][0-9]{5}$/
                if(!re.test(this.newAddress.postCode)) {
                  this.addressErrorText = '邮编有错'
                  this.addressErrorTip = true
                }
                else {
                  this.addressErrorTip = false
                }
              }
              else if(index === 'tel') {
                const mpRe = /^1[34578]\d{9}$/
                if(!mpRe.test(this.newAddress.tel) ) {
                  this.addressErrorText = '手机号码有错'
                  this.addressErrorTip = true
                }
                else {
                  this.addressErrorTip = false
                }
              } else if(index === 'streetName') {
                if(this.StrLen(this.newAddress.streetName) < 10) {
                   this.addressErrorText = '地址少于不能10个字'
                   this.addressErrorTip = true
                }
                else {
                  this.addressErrorTip = false
                }
              }
            },
           StrLen(sString) {
              let j = 0;
              const s = sString;
              if (s=="") return j;
              for (let i = 0; i < s.length; i++) {
                  if (s.substr(i,1).charCodeAt(0)>255) j = j + 2;
                  else j++
              }
              return j;
            }
        }
    }
</script>