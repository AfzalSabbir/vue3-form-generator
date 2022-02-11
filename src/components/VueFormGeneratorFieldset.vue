<template>
  <template v-for="(field, index) in fields">
    <div class="form-group">
      <component :is="getInputName(field)"
                 v-model:modelValue="model[field.model]"
                 :readonly="field.readonly"
                 :required="field.required"
                 :multiple="field.multiple"
                 :disabled="field.disabled"
                 :featured="field.featured"
                 :error="errors[field.model]"
                 :placeholder="field.placeholder"
                 :field="field"
                 :id="field.id || (uuid + '-' + index)"
                 :name="field.name || field.model"
                 :min="field.min"
                 :max="field.max"
                 :rows="field.rows"
                 :options="field.values"
                 :label="field.label"
                 :className="getClassName(field)"
                 :type="getInputType(field)"/>
    </div>
  </template>
</template>

<script setup>
import {v4 as uuidv4} from 'uuid';
import {ref}          from "vue";

const props = defineProps({
  fields: Object,

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

  errors: {
    type   : Object,
    default: () => ({}),
  },
});
const emit  = defineEmits(['addToParentShapes']);

const uuid = uuidv4();

const shape = ref([]);

const getInputName = (field) => {
  return `base-${field.type}`;
};
const getInputType = (field) => {
  return field.inputType ?? field.type ?? 'text';
};
const getClassName = (field) => {
  return getInputType(field) !== 'checkbox' ? 'form-control' : '';
};

</script>