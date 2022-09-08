<template>
	<div class="links">
		<h3>Ваши ссылки</h3>
		<div class="links_title">
			<div class="links_title_vars"
				v-for="(title,index) in titles"
				:key="index"
				:class="{active: title.active}"
				@click="sortLinks(index)"
			>
				{{title.desc}}</div>
			</div>
		<div class="links_table"
			v-for="(link,index) in allLinks"
			:key="index+link.short"
		>
			<div class="links_table_url">
				{{link.target}}
			</div>
			<div class="links_table_shorturl"
				@click="copyLink(link.short)"
				title="Click to copy"
			>
				http://79.143.31.216/s/{{link.short}}
			</div>
			<div class="links_table_counter">
				{{link.counter}}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'personalLinks',
	props:['allLinks'],
	data(){
		return{
			titles:[
				{
					desc: 'Полная ссылка',
					type: 'target',
					active: false
				},
				{
					desc: 'Сокращенная ссылка',
					type: 'short',
					active: false
				},
				{
					desc: 'Переходы',
					type: 'counter',
					active: false
				}
			]
		}
	},
	methods:{
		sortLinks(a){
			this.titles[a].active = !this.titles[a].active
			var currSort = {
				type: this.titles[a].type,
				active: this.titles[a].active
			}
			this.$emit('sorted',currSort)
		},
		copyLink(text){
			navigator.clipboard.writeText(`http://79.143.31.216/s/${text}`)
		}
	}
}
</script>

<style lang="scss" scoped>
	.links {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-inline: 50px;
		gap: 30px;
		&_title,&_table {
			display: grid;
			grid-template-columns: minmax(200px, 1fr) 1fr 1fr;
			width: 100%;
			}
		&_title :nth-child(n){
			position: relative;
			cursor: pointer;
			&::after {
				content: '';
				position: absolute;
				margin-left: 15px;
				height: 20px;
				width: 10px;
				background: url(@/assets/vector.svg);
				transform: rotate(270deg);
			}
			&.active::after {
				transform: rotate(90deg);
			}
		}
		&_table_url,&_table_shorturl {
			overflow: hidden;
			margin-right: 20px;
		}
		&_table_shorturl {
			cursor: pointer;
		}
		
	}
</style>