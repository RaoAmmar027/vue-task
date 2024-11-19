<script setup>
import { useRouter } from "vue-router";

// Get the router instance using the `useRouter` composition API.
const router = useRouter();

// Methods for programmatic navigation
const goToAddMember = () => {
  router.push("add-member");
};

const goToEditMember = () => {
  router.push('edit-member');
};

const goToDeleteMember = () => {
  router.push('delete-member');
};

const goToViewAll = () => {
  router.push("members-list");
};
</script>

<template>
  <nav class="navbar">
    <button @click="goToAddMember" class="nav-button">Add Member</button>
    <button @click="goToViewAll" class="nav-button">View All</button>
    <button @click="goToEditMember" class="nav-button">Edit Member</button>
    <button @click="goToDeleteMember" class="nav-button">Delete Member</button>
  </nav>
</template>

<style scoped>
/* Styling the navigation bar */
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff; /* Main navbar background color */
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Styling each button */
.nav-button {
  background-color: #ffffff;
  color: #007bff;
  border: 2px solid #007bff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 25px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
}

/* Hover effect on buttons */
.nav-button:hover {
  background-color: #0056b3;
  color: white;
  border-color: #0056b3;
}

/* Active state when clicked */
.nav-button:active {
  transform: scale(0.98);
}

/* Responsive design for mobile */
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
  }
  
  .nav-button {
    margin: 10px 0;
    width: 100%;
    max-width: 200px;
  }
}
</style>
