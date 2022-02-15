<template>
  <form @submit.prevent="login" class="mb-5">
    <div class="row">
      <kbd class="col-12">
        <pre class="mb-0">{{ modelValue }}</pre>
      </kbd>
    </div>

    <fieldset v-if="schema?.fields?.length > 0">
      <VueFormGeneratorFieldset :formOptions="options"
                                :fields="schema.fields"
                                :model="modelValue"
                                :errors="errors"/>
    </fieldset>

    <template v-if="schema?.groups?.length > 0">
      <div v-for="group in schema.groups">
        <fieldset v-if="group?.fields?.length > 0">
          <legend v-if="group.label">{{ group.label }}</legend>
          <VueFormGeneratorFieldset :formOptions="options"
                                    :fields="group.fields"
                                    :model="modelValue"
                                    :errors="errors"/>
        </fieldset>
      </div>
    </template>

    <div class="d-flex gap-2">
      <button type="submit" class="btn btn-outline-success">Submit</button>
      <button type="reset" class="btn btn-light" @click="resetForm">Reset</button>
    </div>
  </form>
</template>

<script>
import * as yup                 from "yup";
import {useField, useForm}      from "vee-validate";
import {useAttrs, ref}          from "vue";
import VueFormGeneratorFieldset from "@/views/VueFormGeneratorFieldset";

export default {
  name      : 'VueFormGenerator',
  components: {
    VueFormGeneratorFieldset,
  },
  props     : {
    modelValue: Object,
    schema    : Object,
    options   : Object,
  },
  setup(props, {emit}) {
    const attrs = useAttrs();

    const modelValueKeys = Object.keys(props.modelValue);
    const initialValues  = props.modelValue;

    // Taking all fields are in single array to arrange validation rules
    const allFields = [...props.schema.fields ?? []];
    if (props.schema.groups
    ) {
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

      if (field?.required) {
        validator = validator.required('This field is required');
      }

      shapes.value[field.model] = validator;
    });
    const validationSchema                          = yup.object().shape(shapes.value);
    const {handleSubmit, resetForm, errors, values} = useForm({
      initialValues,
      validationSchema,
    });

    // Set fields for validation
    modelValueKeys.forEach(key => {
      useField(key);
    });

    // Handle submit
    const login = handleSubmit(async (data) => {
      console.log(data, 'data');
    });

    emit('update:modelValue', values);

    return {
      attrs,
      login,
      errors,
      resetForm,
      handleSubmit,
    };
  },
}
</script>

<style scoped>

</style>