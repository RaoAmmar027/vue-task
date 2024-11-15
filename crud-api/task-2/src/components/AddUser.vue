      <script setup>
      import { reactive, ref } from 'vue'
      import { addUsers } from '../../api';
        
      // Define a reactive object to hold user data
      const user = reactive({
      
        firstName: "",
        lastName: "",
        email: "",
        age:'',
        gender: "",
        country: "",
        city: "",
        phone: "",
       
      })
      
            
      const submitForm = async () => {
        const username = `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}`
      
        if (!user.firstName || !user.lastName || !user.email || !user.phone || !user.age || !user.gender || !user.country || !user.city) {
          alert("Please fill in all required fields: 'firstName', 'lastName', 'email', 'phone', 'age', 'gender', 'country', 'city'.");
          return; 
        }
      
        // Prepare the user data, including the new username field
        const userData = {
          ...user, // spread the existing user fields
          username // add the new username field
        }
      
        try {
         
          const response = await addUsers(userData);
          console.log('Form submitted with user data:', response);
          alert('User added successfully!');
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Failed to add user.');
        }
      }
      
      
      </script>
<template>
  <div>
    <h1>Add User</h1>
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
