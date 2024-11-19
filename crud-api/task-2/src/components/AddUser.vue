<script setup>
import { reactive, watch, computed } from "vue";
import { addUsers, DeleteUserById, editUsers } from "../../api";
import { useRoute } from "vue-router";
const route = useRoute();
const pageTitle = computed(() => {
  if (route.name === 'add-member') return 'Add Member';
  if (route.name === 'edit-member') return 'Edit Member';
  if (route.name === 'delete-member') return 'Delete Member';
  return 'Member'; // Fallback title
});
const props = defineProps({
  userData: Object, // Either null (for adding new) or a user object (for editing)
});

const emit = defineEmits(["userUpdated"]);
const obj = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  gender: "",
  country: "",
  city: "",
  phone: "",
  username: "",
};

// User state (reactive for form data)
const user = reactive(obj);

// Reset form function
const resetForm = () => {
  Object.assign(user, obj);
};

// Watch for changes in userData (edit mode)
watch(
  () => props.userData,
  (newVal) => {
    if (newVal) {
      // Populate form with user data if editing
      Object.assign(user, newVal);
    } else {
      resetForm(); // Clear the form if adding a new user
    }
  },
  { immediate: true }
);

// Form submit function (either add or edit)
const submitForm = async () => {
  const username = `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}`;
  user.username = username;

  const requiredFields = ["firstName", "lastName", "email", "phone", "age", "gender", "country", "city"];
  const hasEmptyFields = requiredFields.some((field) => {
    const value = user[field];
    return (typeof value === "string" && value.trim() === "") || value === null || value === undefined;
  });

  if (hasEmptyFields) {
    alert("Please fill in all required fields.");
    return;
  }

  try {
    let response;
    if (props.userData && props.userData.id) {
      if (route.name === 'delete-member') {
        // Delete mode
        response = await DeleteUserById(props.userData.id);
        emit("userDeleted"); // Emit delete event
      } else {
        // Edit mode
        response = await editUsers(props.userData.id, user);
        emit("userUpdated"); // Emit update event
      }
    } else {
      // Add mode
      response = await addUsers(user);
      emit("userUpdated");
    }

    if (response && response.status === "OK") {
      resetForm(); // Reset the form after successful submission
      emit("userUpdated"); // Notify the parent component of the update
    }

    console.log("Form submitted successfully:", response);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};


const isFieldDisabled = computed(() => {
  // Disable the field on specific routes (like 'edit-member' or 'delete-member')
  return route.name === 'delete-member' 
});
</script>

<template>
  <div class="form-container">
    <h1>{{ pageTitle }}</h1> 
    <form @submit.prevent="submitForm">
      <!-- Form fields -->
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input :disabled="isFieldDisabled" type="text" v-model="user.firstName" id="firstName" />
      </div>

      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input  :disabled="isFieldDisabled" type="text" v-model="user.lastName" id="lastName" />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input :disabled="isFieldDisabled" type="email" v-model="user.email" id="email" />
      </div>

      <div class="form-group">
        <label for="age">Age:</label>
        <input :disabled="isFieldDisabled" type="number" v-model="user.age" id="age" />
      </div>

      <div class="form-group">
        <label for="gender">Gender:</label>
        <select :disabled="isFieldDisabled"  v-model="user.gender" id="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for="country">Country:</label>
        <input :disabled="isFieldDisabled" type="text" v-model="user.country" id="country" />
      </div>

      <div class="form-group">
        <label for="city">City:</label>
        <input :disabled="isFieldDisabled" type="text" v-model="user.city" id="city" />
      </div>

      <div class="form-group">
        <label for="phone">Phone:</label>
        <input :disabled="isFieldDisabled" type="tel" v-model="user.phone" id="phone" />
      </div>

      <button class="submit-button" type="submit">{{ pageTitle }}</button>
    </form>
  </div>
</template>

<style scoped>
/* Container for the form */
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

/* Styling for the form group */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Focus styles for inputs */
.form-group input:focus,
.form-group select:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  outline: none;
}

/* Submit button styling */
.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Hover effect for the button */
.submit-button:hover {
  background-color: #0056b3;
}

/* Responsive layout adjustments */
@media (max-width: 600px) {
  .form-container {
    padding: 15px;
  }

  h1 {
    font-size: 20px;
  }

  .form-group input,
  .form-group select {
    font-size: 14px;
  }

  .submit-button {
    font-size: 16px;
  }
}
</style>
