<template>
	<div id="app">
		<appHeader/>
		<welcomeBlock/>
		<router-view 
			@goTo="(value) => regOrAuth(value)"
		/>
	</div>
</template>
<script>
	import appHeader from '@/components/header'
	import welcomeBlock from '@/components/welcome'
	import axios from 'axios'

	export default {
		components:{appHeader,welcomeBlock},
		data(){
			return{
				userInfo: {
					login: '',
					password: ''
				}
			}
		},
		methods:{
			regOrAuth(info){
				if(this.$route.name === 'regVue'){
						axios({
						method: 'post',
						url: `http://79.143.31.216/register?username=${info.login}&password=${info.password}`,
						headers: {
							'accept': 'application/json',
						},
						data: ''
					})
					.then(response=>{
						if(response.status === 200){
							this.$router.push({ path: '/authentication'})
						}
					})
				}else {
					axios({
						method: 'post',
						url: `http://79.143.31.216/login`,
						headers: {
							'accept': 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						data: `grant_type=&username=${info.login}&password=${info.password}&scope=&client_id=&client_secret=`
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

<style lang="scss">
html, body {
	margin: 0px ;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: min(100%, 1620px);
	margin: auto;
	color: black;
	background-color: beige;
	min-height: 100vh;
}
.btn{
	padding: 10px;
	border-radius: 5px;
	border: none;
	box-shadow: 0 0 10px rgba(0,0,0,0.5);
	width: 150px;
	background-color: white;
	&:hover{
		background-color: black;
		color: white;
	}
}
input {
	padding: 10px;
	border-radius: 5px;
	border-color: white;
	box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
</style>