<template>
    <div>
      <label>Password:</label>
      <input v-model="password" type="password" @input="updatePassword" placeholder="Enter your password" />
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref } from 'vue';
  
  const props = defineProps(['modelValue']);
  const emit = defineEmits();
  
  const password = ref(props.modelValue);
  
  function updatePassword() {
    emit('update:modelValue', password.value);
  }
  </script>
  