<template>
  <label v-if="label" :for="$attrs.id">{{ label }}</label>
  <select v-bind="{
            ...$attrs,
            onChange: ($event) => {
              //$emit('update:modelValue', $event.target.value);
              $emit('listenHandelChange', $event.target.name, $event.target.value)
            },
          }"
          :class="[className]"
          :id="$attrs.id"
          :value="modelValue">
    <option readonly value="">-- Select {{ label }} --</option>
    <option :value="option.value || option"
            :selected="(option.value || option) === modelValue"
            v-for="option in options">
      {{ option.label || option }}
    </option>
  </select>

  <ShowErrorMessages :error="error"/>
</template>

<script>
export default {
  name : 'BaseSelect',
  props: {
    modelValue : {
      type    : [String, Number, Array],
      required: true,
      default : null,
    },
    label      : {
      type   : String,
      default: '',
    },
    options    : {
      type   : Array,
      default: [],
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