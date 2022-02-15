<template>
  <input v-bind="$attrs"
         :class="[className, 'me-2']"
         :id="$attrs.id"
         :checked="modelValue"
         @change="$emit('update:modelValue', $event.target.checked)"
  >
  <label :for="$attrs.id" v-if="label">
    {{ label }}
  </label>

  <ShowErrorMessages :error="error"/>
</template>

<script>
export default {
  name : 'BaseCheckbox',
  props: {
    label     : {
      type   : String,
      default: null,
    },
    modelValue: {
      type   : Boolean,
      default: false,
    },
    className : {
      type   : String,
      default: '',
    },
    error     : {
      type   : String,
      default: '',
    },
  },
}
</script>

<style scoped>

</style>