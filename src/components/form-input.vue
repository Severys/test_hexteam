<template>
	<div class="form">
		<label 
			for="password"
		>
			Введине ваш {{takePass? 'пароль' : 'логин'}}
		</label>
		<input 
			:type="takePass? 'password' : 'text'"
			ref="formInput"
			:placeholder="takePass? '******' : 'Username'"
			@input="value=>$emit('takeInfo',value.target.value)"
		>
	</div>
</template>

<script>
export default {
	name: 'authInput',
	props: [
		'takeUser',
		'takePass'
	],
	watch:{
		'$route.name'(val){
			if (val) {
				this.$refs.formInput.value = ''
			}
		}
	}
}
</script>

<style lang="scss">
	.form {
		display: flex;
		flex-direction: column;
		gap: 5px;
		
	}
</style>
