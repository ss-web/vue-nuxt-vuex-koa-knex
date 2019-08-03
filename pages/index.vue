<template>
  <div>
    <app-logo/>
    <select-component>
      <select-component-child />
    </select-component>  
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import SelectComponent from '~/components/select/Index.vue'
import SelectComponentChild from '~/components/select/Child.vue'

export default {
  components: {
    AppLogo,
    SelectComponent,
    SelectComponentChild
  },
  mounted(){
    this.test()
  },
  methods: {
    test(){
      console.log('start app')
    }
  }
}
</script>