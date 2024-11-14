  <script setup>
  import { reactive, ref } from 'vue'
  
  // Define a reactive object to hold user data
  const user = reactive({
    profilePicture: "",
    firstName: "",
    lastName: "",
    email: "",
    age:'',
    gender: "",
    country: "",
    city: "",
    phone: "",
    occupation: "",
    company: "",
    bio: "",
    interests: ["", "", ""],
    lastLoginDate: "",
    isActive:'',
    roles: [""]
  })
  
  // For handling new interests and roles
  const interestsInput = ref('')
  const rolesInput = ref('')
  
  // Function to add an interest
  const addInterest = () => {
    if (interestsInput.value.trim() !== '') {
      user.interests.push(interestsInput.value.trim())
      interestsInput.value = ''
    }
  }
  
  // Function to remove an interest
  const removeInterest = (index) => {
    user.interests.splice(index, 1)
  }
  
  // Function to add a role
  const addRole = () => {
    if (rolesInput.value.trim() !== '') {
      user.roles.push(rolesInput.value.trim())
      rolesInput.value = ''
    }
  }
  
  // Function to remove a role
  const removeRole = (index) => {
    user.roles.splice(index, 1)
  }
  
  // Function to handle form submission
  const submitForm = () => {
    console.log('Form data:', JSON.stringify(user))
    alert('Form submitted. Check the console for data.')
  }
  </script>
<template>
    <div>
      <h1>Edit User Profile</h1>
      <form @submit.prevent="submitForm">
        <!-- Profile Picture -->
        <div>
          <label for="profilePicture">Profile Picture:</label>
          <img :src="user.profilePicture" :alt="user.firstName" width="150" />
          
        </div>
  
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
  
        <!-- Occupation and Company -->
        <div>
          <label for="occupation">Occupation:</label>
          <input type="text" v-model="user.occupation" id="occupation" />
        </div>
  
        <div>
          <label for="company">Company:</label>
          <input type="text" v-model="user.company" id="company" />
        </div>
  
        <!-- Bio -->
        <div>
          <label for="bio">Bio:</label>
          <textarea v-model="user.bio" id="bio"></textarea>
        </div>
  
        <!-- Interests -->
        <div>
          <label for="interests">Interests:</label>
          <input type="text" v-model="interestsInput" id="interests" @keyup.enter="addInterest" placeholder="Add an interest and press Enter" />
          <ul>
            <li v-for="(interest, index) in user.interests" :key="index">
              {{ interest }} <button @click="removeInterest(index)">Remove</button>
            </li>
          </ul>
        </div>
  
        <!-- Last Login -->
        <div>
          <label for="lastLoginDate">Last Login Date:</label>
          <input type="date" v-model="user.lastLoginDate" id="lastLoginDate" />
        </div>
  
        <!-- Active Status -->
        <div>
          <label for="isActive">Status:</label>
          <input type="checkbox" v-model="user.isActive" id="isActive" />
          <label for="isActive">{{ user.isActive ? 'Active' : 'Inactive' }}</label>
        </div>
  
        <!-- Roles -->
        <div>
          <label for="roles">Roles:</label>
          <input type="text" v-model="rolesInput" id="roles" @keyup.enter="addRole" placeholder="Add a role and press Enter" />
          <ul>
            <li v-for="(role, index) in user.roles" :key="index">
              {{ role }} <button @click="removeRole(index)">Remove</button>
            </li>
          </ul>
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
    input[type="date"],
    select,
    textarea {
      display: block;
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.5rem;
    }
    ul {
      padding-left: 1rem;
    }
    button {
      margin-top: 1rem;
    }
  </style>
  