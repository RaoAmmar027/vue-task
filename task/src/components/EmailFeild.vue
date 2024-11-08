<template>
    <div>
      <label>Email:</label>
      <input v-model="email" type="email" @input="updateEmail" placeholder="Enter your email" />
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref } from 'vue';
  
  const props = defineProps(['modelValue']);
  const emit = defineEmits();
  
  const email = ref(props.modelValue);
  
  function updateEmail() {
    emit('update:modelValue', email.value);
  }
  </script>
  