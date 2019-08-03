<template>
    <div>
        <h1>test</h1>
        <h2>Top-top</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ducimus. Commodi aliquam nam, quaerat neque qui ex quod distinctio aperiam eum earum sit quam eaque ad excepturi modi! Saepe, reprehenderit!</p>
        <slot />
    </div>    
</template>

<script>
import Child from './Child.vue'

export default {
    name: 'select-component',
    // configurs: [
    //     { type: "apptext", "meta": {} }
    // ],
    components: {
        Child
    },
}
</script>
