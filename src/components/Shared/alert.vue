<template>
  <v-alert type="error" dismissible @input="onClose" :value="true">
    {{$store.state.error}}
  </v-alert>
</template>

<script>
  export default {
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>