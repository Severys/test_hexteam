<template>
	<div class="registration">
		<authInput
			:takeUser="true"
			@takeInfo="(value) => userInfo.login = value"

		/>
		<authInput
			:takePass="true"
			@takeInfo="(value) => userInfo.password = value"
		/>
		<button 
			class="registration_btn btn"
			@click="$emit('goTo',userInfo)"
		>
			{{$route.name === 'regVue' ? 'Зарегистрироваться' : 'Войти'}}
		</button>
	</div>
</template>

<script>
import authInput from '@/components/form-input.vue'

export default {
	name: 'VForm',
	components:{
		authInput
	},
	data(){
		return{
			userInfo: {
					login: '',
					password: ''
				}
		}
	},
}
</script>

<style lang="scss">
	.registration {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
		margin-top: 20px;
		&_btn{
			margin-top: 20px;
		}
	}
</style>