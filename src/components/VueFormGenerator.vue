<template>
  <button class="btn btn-success my-3">Check Validation</button>
  <div class="row mb-3">
    <kbd class="col-12">
      <pre>{{ errors }}</pre>
    </kbd>
  </div>
  <div class="vue-form-generator" v-if="schema != null">
    <form @submit.prevent="">
      <div class="row mb-3">
        <kbd class="col-4">
          <pre style="">{{ model }}</pre>
        </kbd>
        <div class="col-4">
          <fieldset v-if="schema.fields" :is="tag">
            <vue-form-generator-fieldset :fields="schema.fields"
                                         :model="modelVal"
                                         :errors="errors"
                                         :options="options">
            </vue-form-generator-fieldset>
          </fieldset>
        </div>
        <kbd class="col-4">
          <pre style="">{{ schema.fields }}</pre>
        </kbd>
        <hr class="my-5"/>
      </div>
      <div v-if="schema.groups" v-for="group in schema.groups" class="row mb-3">
        <kbd class="col-4">
          <pre style="">{{ model }}</pre>
        </kbd>
        <div class="col-4">
          <fieldset v-if="group.fields" :is="tag">
            <legend>{{ group.legend }}</legend>
            <vue-form-generator-fieldset :fields="group.fields"
                                         :model="modelVal"
                                         :errors="errors"
                                         :options="options">
            </vue-form-generator-fieldset>
          </fieldset>
        </div>
        <kbd class="col-4">
          <pre style="">{{ group.fields }}</pre>
        </kbd>

        <hr class="my-5"/>
      </div>
    </form>
  </div>
</template>

<script setup>
import VueFormGeneratorFieldset from "@/components/VueFormGeneratorFieldset";
import {ref, watch}             from "vue";
import {useField, useForm}      from "vee-validate";
import * as yup                 from 'yup';

const props = defineProps({
  schema: Object,

  model: Object,

  options: {
    type: Object,
    default() {
      return {
        validateAfterLoad     : false,
        validateAfterChanged  : false,
        fieldIdPrefix         : "",
        validateAsync         : false,
        validationErrorClass  : "error",
        validationSuccessClass: "",
        validateOnValueUpdate : true,
      };
    },
  },

  multiple: {
    type   : Boolean,
    default: false,
  },

  isNewModel: {
    type   : Boolean,
    default: false,
  },

  tag: {
    type     : String,
    default  : "fieldset",
    validator: function (value) {
      return value.length > 0;
    },
  },
});
const emit  = defineEmits();

const allFields = [...props.schema.fields ?? []];

if (props.schema.groups) {
  props.schema.groups.forEach(group => {
    group.fields.forEach(field => {
      allFields.push(field);
    });
  });
}

const shapes  = ref({});
const getType = (multiple, type) => {
  return multiple ? 'array' : (type !== 'number' ? 'string' : type);
}

allFields.forEach(field => {
  let type     = field.inputType ?? field.type ?? 'text';
  let multiple = field.multiple ?? false;

  let validator = yup[getType(multiple, type)]();
  if (field?.required) {
    validator = validator.required('This field is required');
  }

  if (type === 'select') {
    if (field.required) {
      validator = validator.min(1, 'This field is required');
    }
    if (multiple && field.min) {
      validator = validator.min(field.min, 'Select at least ${min} options')
    }
    if (multiple && field.max) {
      validator = validator.max(field.max, 'Select at least ${min} options')
    }
  }

  if (field?.min) {
    validator = validator.min(field.min, 'This field must be at least ${min}');
  }
  if (field?.max) {
    validator = validator.max(field.max, 'This field must be at most ${max}');
  }
  if (field?.inputType === 'email') {
    validator = validator.email('This field must be a valid email');
  }

  shapes.value[field.model] = validator;
});

const validationSchema = yup.object().shape(shapes.value);
const {errors, values} = useForm(
  {
    validationSchema,
  },
);
const modelVal         = ref({});
Object.keys(props.model).forEach(key => {
  const {value}       = useField(key, null, {
    initialValue: props.model[key],
  });
  modelVal.value[key] = value;
});

watch(() => modelVal.value, (newVal) => {
  Object.keys(newVal).forEach(key => {
    props.model[key] = newVal[key];
  });
}, {deep: true});

</script>