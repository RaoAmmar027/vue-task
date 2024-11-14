<script setup>
import {
    reactive,
    ref, 
    onMounted
} from 'vue'
import {
    DeleteUserById,
    getAllUsers
} from '../../api';

// Define a reactive object to hold user data
const users = ref([])

// Function to fetch user data from the API
const doGetAllUsers = async () => {

    users.value = await getAllUsers();
    console.log('response :>> ', users.value);

};

// Fetch user data when the component is mounted
onMounted(() => {
    console.log('onMounted')
    doGetAllUsers()
})


const deleteUser = async (userId) =>{
console.log('userId :>> ', userId);
const response = await DeleteUserById(userId)
console.log('response :>> ', response);
if(response.status === 200){
    doGetAllUsers()
}
}



</script>
<template>
    
<div class="flexed">
    <div v-if="users.length>0" v-for="user in users" :key="user.id" >
        <img :src="user.profilePicture" :alt="user.firstName" width="150" />
        <p><strong>Name:</strong> {{ user.firstName }} {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Age:</strong> {{ user.age }}</p>
        <p><strong>Gender:</strong> {{ user.gender }}</p>
        <p><strong>Country:</strong> {{ user.country }}</p>
        <p><strong>City:</strong> {{ user.city }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Occupation:</strong> {{ user.occupation }}</p>
        <p><strong>Company:</strong> {{ user.company }}</p>
        <p><strong>Bio:</strong> {{ user.bio }}</p>
        <p><strong>Interests:</strong> {{ user.interests.join(', ') }}</p>
        <p><strong>Last Login:</strong> {{ user.lastLoginDate }}</p>
        <p><strong>Status:</strong> {{ user.isActive ? 'Active' : 'Inactive' }}</p>
        <p><strong>Roles:</strong> {{ user.roles.join(', ') }}</p>

        <div>
            <button @click="deleteUser(user.id)">Delete User</button>
        </div>
    </div>
    <div v-else>
        <p>Loading user data...</p>
    </div>
</div>
</template>

  
<style scoped>

.flexed{
    display: flex;
    flex-wrap: wrap;
    width: 100rem;
    padding: 0%;
    box-sizing: border-box;
    margin: 0%;
}

img {
    border-radius: 50%;
}

p {
    font-size: 1rem;
    margin: 0.5rem 0;
}
</style>
