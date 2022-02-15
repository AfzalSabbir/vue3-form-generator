<template>
  <input v-bind="$attrs"
         :class="[className, 'me-2']"
         :value="value"
         :id="$attrs.id"
         :checked="modelValue === value"
         @change="$emit('update:modelValue', value)"
  >
  <label :for="$attrs.id" class="form-check-label">
    {{ label }}
  </label>
</template>

<script>
export default {
  name : 'BaseRadio',
  props: {
    modelValue: {
      type   : [String, Number],
      default: false,
    },
    label     : {
      type   : String,
      default: null,
    },
    value     : {
      type    : [String, Number],
      required: true,
    },
    name      : {
      type    : String,
      required: true,
    },
    className : {
      type   : String,
      default: '',
    },
  },
}
</script>

<style scoped>

</style>