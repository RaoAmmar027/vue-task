<template>
  <div class="wrapper">
    <label v-if="label" :for="name">{{ label }}</label>
    <input
      :id="name"
      :class="{ field_error: errorMessage, valid: meta.valid }"
      class="input"
      v-model="inputValue"
      :placeholder="placeholder"
      :type="type || 'text'"
      @input="updateValue"
    />
    <small :class="errorMessage ? 'error_message' : ''">{{ errorMessage }}</small>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  label: String
})

const emit = defineEmits(['update:modelValue'])

const { value: inputValue, errorMessage, meta } = useField(props.name)

// Emit the input value to the parent component
const updateValue = () => {
  emit('update:modelValue', inputValue.value)
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 3px;
}
.error_message {
  color: red;
}
.field_error {
  border: 1px solid red !important;
}
.input {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  padding: 10px;
  border: 0.5px solid gray;
}
.input:focus {
  outline: none;
}
.valid {
  border: 1px solid green !important;
}
label {
  font-size: 14px;
  font-weight: 600;
}
</style>