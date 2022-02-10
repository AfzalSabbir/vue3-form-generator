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
          <legend>{{ group.legend }}</legend>
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

<script setup>
import VueFormGeneratorFieldset from "@/components/VueFormGeneratorFieldset";

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
</script>
