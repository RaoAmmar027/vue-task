<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  dataEntries: Array
});

const emits = defineEmits(['edit', 'delete']);

const handleEdit = (index) => {
    console.log("Edit button clicked for index:", index);
  emits('edit', index);
};

const handleDelete = (index) => {
  emits('delete', index);
};
</script>

<template>
  <div class="data-list">
    <h3>Entries</h3>
    <ul v-if="dataEntries.length">
      <li v-for="(entry, index) in dataEntries" :key="index">
        <p><strong>Name:</strong> {{ entry.name }}</p>
        <p><strong>Email:</strong> {{ entry.email }}</p>
        <p><strong>Job Type:</strong> {{ entry.job_type }}</p>
        <p><strong>Customer Name:</strong> {{ entry.customer_name }}</p>
        <button @click="handleEdit(index)" class="btn btn-edit">Edit</button>
        <button @click="handleDelete(index)" class="btn btn-delete">Delete</button>
      </li>
    </ul>
    <p v-else>No entries available.</p>
  </div>
</template>

<style scoped>
.data-list {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.btn-edit {
  background-color: rgb(64, 181, 64);
  color: white;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
}

.btn-delete {
  background-color: rgb(186, 17, 17);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
