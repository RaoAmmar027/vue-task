<template>
  <div>
    <label>Name:</label>
    <input v-model="internalValue" type="text" @input="updateName" placeholder="Enter your name" />
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['update:modelValue']);

const internalValue = ref(props.modelValue);

// Watch for changes in props.modelValue in case it's updated externally
watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue;
});

function updateName() {
  emit('update:modelValue', internalValue.value);
}
</script>
