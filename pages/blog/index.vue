<template>
    <div>
        <ul>
            <li v-for="page of pages" :key="page">
                <a href="#" @click.prevent="openPage(page)">{{page}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        pages: []
    }),
    async mounted() {
        this.pages = await this.$axios.$get('/api/messages')
    },
    methods: {
        openPage(path) {
            this.$router.push('/blog/' + path)
        },
        loadPages(){

        }
    }
}
</script>
