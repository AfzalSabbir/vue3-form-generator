<template>
  <label class="d-block mt-2" :class="errorClassName" v-if="label">
    {{ label }}
  </label>
  <div v-for="option in options">
    <BaseRadio :label="option.label"
               @change="$emit('update:modelValue', option.value)"
               v-bind="$attrs"
               :className="[className, errorClassName]"
               :value="option.value"
               :modelValue="modelValue"
               name="gender"/>
  </div>

  <ShowErrorMessages :errors="errors" :error="error"/>
</template>

<script>
import Helpers from "@/tools/Helpers";
export default {
  name : "BaseCheckbox",
  props: {
    label     : {
      type   : String,
      default: null,
    },
    modelValue: {
      type   : [String, Number],
      default: false,
    },
    className : {
      type   : String,
      default: '',
    },
    options   : {
      type    : Array,
      required: true,
    },
    name      : {
      type    : String,
      required: true,
    },
    errors     : {
      type   : Array,
      default: [],
    },
    error     : {
      type   : String,
      default: null,
    },
    field     : {
      type   : Object,
      required: true,
      default: () => ({}),
    },
  },

  setup(props) {
    let {errors} = props;

    return {
      errorClassName: Helpers().getErrorClassName(errors),
    };
  },
}
</script>

<style scoped>

</style>