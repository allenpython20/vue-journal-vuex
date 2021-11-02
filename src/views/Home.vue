<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToDaybook" class="btn btn-primary">Daybook</button>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  methods: {
    goToDaybook() {
      this.$router.push({name:'no-entry'})
    }
  },
}
</script>
