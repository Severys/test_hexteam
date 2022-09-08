<template>
	<div class="personal">
		<personalSqueezer
			@squeeze="value => squeeze(value)"
		/>
		<personalLinks
			:allLinks="links"
            @sorted="value => sortedLinks(value)"
		/>
		<personalPagination
			:moreLinks="nextLinks.lenght"
			@addLinks="changePage()"
		/>
	</div>
</template>

<script>
import axios from 'axios'
import personalSqueezer from '@/components/personal-components/personal-squeeze.vue'
import personalLinks from '../components/personal-components/personal-links.vue'
import personalPagination from '@/components/personal-components/personal-pagination.vue'

export default {
    name: "personalVue",
    components: { personalSqueezer, personalLinks, personalPagination },
    data() {
        return {
            links: [],
            nextLinks: [],
            curPage: 0
        };
    },
    methods: {
        downloadLinks(typeLinks) {
            axios({
                method: "get",
                url: `http://79.143.31.216/statistics?order=asc_short&offset=${this.curPage}&limit=${typeLinks ? "10" : "20"}`,
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                }
            }).then(response => {
                if (typeLinks) {
                    this.nextLinks = [];
                    this.nextLinks.push(...response.data);
                }
                else {
                    const data = JSON.parse(JSON.stringify(response.data));
                    this.links.push(...data.splice(0, 10));
                    this.nextLinks.push(...response.data.splice(10, 20));
                    this.curPage = 20;
                }
            });
        },
        squeeze(squeezeValue) {
            axios({
                method: "post",
                url: `http://79.143.31.216/squeeze?link=${squeezeValue}`,
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                },
                data: ""
            }).then(response => {
                var curUrl = {
                    short: response.data.short,
                    target: response.data.target,
                    id: response.data.id,
                    counter: response.data.counter
                };
                this.links.unshift(curUrl);
            });
        },
        changePage() {
            this.links.push(...this.nextLinks);
            this.downloadLinks(true);
            this.curPage += 10;
        },
        sortedLinks(sort){
            axios({
                method: "get",
                url: `http://79.143.31.216/statistics?order=${sort.active ? 'asc' : 'desc'}_${sort.type}&offset=${this.curPage}&limit=${this.links.length}`,
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                }
            }).then(response => {
                this.links = []
                this.links.push(...response.data);
            });
        },
    },
    created() {
        this.downloadLinks();
    }
}
</script>

<style lang="scss">
	.personal {
		display: flex;
		flex-direction: column;
	}
</style>
