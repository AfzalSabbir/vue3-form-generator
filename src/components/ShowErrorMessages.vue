<template>
  <div class="d-block invalid-feedback mb-2" v-if="!!error">
    {{ error }}
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  error : {
    type   : String,
    default: null,
  },
  target: {
    type   : String,
    default: 'message',
  },
});
</script>

<style scoped>

</style>