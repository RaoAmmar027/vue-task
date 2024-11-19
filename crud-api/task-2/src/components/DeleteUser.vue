<script setup>
import { ref } from 'vue';
import SearchBar from './SearchBar.vue';
import AddUser from './AddUser.vue';
import { getUserById } from '../../api';

const selectedUser = ref(null);


const handleSearch = async (userId) => {
  try {
    const user = await getUserById(userId);
    if (user) {
      selectedUser.value = user; 
    } else {
      alert("User not found.");
    }
  } catch (error) {
    console.error('Error fetching user by ID:', error);
  }
};

// Handle user deletion
const handleUserDeleted = () => {
  selectedUser.value = null; // Reset selected user after deletion
  alert("User has been deleted.");
};
</script>

<template>
  <div>
    <!-- SearchBar component -->
    <SearchBar @search="handleSearch" />

    <!-- AddUser form component (passing user data and listening for delete) -->
    <AddUser :userData="selectedUser" />
  </div>
</template>
