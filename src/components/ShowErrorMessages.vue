<template>
  <div class="invalid-feedback mb-2" v-if="errors.length > 0">
    <ul class="list-unstyled m-0">
      <li v-for="error in errors">{{ target ? error[target] : error }}</li>
    </ul>
  </div>
  <div class="d-block invalid-feedback mb-2" v-if="!!error">
    <ul class="list-unstyled m-0">
      <li>{{ error }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name : "ShowErrorMessages",
  props: {
    errors: {
      type   : Array,
      default: [],
    },
    error : {
      type   : String,
      default: null,
    },
    target: {
      type   : String,
      default: 'message',
    },
  },
}
</script>

<style scoped>

</style>