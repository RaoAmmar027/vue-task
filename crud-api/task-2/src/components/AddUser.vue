<script setup>
import { reactive, watch, toRefs } from 'vue'
import { addUsers, editUsers } from '../../api';

const props = defineProps({
  userData: Object // Receives user data to be edited
})

const emit = defineEmits(['userUpdated'])

// Define a reactive object to hold user data
const user = reactive({
  firstName: "",
  lastName: "",
  email: "",
  age: '',
  gender: "",
  country: "",
  city: "",
  phone: "",
  username: ""
})
const resetForm = () => {
  Object.assign(user, {
    firstName: "",
    lastName: "",
    email: "",
    age: '',
    gender: "",
    country: "",
    city: "",
    phone: "",
    username: ""
  })
}
// Watch for changes in userData (props), and populate the form when editing
watch(() => props.userData, (newVal) => {
  if (newVal) {
    Object.assign(user, newVal) // Populate user data into the form
  } else {
    // Reset form fields for "Add User" functionality
    Object.assign(user, {
      firstName: "",
      lastName: "",
      email: "",
      age: '',
      gender: "",
      country: "",
      city: "",
      phone: "",
      username: ""
    })
  }
}, { immediate: true })

// Function to handle form submission
const submitForm = async () => {
  const username = `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}`
  user.username = username // Generate the username

  // Check if all required fields are filled
  if (!user.firstName || !user.lastName || !user.email || !user.phone || !user.age || !user.gender || !user.country || !user.city) {
    alert("Please fill in all required fields.");
    return;
  }

  // Prepare the user data
  const userData = {
    ...user,
    username
  }

  try {
    let response;
    if (props.userData && props.userData.id) {
      // If userData is present, this is an edit
      response = await editUsers(props.userData.id, userData);
    } else {
      // Otherwise, this is a new user
      response = await addUsers(userData);
    }

    if (response && response.status === 200) {
      // Reset the form after a successful submission
      resetForm();
      emit('userUpdated'); // Notify the parent to refresh the users list
    }

    console.log('Form submitted with user data:', response);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}
</script>

<template>
  <div>
    <h1>{{ props.userData ? 'Edit User' : 'Add User' }}</h1> <!-- Display appropriate title -->
    <form @submit.prevent="submitForm">
      <!-- Name -->
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" v-model="user.firstName" id="firstName" />
      </div>

      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" v-model="user.lastName" id="lastName" />
      </div>

      <!-- Email -->
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="user.email" id="email" />
      </div>

      <!-- Age -->
      <div>
        <label for="age">Age:</label>
        <input type="number" v-model="user.age" id="age" />
      </div>

      <!-- Gender -->
      <div>
        <label for="gender">Gender:</label>
        <select v-model="user.gender" id="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <!-- Country and City -->
      <div>
        <label for="country">Country:</label>
        <input type="text" v-model="user.country" id="country" />
      </div>

      <div>
        <label for="city">City:</label>
        <input type="text" v-model="user.city" id="city" />
      </div>

      <!-- Phone -->
      <div>
        <label for="phone">Phone:</label>
        <input type="tel" v-model="user.phone" id="phone" />
      </div>

      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<style scoped>
form div {
  margin-bottom: 1rem;
}
input[type="text"],
input[type="email"],
input[type="number"],
input[type="tel"],
select {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
}
button {
  margin-top: 1rem;
}
</style>
