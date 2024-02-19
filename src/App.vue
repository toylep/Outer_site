<template>
  <Hater/>
  <body>
    <div class="container">
      <inst/>
    </div>
  </body>
</template>

<script>
import Hater from './components/Hat_All.vue'
import inst from './views/InstituteView.vue'
export default {
  name: 'App',
  components: {
    Hater,
    inst
  }
}
</script>

<style>

</style>
