<template>
	<div class="welcome"
	v-if="$route.name === null"
>
	<h1>Добро пожаловать в сервис сокращения ссылок!</h1>
	<div class="welcome_desc">
		Если тут первый раз, вам необходимо посетить
		<router-link 
			class="welcome_desc"
			to="/registration"
		>
			страницу регистрации
			</router-link>
	</div>
</div>
</template>

<script>
export default {
	name:'welcomeBlock'

}
</script>

<style lang="scss">
	.welcome{
		color: black;
		text-align: center;
		& a{
			&:visited{
				color: black;
			}
		}
	}
</style>