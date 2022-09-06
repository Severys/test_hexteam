<template>
  <div class="personal">
	<h2>Вставьте ссылку чтобы сократить</h2>
	<input 
		type="text" 
		name="" 
		id=""
	>
	<button
		class="personal_btn btn"
	>
		Сократить
	</button>

	<h3>Ваши сокращенные ссылки</h3>
	<div class="personal_title">
		<div class="personal_title_id"> Номер</div>
		<div class="personal_title_url">Полная ссылка</div>
		<div class="personal_title_shorturl">сокращенная ссылка</div>
	</div>
	<div 
		class="personal_links"
		v-for="link in links"
		:key="link.id"
	>
		<div class="personal_links_id"> #1</div>
		<div class="personal_links_url">https://www.google.com/</div>
		<div class="personal_links_shorturl">http://79.143.31.216/s/321</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'personalVue',
	data(){
		return{
			links: [1,2,3]
		}
	}

}
</script>
<style lang="scss">
	.personal_title {
		display: flex;
		gap: 20px;
	}
	.personal_links {
		display: flex;
		gap: 20px;
	}
</style>
