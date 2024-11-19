<script setup>
import { useRouter } from "vue-router";

// Get the router instance using the `useRouter` composition API.
const router = useRouter();

// Methods for programmatic navigation
const goToAddMember = () => {
  router.push("add-member"); // Navigates to the Home route using `push`
};

const replaceWithAbout = () => {
  router.replace("/about"); // Replaces the current route with 'About'
};

const goToEditMember = () => {
  router.push('edit-member'); // Goes back in the history stack
};
const goToViewAll = () => {
  router.push("members-list"); // Goes back in the history stack
};
</script>

<template>
  <!-- <button @click="replaceWithAbout">Replace with About</button> -->
  <button @click="goToAddMember">Add Member</button>
  <button @click="goToViewAll">View All</button>
  <button @click="goToEditMember">Edit Member</button>
</template>
