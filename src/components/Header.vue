<template>
    <header class="header">
       <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-arrow-short" viewBox="0 0 25 32">
            <title>arrow-short</title>
            <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
          </symbol>
          <symbol id="icon-status-ok" viewBox="0 0 32 32">
            <title>status-ok</title>
            <path class="path1" d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"></path>
            <path class="path2" d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"></path>
          </symbol>
          <symbol id="icon-cart" viewBox="0 0 38 32">
            <title>cart</title>
            <path fill="rgba(255, 255, 255, 1)" class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
            <path fill="rgba(255, 255, 255, 1)" class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
            <path fill="rgba(255, 255, 255, 1)" class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
            <path fill="rgba(255, 255, 255, 1)" class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
          </symbol>
        </defs>
      </svg>
        <div class="navbar">
          <div class="navbar-left-container">
            <a href="/">
              <img class="navbar-brand-logo" src="static/logo.png"></a>
          </div>
          <div class="navbar-right-container" style="display: flex;">
            <div class="navbar-menu-container">
              <!--<a href="/" class="navbar-link">我的账户</a>-->
              <ripple bg="#eb767d" speed="1">
                <span class="nickName" v-text="nickName" v-if="nickName" @click="enterOrder"></span>
              </ripple>
               <ripple bg="#eb767d" speed="1" :br="br">
                <a href="javascript:void(0)" class="navbar-link" @click="showLoginModal" v-show="!nickName">登录</a>
              </ripple>
              <ripple bg="#eb767d" speed="1" :br="br">
                <a href="javascript:void(0)" class="navbar-link" @click="showSignupModal" v-show="!nickName">注册</a>
              </ripple>
              <ripple bg="#eb767d" speed="1" :br="br">
                <a href="javascript:void(0)" class="navbar-link" v-show="nickName" @click="Logout">登出</a>
              </ripple>
              <ripple bg="#eb767d" speed="1" :br="br">
                <div class="navbar-cart-container" >
                  <span class="navbar-cart-count" v-if="cartCount > 0">{{cartCount}}</span>    
                  <a class="navbar-link navbar-cart-link" href="javascript:;" @click="enterCart">
                    <svg class="navbar-cart-logo">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
                    </svg>
                  </a>
                </div>
              </ripple>
            </div>
          </div>
        </div>
         <div class="md-modal modal-msg md-modal-transition" :class="{'md-show':loginModalFlag}">
          <div class="md-modal-inner">
            <div class="md-top">
              <div class="md-title">登录</div>
              <button class="md-close" @click="loginModalFlag=false">关闭</button>
            </div>
            <div class="md-content">
              <div class="confirm-tips">
                <div class="error-wrap">
                  <span class="error error-show" v-show="errorTip">{{errorTipText}}</span>
                </div>
                <div class="right-wrap">
                  <span class="right right-show" v-show="rightTip">{{rightTipText}}</span>
                </div>
                <ul>
                  <li class="regi_form_input">
                    <i class="icon IconPeople"></i>
                    <input type="text" tabindex="1" name="loginname" v-model="userName"
                     @blur="findisRepeated"  @input="clearTip"
                    class="regi_login_input regi_login_input_left" placeholder="User Name" data-type="loginname" >
                  </li>
                  <li class="regi_form_input noMargin">
                    <i class="icon IconPwd"></i>
                    <input type="password" tabindex="2"  name="password" v-model="userPwd" 
                    @blur="checkPwd" @input="clearTip"
                    class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="Password">
                  </li>
                  <li class="regi_form_input captcha_form_input">
                    <input type="text" tabindex="2" name="loginname" v-model="captcha" 
                    @blur="isCaptchaTrue" @input="clearTip"
                    class="regi_login_input regi_login_input_left captcha_input" placeholder="验证码" data-type="captcha">
                   <span class="captcha_img" v-html="captchaImg" @click="getCaptcha" title="更换验证码"></span>
                  </li>
                </ul>
              </div>
              <div class="login-wrap">
                <a href="javascript:;" class="btn-login" @click="Login">登  录</a>
              </div>
            </div>
          </div>
        </div>
        <div class="md-overlay " v-if="loginModalFlag" @click="loginModalFlag=false"></div>
         <Modal :mdShow="mdShow" @close="closeModal">
          <p slot="message">
            请先登录，否则无法进入到购物车中!
          </p>
          <div slot="btnGroup" class="btnGroup">
            <a class="btn btn--m" @click="mdShow=false">关闭</a>
          </div>
        </Modal>
        <Modal :mdShow="signupModalFlag" @close="closeModal">
          <div slot="title" class="md-title">注册</div>
          <div slot="message">
            <div class="error-wrap">
              <span class="error error-show" v-show="signUpErrorTip">{{signUpErrorText}}</span>
            </div>
            <div class="right-wrap">
              <span class="right right-show" v-show="signUpRightTip">{{signUpRightTipText}}</span>
            </div>
            <ul>
              <li class="regi_form_input">
                <i class="icon IconPeople"></i>
                <input type="text" tabindex="1" name="loginname" v-model="userName" class="regi_login_input regi_login_input_left" 
                  placeholder="用户名" data-type="loginname" @blur="findisRepeated" @input="clearTip">
              </li>
              <li class="regi_form_input noMargin">
                <i class="icon IconPwd"></i>
                <input type="password" tabindex="2"  name="password" v-model="userPwd" class="regi_login_input regi_login_input_left login-input-no input_text" 
                  placeholder="密码" @input="clearTip">
              </li>
              <li class="regi_form_input noMargin">
                <i class="icon IconPwd"></i>
                <input type="password" tabindex="2"  name="password" v-model="userPwdAgain" class="regi_login_input regi_login_input_left login-input-no input_text" 
                  placeholder="再次确认密码" @blur="isDiff" @input="clearTip">
              </li>
              <li class="regi_form_input captcha_form_input">
                <input type="text" tabindex="2" name="loginname" v-model="captcha" class="regi_login_input regi_login_input_left captcha_input" 
                  placeholder="验证码" data-type="captcha" @blur="isCaptchaTrue" @input="clearTip">
                <span class="captcha_img" v-html="captchaImg" @click="getCaptcha" title="更换验证码"></span>
              </li>
            </ul>
          </div>
          <div slot="btnGroup" class="btnGroup">
            <a href="javascript:;" class="btn-login" @click="SignUp">注册</a>
          </div>
        </Modal>
      </header>
