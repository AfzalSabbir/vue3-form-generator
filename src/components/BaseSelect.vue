<script setup>
import {ref, useAttrs, watch} from "vue";
import {useField, useForm}    from "vee-validate";
import * as yup               from "yup";
import _                      from "lodash";

const props = defineProps({
  modelValue: {
    type    : [String, Number, Array],
    required: true,
    default : null,
  },
  label     : {
    type   : String,
    default: '',
  },
  options   : {
    type   : Array,
    default: [],
  },
  field     : {
    type    : Object,
    required: true,
    default : () => ({}),
  },
  className : {
    type   : String,
    default: '',
  },
});

let {errorList, error} = props;
const attrs            = useAttrs();
const attributes       = ref(attrs);
const errorClassName   = ref('');

// remove type from attributes
if (attributes.value) {
  attributes.value = _.omit(attributes.value, 'type');
}

let modelValue = props.modelValue;
// multiple and not object
if (props.field?.multiple && !(_.isArray(props.modelValue) || _.isObject(props.modelValue))) {
  modelValue = _.castArray(props.modelValue);
}

// Validation
let validator = yup[props.field?.multiple ? 'array' : 'string']();
if (props.field?.required) {
  validator = validator.min(1, 'This field is required');
}
if (props.field?.multiple && props.field?.min) {
  validator = validator.min(props.field.min, 'Select at least ${min} options')
}
if (props.field?.multiple && props.field?.max) {
  validator = validator.max(props.field.max, 'Select at most ${min} options')
}
let shape              = {
  inpV: validator,
};
const validationSchema = yup.object().shape(shape);
const initialValues    = {
  inpV: modelValue,
}
const {errors}         = useForm(
    {
      validationSchema,
      initialValues,
    },
);
const {value: inpV}    = useField('inpV');
watch(() => errors.value.inpV, (newValue) => {
  if (!!newValue) {
    errorClassName.value = 'is-invalid';
  } else {
    errorClassName.value = '';
  }
});

</script>

<template>
  <label v-if="label" :for="attrs.id" :class="errorClassName">{{ label }}</label>
  <select :class="[className, errorClassName]"
          :id="attrs.id"
          v-bind="attributes"
          v-model="inpV"
          @change="$emit('update:modelValue', inpV)">
    <option :value="option.value ? option.value : option"
            v-for="option in options">
      {{ option.label ? option.label : option }}
    </option>
  </select>

  <ShowErrorMessages :errors="errorList || []" :error="errors.inpV || ``"/>
</template>

<style scoped>

</style>