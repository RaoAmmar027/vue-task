<script setup>
import { useField } from 'vee-validate';
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

// Retrieve the field's validation state from vee-validate
const { errorMessage } = useField(props.name);

// A computed value to only display the error message if it exists
const message = computed(() => errorMessage.value);
</script>

<template>
  <!-- Only display the error message if there is one -->
  <span v-if="message" class="error">{{ message }}</span>
</template>

<style scoped>
.error {
  color: red;
  font-size: 0.9em;
}
</style>
