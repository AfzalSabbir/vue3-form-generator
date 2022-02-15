<template>
  <label v-if="label" :for="$attrs.id">
    {{ label }}
  </label>
  <textarea v-bind="{
              ...$attrs,
              onInput: (e) => $emit('update:modelValue', e.target.value),
            }"
            :id="$attrs.id"
            :class="[className]"
            :value="modelValue"></textarea>

  <ShowErrorMessages :error="error"/>
</template>

<script>
export default {
  name : 'BaseTextarea',
  props: {
    modelValue: {
      type    : String,
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

  },
}
</script>

<style scoped>

</style>