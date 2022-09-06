<template>
  <div id="app">
    <h1>Добро пожаловать!</h1>
    <span>Сервис сокращения ссылок</span>
    <nav>
      <router-link to="/authentication">Авторизация</router-link> |
      <router-link to="/registration">Регистрация</router-link>
    </nav>
    <router-view 
      @takeUser="(value) => userInfo.login = value"
      @takePass="(value) => userInfo.password = value"
      @goTo="(value) => regOrAuth(value)"
    />
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data(){
      return{
        userInfo: {
          login: '',
          password: ''
        }

      }
    },
    methods:{
      regOrAuth(route){
        if(route === 'regVue'){
            axios({
            method: 'post',
            url: `http://79.143.31.216/register?username=${this.userInfo.login}&password=${this.userInfo.email}`,
            headers: {
              'accept': 'application/json',
            },
            data: ''
          })
          .then(response=>{
            console.log(response)
          })
        }else {
          axios({
            method: 'post',
            url: `http://79.143.31.216/login`,
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: `grant_type=&username=${this.userInfo.login}&password=${this.userInfo.password}&scope=&client_id=&client_secret=`
          })
          .then(response =>{
            if(response.status === 200) {
              localStorage.token = response.data.access_token
              this.$router.push({ path: '/personal'})
            }
          })
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

</style>