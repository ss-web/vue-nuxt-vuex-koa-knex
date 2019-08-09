<template>
  <li class="site-navigation__item">
    <template v-if="node.submenu">
      <!-- Здесь бы наверное ещё слева кнопку поставить чтобы можно было и раскрывать и переход по ссылке -->
      <span class="site-navigation__link" @click="toogleList">{{ node.name }}</span>
      <ul v-show="isOpenList" :class="{ active: isOpenList }">
        <link-tree v-for="link in node.submenu" :node="link" :key="link.id" :url="urlPath" />
      </ul>
    </template>
    <template v-else>
      <nuxt-link :to="urlPath" class="site-navigation__link" no-prefetch >
        {{ node.name }}
      </nuxt-link>
    </template>
  </li>
</template>

<script>
export default {
  name: 'LinkTree',
  props: {
    node: {
      type: Object,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    isOpenList: false,
  }),
  computed: {
    urlPath() {
      // Ссылки должны повторять ссылки с нашего текущего сайта gdematerial.ru. Параметр absolute_path использовать нельзя.
      // если я правильно понял то что-то вроде этого
      const parents = (this.$parent.node !== undefined) ? `${this.$parent.node.slug}/` : '';
      let result = `${parents}${this.node.slug}/`;
      result = (result.indexOf('/catalog')) ? `/catalog/${result}` : `${result}`;
      result = (parents !== '') ? `${this.url}${this.node.slug}/` : `${result}`;
      return result;
    },
  },
  methods: {
    toogleList() {
      this.isOpenList = !this.isOpenList;
    },
  },
};
</script>
