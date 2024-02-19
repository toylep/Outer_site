<template>
  <Hater/>
  <body>
      <RouterView></RouterView>
  </body>
</template>

<script>
import Hater from './components/hatAll.vue'

export default {
  name: 'App',
  components: {
    Hater,

  }
}
</script>

<style>

</style>
