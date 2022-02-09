<template>
  <template v-for="field in fields">
    <component :is="getInputName(field.type)"
               v-model:modelValue="model[field.model]"
               :readonly="field.readonly"
               :disabled="field.disabled"
               :featured="field.featured"
               :placeholder="field.placeholder"
               :field="field"
               :id="field.id"
               :name="field.name"
               :min="field.min"
               :options="field.values"
               :label="field.label"
               :className="getClassName(field)"
               :type="getInputType(field)"/>
  </template>
</template>

<script>
export default {
  name : "VueFormGeneratorFieldset",
  props: {
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
  },

  data() {
    return {
      name       : '',
      status     : 'Deleted',
      statusList2: [
        'Active',
        'Inactive',
        'Blocked',
        'Deleted',
      ],
      statusList : [
        {
          label: 'Active',
          value: 'Active',
        },
        {
          label: 'Inactive',
          value: 'Inactive',
        },
        {
          label: 'Blocked',
          value: 'Blocked',
        },
        {
          label: 'Deleted',
          value: 'Deleted',
        },
      ],
      vfg        : this,
      errors     : [], // Validation errors
    };
  },

  methods: {
    // dynamic base component return
    getInputName(input) {
      return `base-${input}`;
    },
    getInputType(field) {
      return field.inputType ?? field.type ?? 'text';
    },
    getClassName(field) {
      return this.getInputType(field) !== 'checkbox' ? 'form-control' : '';
    },
  },
};
</script>