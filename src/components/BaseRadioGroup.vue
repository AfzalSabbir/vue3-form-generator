<template>
  <label class="d-block mt-2 form-check-label" v-if="label">
    {{ label }}
  </label>
  <div v-for="(option, index) in options">
    <BaseRadio v-bind="{
                  ...$attrs,
               }"
               :key="option.value || option.label || option"
               :label="option.label || option"
               @listenHandelChange="(key, value) => {$emit('listenHandelChange', key, value);}"
               :formOptions="formOptions"

               :id="$attrs.id + '-' + (option.value || option.label || option) + '-' + index"
               :value="option.value || option.label || option"
               className="form-check-input"
               :modelValue="modelValue"/>
  </div>

  <!-- Error -->
  <ShowErrorMessages :error="error"/>
</template>

<script>
export default {
  name : 'BaseRadioGroup',
  emits: ['listenHandelChange', 'update:modelValue'],
  props: {
    modelValue : {
      type   : String,
      default: false,
    },
    label      : {
      type   : String,
      default: null,
    },
    options    : {
      type    : Array,
      required: true,
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