<template>
  <div>
    <label v-if="label" :class="errorClassName">{{ label }}</label>

    <select :class="[className, errorClassName]"
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)">
      <option :value="option.value ? option.value : option"
              v-for="option in options">
        {{ option.label ? option.label : option }}
      </option>
    </select>

    <ShowErrorMessages :errors="errors" :error="error"/>
  </div>
</template>

<script>
import Helpers from "@/tools/Helpers";

export default {
  name : 'BaseSelect',
  props: {
    modelValue: {
      type    : [String, Number, Array],
      required: true,
      default : null,
    },
    label     : {
      type   : String,
      default: '',
    },
    className : {
      type   : String,
      default: '',
    },
    options   : {
      type   : Array,
      default: [],
    },
    errors    : {
      type   : Array,
      default: [],
    },
    error     : {
      type   : String,
      default: null,
    },
    field     : {
      type    : Object,
      required: true,
      default : () => ({}),
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