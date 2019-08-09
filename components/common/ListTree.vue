<template>
  <!-- <ul class="site-navigation">
    <li>6578</li>
    <link-tree v-for="link of menu" :node="link" :key="link.index" :url="link.slug" />
  </ul> -->
  <ul>
    <!-- <li v-for="link of menu" :key="link.index" >
      <pre>{{link}}</pre>
    </li> -->
    <link-tree v-for="link of menu" :node="link" :key="link.index" :url="link.slug" />
  </ul>
</template>

<script>
import LinkTree from '~/components/common/LinkTree.vue';

export default {
  components: {
    LinkTree,
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
};
</script>
