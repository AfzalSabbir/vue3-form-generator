<template>
  <div>
    <label v-if="label" :class="errorClassName">{{ label }}</label>

    <select :class="[className, errorClassName]"
            v-bind="attributes"
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
import {ref}   from "vue";
import _       from "lodash";

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

  setup(props, {attrs}) {
    let {errors} = props;

    const attributes = ref(attrs);

    // remove type from attributes
    if (attributes.value) {
      attributes.value = _.omit(attributes.value, 'type');
    }

    return {
      errorClassName: Helpers().getErrorClassName(errors),
      attributes,
    };
  },
}
</script>

<style scoped>

</style>