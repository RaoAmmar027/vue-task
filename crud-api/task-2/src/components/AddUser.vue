<script setup>
import { reactive, watch, toRefs } from "vue";
import { addUsers, editUsers } from "../../api";

const props = defineProps({
  userData: Object,
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
const user = reactive(obj);
const resetForm = () => {
  Object.assign(user, obj);
};
watch(
  () => props.userData,
  (newVal) => {
    if (newVal) {
      Object.assign(user, newVal);
    } else {
      Object.assign(user, obj);
    }
  },
  { immediate: true }
);

const submitForm = async () => {
  const username = `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}`;
  user.username = username;

  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "age",
    "gender",
    "country",
    "city",
  ];

  const hasEmptyFields = requiredFields.some(
    (field) => !user[field] || user[field].trim() === ""
  );
  const allFieldsFilled = requiredFields.every(
    (field) => user[field] && user[field].trim() !== ""
  );

  if (!allFieldsFilled) {
    alert("Please fill in all required fields." );
    return;
  }

  try {
    let response;
    if (props.userData && props.userData.id) {
      response = await editUsers(props.userData.id, user);
      console.log("response while edit :>> ", response);
    } else {
      response = await addUsers(user);
    }

    if (response && response.status === "OK") {
      resetForm();
      emit("userUpdated");
    }

    console.log("Form submitted with user data:", response);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
</script>

<template>
  <div>
    <h1>{{ props.userData ? "Edit User" : "Add User" }}</h1>
    <!-- Display appropriate title -->
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
