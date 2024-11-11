<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup'; // Import yup for schema-based validation
import { useStore } from 'vuex';
import NameFeild from './NameFeild.vue';
import PasswordFeild from './PasswordFeild.vue';
import EmailFeild from './EmailFeild.vue';
import ErrorMessage from './common/ErrorMessage.vue';

// Yup validation schema
const schema = yup.object({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  email: yup.string().required('Email is required').email('Email must be a valid email'),
});

// Initialize VeeValidate form with Yup schema
const { handleSubmit, errors } = useForm({
  validationSchema: schema, // Attach the Yup schema for validation
});

// Setup fields with VeeValidate
const { value: name } = useField('name');
const { value: password } = useField('password');
const { value: email } = useField('email');

const store = useStore();

// Submit form handler
function onSubmit(values) {
  
  store.dispatch('addUser', {
    name: values.name,
    password: values.password,
    email: values.email,
  });
}
</script>

<template>
  <form @submit.prevent="handleSubmit(onSubmit)">
    <div>
      <NameFeild v-model="name" />
      <ErrorMessage name="name" />
    </div>

    <div>
      <PasswordFeild v-model="password" />
      <ErrorMessage name="password" />
    </div>

    <div>
      <EmailFeild v-model="email" />
      <ErrorMessage name="email" />
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
.error {
  color: red;
  font-size: 0.9em;
}
</style>
