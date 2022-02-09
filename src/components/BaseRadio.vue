<template>
  <input :class="[className, errorClassName]"
         :value="value"
         :id="uuid"
         :checked="modelValue === value"
         @change="$emit('update:modelValue', value)"
         v-bind="$attrs">
  <label :for="uuid" :class="errorClassName">
    {{ label }}
  </label>

  <ShowErrorMessages :errors="errors" :error="error"/>
</template>

<script>
import Helpers from "@/tools/Helpers";
import Uuid    from "@/tools/UUID";

export default {
  name : "BaseRadio",
  props: {
    label     : {
      type   : String,
      default: null,
    },
    modelValue: {
      type   : [String, Number],
      default: false,
    },
    value     : {
      type    : [String, Number],
      required: true,
    },
    className : {
      type   : [String, Array],
      default: '',
    },
    name      : {
      type    : String,
      required: true,
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
      type   : Object,
      required: true,
      default: () => ({}),
    },
  },

  setup(props) {
    const uuid   = Uuid().generate();
    let {errors} = props;

    return {
      uuid,
      errorClassName: Helpers().getErrorClassName(errors),
    };
  },
}
</script>

<style scoped>

</style>