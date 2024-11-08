  <script setup>
  import { useForm, useField } from '@vee-validate/core';
  import { required, email, min } from '@vee-validate/rules';
  import { defineRule } from '@vee-validate/core';
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import NameInput from './NameInput.vue';
  import PasswordInput from './PasswordInput.vue';
  import EmailInput from './EmailInput.vue';
  
  // Define validation rules
  defineRule('required', required);
  defineRule('email', email);
  defineRule('min', min);
  
  const store = useStore();
  const { handleSubmit, errors } = useForm();
  
  const { value: name } = useField('name', 'required|min:3');
  const { value: password } = useField('password', 'required|min:6');
  const { value: email } = useField('email', 'required|email');
  
  function onSubmit() {
    const user = { name: name.value, password: password.value, email: email.value };
    store.dispatch('addUser', user);
    resetForm();
  }
  
  function resetForm() {
    name.value = '';
    password.value = '';
    email.value = '';
  }
  </script>
<template>
    <form @submit.prevent="handleSubmit">
      <div>
        <NameInput v-model="name" />
        <span class="error">{{ errors.name }}</span>
      </div>
  
      <div>
        <PasswordInput v-model="password" />
        <span class="error">{{ errors.password }}</span>
      </div>
  
      <div>
        <EmailInput v-model="email" />
        <span class="error">{{ errors.email }}</span>
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
  