</template>

<script>
    import '@/assets/css/login.scss'

    const Modal = resolve => require(['@/components/Modal'], resolve)
    const Ripple = resolve => require(['@/components/Ripple'],resolve)

    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
              userName:'admin',
              userPwd:'123456',
              userPwdAgain: '',
              errorTip:false,
              errorTipText: '用户名或者密码错误',
              rightTip: false,
              rightTipText: '',
              loginModalFlag:false,
              mdShow: false,
              isLogin: false,
              signupModalFlag: false,
              signUpErrorTip: false,
              signUpErrorText: '用户已存在',
              signUpRightTip: false,
              signUpRightTipText: '',
              captcha: '',
              captchaImg: '验证码',
              br: true
            }
        },
        computed: {
         /* ...mapState(['nickName','cartCount'])*/
          ...mapState({
            nickName: state => state.header.nickName,
            cartCount: state => state.header.cartCount
          })
         /* nickName() {
            return this.$store.state.nickName
          },
          cartCount() {
            return this.$store.state.cartCount
          }*/
        },
        components: {
          Modal,
          Ripple
        },
        mounted() {
          this.checkLogin()
        },
        methods: {
          checkLogin() {
            axios.get("/users/checkLogin")
                 .then(res => res.data)
                 .then(data => {
                   if(data.status === '200') {
                    this.$store.commit("updateUserInfo", data.result)
                    this.getCartCount()
                    this.isLogin = true
                   }
                   else {
                     this.isLogin = false
                     if(this.$route.path != '/') {
                       this.$router.push("/")
                     }
                   }
                 })
          },
          clearTip() {
              this.errorTip = false
              this.errorTipText =  '用户名或者密码错误'
              this.rightTip =  false
              this.rightTipText =  ''
              this.signUpErrorTip =  false
              this.signUpErrorText =  '用户已存在'
              this.signUpRightTip =  false
              this.signUpRightTipText = ''
          },
          
          isCaptchaTrue() {
            if(this.captcha === '') {
              return
            }
            axios.get('/users/isCaptchaTrue',{
              params:{
                captcha: this.captcha
              }
            }).then(res => res.data)
              .then(data => {  
                if(data.status === '200'  ) {
                   this.signUpRightTip = true
                   this.signUpRightTipText = data.msg
                   this.rightTipText = data.msg
                   this.rightTip = true
                } 
                else if(data.status === '500') {
                   this.signUpErrorTip = true
                   this.signUpErrorText = data.msg
                   this.errorTipText = data.msg
                   this.errorTip = true
                }
              })
          },
          getCaptcha() {
            axios.get('/users/captcha')
                 .then(res => res.data)
                 .then(data => {
                   if(data.status === '200') {
                     const captchaImg = data.result.data,
                           captchaText = data.result.text

                    this.captchaImg = captchaImg
                    console.log(captchaText)
                   }

                 })
          },
          findisRepeated() {
            if(this.userName === '') {
              return
            }
            axios.get('/users/isRepeated', {
              params:{
                userName: this.userName
              }
            }).then(res => res.data)
              .then(data => {
                if(data.status === '200'  ) {
                   this.signUpRightTip = true
                   this.signUpRightTipText = data.msg
                   this.errorTipText = '用户不存在，要先注册'
                   this.errorTip = true
                } 
                else if(data.status === '500') {
                   this.signUpErrorTip = true
                   this.signUpErrorTipText = data.msg
                }
              })
          },
          checkPwd() {
            if(this.userPwd === '') {
              return
            }
            axios.get('/users/checkPwd', {
              params:{
                userName: this.userName,
                userPwd: this.userPwd
              }
            }).then(res => res.data)
              .then(data => {
               if(data.status === '500') {
                   this.errorTipText = data.msg
                   this.errorTip = true
                }
              })
          },
          showLoginModal() {
            this.getCaptcha()
            this.clearTip()
            this.userName = 'admin'
            this.userPwd = '123456'
            this.captcha = ''
            this.loginModalFlag = true
          },
          Login() {
            if(!this.userName || !this.userPwd) {
              this.errorTip = true
               this.errorTipText = '用户名或密码不能为空'
              return
            } 

            axios.post("/users/login", {
              userName: this.userName,
              userPwd: this.userPwd,
              captcha: this.captcha
            }).then((response) => {
                let res = response.data
                if(res.status === "500") {
                  this.errorTipText = res.msg
                  this.errorTip = true
                }
                else if(res.status === "200") {
                  this.errorTip = false
                  this.loginModalFlag = false
                  this.signupModalFlag = false
                  this.isLogin = true
                 this.$store.commit("updateUserInfo", res.result.userName)
                 this.getCartCount()
                } 
                else {
                  setTimeout(() => {
                    this.errorTip = true
                    this.errorTipText = res.msg
                  }, 800)
                }

            })
          },
          Logout() {
             axios.post("/users/logout")
                  .then( res => res.data )
                  .then( data => {
                     if(data.status === "200") {
                       this.isLogin = false
                         this.$store.commit("updateUserInfo", '')
                         this.$store.commit("initCartCount", 0)
                         if(this.$route.path != '/') {
                            this.$router.push("/")
                          }
                     }
                  })
          },
          getCartCount() {
            axios.get("/users/getCartCount")
                 .then(res => res.data)
                 .then(data => {
                    this.$store.commit("initCartCount", data.result)
                 })
          },
          closeModal() {
            this.mdShow = false
            this.signupModalFlag = false
          },
          enterCart() {
            if(!this.isLogin) {
              this.mdShow = true
            }
            else {
              this.$router.push({
                path: "/cart"
              })
            }
          },
          enterOrder() {
             if(!this.isLogin) {
              this.mdShow = true
            }
            else {
              this.$router.push({
                path: "/orderList"
              })
            }
          },
          showSignupModal() {
            this.getCaptcha()
            this.clearTip()
            this.userName = ''
            this.userPwd = ''
            this.userPwdAgain = ''
            this.captcha = ''
            this.signupModalFlag = true
          },
          isDiff() {
            if(this.userPwdAgain === '') {
              return
            }
            else if(this.userPwdAgain !== this.userPwd) {
              this.signUpErrorTip = true
              this.signUpErrorText = '两次密码不一致'
            }
            else {
              this.signUpRightTip = true
              this.signUpRightTipText = '两次密码一致'
            }
          },
          SignUp() {
            
            if(!this.userName || !this.userPwd) {
              this.signUpErrorTip = true
              this.signUpErrorText = '注册名和密码不能为空'
              return
            } else if(this.userPwdAgain !== this.userPwd) {
              this.signUpErrorTip = true
              this.signUpErrorText = '两次密码不一致'
              return
            }
            axios.post('/users/signup',  {
              userName: this.userName,
              userPwd: this.userPwd,
              captcha: this.captcha
            }).then(res => res.data)
              .then(data => {
                console.log(data)
                if(data.status === "500") {
                  this.signUpErrorText = data.msg
                  this.signUpErrorTip = true
                }
                else if(data.status === '200') {
                  this.userName = data.result.userName
                  this.userPwd = data.result.userPwd
                  this.Login()
                } else {
                    setTimeout(()=> {
                       this.signUpErrorText = data.msg
                       this.signUpErrorTip = true
                    },800)  
                }
              })
          }
        }
       
    }
</script>