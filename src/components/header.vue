<template>
	<header class="header">
		<div class="header_title">Сервис сокращения ссылок</div>
		<nav class="header_nav">
			<router-link 
				class="header_nav_link" 
				to="/authentication"
			>
				Авторизация
			</router-link>
			<router-link 
				class="header_nav_link" 
				to="/registration"
			>
			Регистрация
			</router-link>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'appHeader'

}
</script>

<style lang="scss">
	.header {
		display: flex;
		padding-inline: 15px;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		background-color: black;
		color: white;
		&_nav{
			display: flex;
			gap: 5px;
			position: relative;
			:first-child::after{
				content: '';
				position: absolute;
				top: 5px;
				right: 49%;
				height: 30px;
				width: 1px;
				background-color: white;
			}
			&_link{
				padding: 10px 5px;
				border-radius: 5px;
				text-decoration: none;
				color: white;
				&:visited{
					color: white;
				}
				&:hover {
					background-color: white;
					color: black;
				}
			}
		}
	}
</style>
