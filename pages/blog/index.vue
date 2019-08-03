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
    data(){
        return{
            pages: ['post1', 'post2', 'will-be-good']
        }
    },
    methods: {
        openPage(path) {
            this.$router.push('/blog/' + path)
        }
    }
}
</script>
