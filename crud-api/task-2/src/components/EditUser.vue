<script setup>
import { ref } from 'vue';
import SearchBar from './SearchBar.vue';
import AddUser from './AddUser.vue';
import { getUserById, editUsers, addUsers } from '../../api';

// Reactive state for the user data
const selectedUser = ref(null);

// Handle the search event from SearchBar
const handleSearch = async (userId) => {
  try {
    const user = await getUserById(userId);
    if (user) {
      selectedUser.value = user; // Populate the form with the fetched user data
      console.log('User found:', user);
    } else {
      alert("User not found.");
    }
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    alert("An error occurred while fetching the user.");
  }
};

// Handle user update
const handleUserUpdated = () => {
  console.log('User has been updated.');
  // You can add any success handling logic here if needed (e.g., refetch the list)
};
</script>

<template>
  <div>
    <!-- SearchBar component -->
    <SearchBar @search="handleSearch" />

    <!-- AddUser form component (passing user data) -->
    <AddUser :userData="selectedUser" @userUpdated="handleUserUpdated" />
  </div>
</template>
