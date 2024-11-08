<template>
    <div>
      <label>Name:</label>
      <input v-model="name" type="text" @input="updateName" placeholder="Enter your name" />
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref } from 'vue';
  
  const props = defineProps(['modelValue']);
  const emit = defineEmits();
  
  const name = ref(props.modelValue);
  
  function updateName() {
    emit('update:modelValue', name.value);
  }
  </script>
  