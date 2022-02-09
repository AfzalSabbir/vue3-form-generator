<template>
  <label v-if="label" :for="uuid" :class="errorClassName">
    {{ label }}
  </label>
  <input :id="uuid" :class="[className, errorClassName]"
         v-bind="$attrs"
         @input="$emit('update:modelValue', $event.target.value)"
         :value="modelValue"/>

  <ShowErrorMessages :errors="errors" :error="error"/>
</template>

<script>
import Helpers from "../tools/Helpers";
import Uuid    from "../tools/UUID";

export default {
  name : "BaseInput",
  props: {
    modelValue: {
      type    : [String, Number],
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
    let {errors} = props;
    const uuid   = Uuid().generate();
    return {
      uuid,
      errorClassName: Helpers().getErrorClassName(errors),
    };
  },
}
</script>

<style scoped>

</style>