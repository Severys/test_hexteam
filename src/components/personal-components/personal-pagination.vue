<template>
	<div class="personal_pagination">
		<button
			class="personal_pagination_btn btn"
			@click="$emit('addLinks')"
			v-if="moreLinks !== 0"
		>
			Показать ещё
		</button>
	</div>
</template>

<script>
export default {
	name:'personalPagination',
	props:['moreLinks']
}
</script>

<style>
.personal_pagination {
	margin-top: 50px;
	align-self: center;
}
</style>