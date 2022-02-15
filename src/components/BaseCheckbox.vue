<template>
  <input v-bind="{
              ...$attrs,
              onChange: ($event) => {
                //$emit('update:modelValue', $event.target.checked)
                $emit('listenHandelChange', $event.target.name, $event.target.checked)
              },
              /*onInput: ($event) => {
                if(!formOptions?.showErrorOnBlur)
                 $emit('update:modelValue', $event.target.value)
              }*/
            }"
         :class="[className, 'me-2']"
         :id="$attrs.id"
         :checked="modelValue">
  <label :for="$attrs.id" v-if="label">
    {{ label }}
  </label>

  <ShowErrorMessages :error="error"/>
</template>

<script>
export default {
  name : 'BaseCheckbox',
  emits: ['listenHandelChange', 'update:modelValue'],
  props: {
    label      : {
      type   : String,
      default: null,
    },
    modelValue : {
      type   : Boolean,
      default: false,
    },
    className  : {
      type   : String,
      default: '',
    },
    error      : {
      type   : String,
      default: '',
    },
    formOptions: Object,
  },
}
</script>

<style scoped>

</style>