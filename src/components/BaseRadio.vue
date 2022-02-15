<template>
  <input v-bind="{
            ...$attrs,
            onChange: ($event) => {
              //$emit('update:modelValue', value)
              $emit('listenHandelChange', name, $event.target.value)
            },
            /*onInput: ($event) => {
              if(!formOptions?.showErrorOnBlur)
               $emit('update:modelValue', $event.target.value)
            }*/
         }"
         :class="[className, 'me-2']"
         :value="value"
         :id="$attrs.id"
         :checked="modelValue === value">
  <label :for="$attrs.id" class="form-check-label">
    {{ label }}
  </label>
</template>

<script>
export default {
  name : 'BaseRadio',
  emits: ['listenHandelChange', 'update:modelValue'],
  props: {
    modelValue : {
      type   : [String, Number],
      default: false,
    },
    label      : {
      type   : String,
      default: null,
    },
    value      : {
      type    : [String, Number],
      required: true,
    },
    name       : {
      type    : String,
      required: true,
    },
    className  : {
      type   : String,
      default: '',
    },
    formOptions: Object,
  },
}
</script>

<style scoped>

</style>