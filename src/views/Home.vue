<template>
  <div class="home">
    <div class="container">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      model: {
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
            type    : 'select',
            label   : 'Skills',
            model   : 'skills',
            multiple: true,
            values  : ['Javascript', 'VueJS', 'CSS3', 'HTML5'],
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
              },
              {
                type     : "input",
                inputType: "text",
                label    : "Username",
                model    : "username",
              },
              {
                type     : "input",
                inputType: "email",
                id       : "email",
                label    : "Email Address",
                model    : "email",
              },
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
                required   : true,
                rows       : 5,
                model      : "bio",
              },
            ],
          },
        ],
      },

      formOptions: {
        validateAfterLoad   : true,
        validateAfterChanged: true,
        validateAsync       : true,
      },
    }
  },
}
</script>

<style>
</style>