<template>
  <template v-for="(field, index) in fields">
    <div class="form-group">
      <component :is="getInputName(field)"
                 v-model:modelValue="model[field.model]"
                 v-bind="getInputAttributes(field, index)"
      />
    </div>
  </template>
</template>

<script setup>
import {v4 as uuidV4} from 'uuid';

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

const uuid = uuidV4();

const getInputName = (field) => {
  return `base-${field.type}`;
};
const getInputType = (field) => {
  let type;
  if (field.type
      === 'select'
      || field.inputType
      === 'select'
      || field.type
      === 'textarea'
      || field.inputType
      === 'textarea') {
    type = null;
  } else if (field.type === 'radio-group' || field.inputType === 'radio-group') {
    type = 'radio';
  } else {
    type = field.inputType ?? field.type ?? 'text';
  }
  return type;
};

const getClassName = (field) => {
  return getInputType(field) !== 'checkbox' ? 'form-control' : '';
};

const getInputAttributes = (field, index) => {
  let attrs = {
    readonly   : field.readonly,
    required   : field.required,
    multiple   : field.multiple,
    disabled   : field.disabled,
    featured   : field.featured,
    error      : props.errors[field.model],
    placeholder: field.placeholder,
    /*field      : field,*/
    id         : field.id || (uuid + '-' + index),
    name       : field.name || field.model,
    min        : field.min,
    max        : field.max,
    rows       : field.rows,
    options    : field.values,
    label      : field.label,
    className  : getClassName(field),
  };

  let type = getInputType(field);

  return type ? {...attrs, type} : attrs;
}
</script>