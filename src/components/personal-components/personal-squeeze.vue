<template>
	<div class="personal_squeeze">
		<h2>Вставьте ссылку чтобы сократить</h2>
		<input 
			ref="squeezer"
			type="text" 
			v-model="squeezeValue"
		>
		<button
			class=" btn"
			@click="$emit('squeeze',squeezeValue)"
		>
			Сократить
		</button>
	</div>
</template>

<script>
export default {
	name: 'personalSqueezer',
	data(){
		return{
			squeezeValue: ''
		}
	}

}
</script>

<style lang="scss" scoped>
.personal_squeeze {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
	& input {
		width: 50%;
	}
	& button {
		margin-top: 30px;
	}
}
</style>