<template>
  <div class="vue-form-generator" v-if="schema != null">
    <div class="row mb-3">
      <kbd class="col-4">
        <pre style="">{{ model }}</pre>
      </kbd>
      <div class="col-4">
        <fieldset v-if="schema.fields" :is="tag">
          <vue-form-generator-fieldset :fields="schema.fields"
                                       :model="model"
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
          <vue-form-generator-fieldset :fields="group.fields"
                                       :model="model"
                                       :options="options">
          </vue-form-generator-fieldset>
        </fieldset>
      </div>
      <kbd class="col-4">
        <pre style="">{{ group.fields }}</pre>
      </kbd>

      <hr class="my-5"/>
    </div>
  </div>
</template>

<script>
import VueFormGeneratorFieldset from "@/components/VueFormGeneratorFieldset";

export default {
  name      : "VueFormGenerator",
  components: {VueFormGeneratorFieldset},
  props     : {
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
