<template>
  <label v-if="label" :for="$attrs.id">
    {{ label }}
  </label>
  <textarea v-bind="{
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
            :value="modelValue"></textarea>

  <ShowErrorMessages :error="error"/>
</template>

<script>
export default {
  name : 'BaseTextarea',
  emits: ['listenHandelChange', 'update:modelValue'],
  props: {
    modelValue : {
      type    : String,
      required: true,
    },
    label      : {
      type   : String,
      default: null,
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

  setup() {

  },
}
</script>

<style scoped>

</style>