<template>
  <div class="home">
    <div class="container">
      <VueFormGenerator
        v-model="loginModel"
        :schema="loginSchema"
        :options="loginFormOptions"
      ></VueFormGenerator>

      <VueFormGenerator
        v-model="model"
        :schema="schema"
        :options="formOptions"
      ></VueFormGenerator>

      <VueFormGenerator
        v-model="model1"
        :schema="schema1"
        :options="formOptions1"
      ></VueFormGenerator>
    </div>
  </div>
</template>

<script>
import {ref}            from "vue";
import VueFormGenerator from "@/views/VueFormGenerator";

export default {
  name      : 'Home',
  components: {VueFormGenerator},
  data() {
    return {
      model : {
        id       : 1,
        name     : '',
        password : 'J0hnD03!x4',
        has_email: '',
        email    : 'john.doe@gmail.com',
        can_swim : '',
        can_walk : false,
      },
      model1: {
        id           : 1,
        name         : 'John Doe',
        password     : 'J0hnD03!x4',
        maritalStatus: 'married',
        skills       : 'Javascript',
        email        : 'john.doe@gmail.com',
        status       : true,
        age          : 23,
        username     : 'john.doe',
        color        : 'Blue',
        timeout      : 34,
        bio          : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos, quisquam.',
      },

      model2: {
        id           : 1,
        name         : 'John Doe',
        password     : 'J0hnD03!x4',
        maritalStatus: 'married',
        skills       : ['Javascript', 'VueJS'],
        email        : 'john.doe@gmail.com',
        status       : true,
        age          : 23,
        username     : 'john.doe',
        color        : 'Red',
        timeout      : 34,
        bio          : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos, quisquam.',
      },

      modelEmpty: {
        id           : '',
        name         : '',
        password     : '',
        maritalStatus: '',
        skills       : '',
        email        : '',
        status       : '',
        age          : '',
        username     : '',
        color        : '',
        timeout      : '',
        bio          : '',
      },

      schema: {
        fields: [
          {
            type     : 'input',
            inputType: 'text',
            label    : 'ID (disabled text field)',
            model    : 'id',
            readonly : true,
            disabled : true,
          },
          {
            type       : 'input',
            inputType  : 'text',
            label      : 'Name',
            model      : 'name',
            placeholder: 'Your name',
            featured   : true,
            required   : true,
            min        : 3,
            max        : 12,
          },
          {
            type    : 'radio-group',
            label   : 'Has email',
            model   : 'has_email',
            name    : 'has_email',
            required: true,
            values  : [
              {
                label: 'Yes',
                value: 'yes',
              },
              {
                label: 'No',
              },
            ],
          },
          {
            type    : 'radio-group',
            label   : 'Can swim',
            model   : 'can_swim',
            name    : 'can_swim',
            required: true,
            values  : [
              {
                label: 'Yes',
                value: 'yes',
              },
              {
                label: 'No',
                value: 'no',
              },
            ],
          },
          {
            type    : 'checkbox',
            label   : 'Can walk',
            model   : 'can_walk',
            name    : 'can_walk',
            required: true,
          },
          {
            type     : 'input',
            inputType: 'password',
            label    : 'Password',
            model    : 'password',
            min      : 6,
            required : true,
            hint     : 'Minimum 6 characters',
            //validator: VueFormGenerator.validators.string,
          },
          {
            type       : 'input',
            inputType  : 'email',
            label      : 'E-mail',
            model      : 'email',
            placeholder: 'User\'s e-mail address',
          },
        ],
      },

      schema1: {
        fields: [
          {
            type     : 'input',
            inputType: 'text',
            label    : 'ID (disabled text field)',
            model    : 'id',
            readonly : true,
            disabled : true,
          },
          {
            type       : 'input',
            inputType  : 'text',
            label      : 'Name',
            model      : 'name',
            placeholder: 'Your name',
            featured   : true,
            required   : true,
            min        : 3,
            max        : 12,
          },
          {
            type     : 'input',
            inputType: 'password',
            label    : 'Password',
            model    : 'password',
            min      : 6,
            required : true,
            hint     : 'Minimum 6 characters',
            //validator: VueFormGenerator.validators.string,
          },
          {
            type  : 'radio-group',
            label : 'Marital Status',
            model : 'maritalStatus',
            name  : 'maritalStatus',
            values: ['married', 'single', 'divorced', 'widowed'],
          },
          {
            type       : 'input',
            inputType  : 'email',
            label      : 'E-mail',
            model      : 'email',
            placeholder: 'User\'s e-mail address',
          },
          {
            type   : 'checkbox',
            label  : 'Status',
            model  : 'status',
            default: true,
          },
        ],
        groups: [
          {
            legend: "User Details",
            fields: [
              {
                type     : "input",
                inputType: "number",
                id       : "current_age",
                label    : "Age",
                model    : "age",
                min      : 0,
                max      : 18,
              },
              {
                type     : "input",
                inputType: "text",
                label    : "Username",
                model    : "username",
              },
              {
                type    : 'select',
                label   : 'Skills',
                model   : 'skills',
                values  : ['Javascript', 'VueJS', 'CSS3', 'HTML5'],
                required: true,
              },
              /*{
                type     : "input",
                inputType: "email",
                id       : "email",
                label    : "Email Address",
                model    : "email",
              },*/
            ],
          },
          {
            legend: "Preferences",
            fields: [
              {
                type  : "select",
                label : "Color",
                model : "color",
                values: [
                  "Red",
                  "Green",
                  "Blue",
                ],
              },
              {
                type     : "input",
                inputType: "number",
                id       : "timeout",
                min      : 21,
                label    : "Timeout in Seconds",
                model    : "timeout",
              },
              {
                type       : "textarea",
                label      : "Bio",
                placeholder: "Write bio",
                max        : 200,
                required   : true,
                rows       : 5,
                model      : "bio",
              },
            ],
          },
        ],
      },

      schema2: {
        fields: [
          {
            type     : 'input',
            inputType: 'text',
            label    : 'ID (disabled text field)',
            model    : 'id',
            readonly : true,
            disabled : true,
          },
          {
            type       : 'input',
            inputType  : 'text',
            label      : 'Name',
            model      : 'name',
            placeholder: 'Your name',
            featured   : true,
            required   : true,
            min        : 3,
            max        : 12,
          },
          {
            type     : 'input',
            inputType: 'password',
            label    : 'Password',
            model    : 'password',
            min      : 6,
            required : true,
            hint     : 'Minimum 6 characters',
            //validator: VueFormGenerator.validators.string,
          },
          {
            type  : 'radio-group',
            label : 'Marital Status',
            model : 'maritalStatus',
            values: ['married', 'single', 'divorced', 'widowed'],
          },
          {
            type       : 'input',
            inputType  : 'email',
            label      : 'E-mail',
            model      : 'email',
            placeholder: 'User\'s e-mail address',
          },
          {
            type   : 'checkbox',
            label  : 'Status',
            model  : 'status',
            default: true,
          },
        ],
        groups: [
          {
            legend: "User Details",
            fields: [
              {
                type     : "input",
                inputType: "number",
                id       : "current_age",
                label    : "Age",
                model    : "age",
                min      : 0,
                max      : 18,
              },
              {
                type     : "input",
                inputType: "text",
                label    : "Username",
                model    : "username",
              },
              {
                type    : 'select',
                label   : 'Skills',
                model   : 'skills',
                multiple: true,
                values  : ['Javascript', 'VueJS', 'CSS3', 'HTML5'],
                required: true,
                min     : 3,
              },
              /*{
                type     : "input",
                inputType: "email",
                id       : "email",
                label    : "Email Address",
                model    : "email",
              },*/
            ],
          },
          {
            legend: "Preferences",
            fields: [
              {
                type  : "select",
                label : "Color",
                model : "color",
                values: [
                  "Red",
                  "Green",
                  "Blue",
                ],
              },
              {
                type     : "input",
                inputType: "number",
                id       : "timeout",
                min      : 21,
                label    : "Timeout in Seconds",
                model    : "timeout",
              },
              {
                type       : "textarea",
                label      : "Bio",
                placeholder: "Write bio",
                max        : 200,
                required   : true,
                rows       : 5,
                model      : "bio",
              },
            ],
          },
        ],
      },

      formOptions: {
        keepSubmitDisabled: false,
        showErrorOnBlur   : true,
        showErrorRealTime : false,
      },

      formOptions1: {
        keepSubmitDisabled: false,
        showErrorOnBlur   : false,
        showErrorRealTime : true,
      },
    }
  },

  setup() {
    const loginModel = ref({
      email   : '',
      password: '',
      skill   : '',
    });

    const loginSchema = {
      groups: [
        {
          label : "Login",
          fields: [
            {
              type       : 'input',
              inputType  : 'email',
              label      : 'Email',
              model      : 'email',
              name       : "user_email",
              placeholder: 'User\'s e-mail address',
              required   : true,
            },
            {
              type       : 'input',
              inputType  : 'password',
              label      : 'Password',
              model      : 'password',
              placeholder: 'Enter Password',
              name       : "user_password",
              min        : 6,
              required   : true,
            },
          ],
        },
        {
          label : "Other",
          fields: [
            {
              type    : 'select',
              label   : 'Skill',
              model   : 'skill',
              values  : ['Javascript', 'VueJS', 'CSS3', 'HTML5'],
              required: true,
            },
          ],
        },
      ],
    }

    const loginFormOptions = {
      keepSubmitDisabled: true,
      showErrorOnBlur   : true,
      showErrorRealTime : false,
    };

    return {
      loginModel,
      loginSchema,
      loginFormOptions,
    };
  },
}
</script>

<style>
</style>