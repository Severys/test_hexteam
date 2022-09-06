<template>
  <div class="registration">
    <div class="reg_login">
      <input 
        type="text"
        ref="login" 
        placeholder="Ваш логин"
        @input="value=>$emit('takeUser',value.target.value)"
      >
      <label 
        for="login"
      >
        Введите ваш Логин
      </label>
    </div>
    <div class="reg_password">
      <input 
        type="text" 
        ref="password"
        placeholder="Ваш пароль"
        @input="value=>$emit('takePass',value.target.value)"
      >
      <label 
        for="email"
      >
        Введине ваш пароль
      </label>
    </div>
    <button 
      class="reg_btn btn"
      @click="$emit('goTo',$route.name)"
    >
      Зарегистрироваться
    </button>
  </div>
</template>

<script>

export default {
  name: 'VForm',
  watch:{
    '$route.name'(val){
      if (val) {
        this.$refs.password.value = ''
        this.$refs.login.value = ''
      }
    } 
  }
}
</script>
