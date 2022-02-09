<template>
  <input :class="[className, errorClassName]"
         :id="uuid"
         :checked="modelValue"
         @change="$emit('update:modelValue', $event.target.checked)"
         v-bind="$attrs">
  <label :for="uuid" :class="errorClassName" v-if="label">
    {{ label }}
  </label>

  <ShowErrorMessages :errors="errors" :error="error"/>
</template>

<script>
import Helpers from "../tools/Helpers";
import Uuid    from "../tools/UUID";

export default {
  name : "BaseCheckbox",
  props: {
    label     : {
      type   : String,
      default: null,
    },
    modelValue: {
      type   : Boolean,
      default: false,
    },
    className : {
      type   : String,
      default: '',
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