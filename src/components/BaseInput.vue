<template>
  <label v-if="label" :for="$attrs.id">
    {{ label }}
  </label>
  <input v-bind="$attrs"
         :id="$attrs.id"
         :class="[className]"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"/>

  <ShowErrorMessages :error="error"/>
</template>

<script>
export default {
  name : 'BaseInput',
  props: {
    modelValue: {
      type    : [String, Number],
      required: true,
    },
    label     : {
      type   : String,
      default: null,
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
  setup() {
    //const emit  = defineEmits(['update:modelValue']);
  },
}
</script>

<style scoped>

</style>