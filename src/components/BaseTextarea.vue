<script setup>
import {ref, watch, useAttrs} from "vue";
import {useField, useForm}    from "vee-validate";
import * as yup               from "yup";

const props = defineProps({
  modelValue: {
    type    : String,
    required: true,
  },
  label     : {
    type   : String,
    default: null,
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
const attrs = useAttrs();

let {errorsList, error} = props;
const value             = props.modelValue;

const type           = attrs.type;
const inputValue     = ref(value);
const errorClassName = ref('');

// Validation
let validator = yup.string();
if (props.field?.required) {
  console.log('req')
  validator = validator.required('This field is required');
}
if (props.field?.min) {
  validator = validator.min(props.field.min, 'This field must be at least ${min}');
}
if (props.field?.max) {
  validator = validator.max(props.field.max, 'This field must be at most ${max}');
}
let shape              = {
  inpV: validator,
};
const validationSchema = yup.object().shape(shape);
const initialValues    = {
  inpV: inputValue.value,
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
  <label v-if="label" :for="attrs.id" :class="errorClassName">
    {{ label }}
  </label>
  <textarea :id="attrs.id"
            :class="[className, errorClassName]"
            v-bind="attrs"
            v-model="inpV"
            @input="$emit('update:modelValue', inpV)"></textarea>

  <ShowErrorMessages :errors="errorsList || []" :error="errors.inpV || ``"/>
</template>


<style scoped>

</style>