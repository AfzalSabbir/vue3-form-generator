<template>
  <label v-if="label" :for="$attrs.id">
    {{ label }}
  </label>
  <input v-bind="{
           ...$attrs,
           onChange: ($event) => {
             $emit('listenHandelChange', $event.target.name, $event.target.value)
           },
           onInput: ($event) => {
             if(!formOptions?.showErrorOnBlur)
              $emit('update:modelValue', $event.target.value)
           }
         }"
         :id="$attrs.id"
         :class="[className]"
         :value="modelValue"/>

  <ShowErrorMessages :error="error"/>
</template>

<script>
export default {
  name : 'BaseInput',
  emits: ['listenHandelChange', 'update:modelValue'],
  props: {
    modelValue : {
      type    : [String, Number],
      required: true,
    },
    label      : {
      type   : String,
      default: null,
    },
    formOptions: Object,
    className  : {
      type   : String,
      default: '',
    },
    error      : {
      type   : String,
      default: '',
    },
  },
}
</script>

<style scoped>

</style>