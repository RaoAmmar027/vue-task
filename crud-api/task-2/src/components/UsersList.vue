<script setup>
import {
    
    ref, 
    onMounted
} from 'vue'
import {
    DeleteUserById,
    editUsers,
    getAllUsers
} from '../../api';
import AddUser from './AddUser.vue';

const users = ref([])
const selectedUser = ref(null) 


const doGetAllUsers = async () => {

    users.value = await getAllUsers();
    console.log('response :>> ', users.value);

};

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
const editUser = (user) => {
    console.log('user :>> ', user);
    selectedUser.value = user; 
}



</script>
<template>
    <div>

        <AddUser :userData="selectedUser" @userUpdated="doGetAllUsers" /> <!-- Pass selectedUser to AddUser component -->
    </div>
<div class="flexed">
    <div v-if="users.length>0" v-for="user in users" :key="user.id" class="bordered">
        <p><strong>Name:</strong> {{ user.firstName }} {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Age:</strong> {{ user.age }}</p>
        <p><strong>Gender:</strong> {{ user.gender }}</p>
        <p><strong>Country:</strong> {{ user.country }}</p>
        <p><strong>City:</strong> {{ user.city }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Occupation:</strong> {{ user.occupation }}</p>
        <p><strong>Company:</strong> {{ user.company }}</p>
        <div>
            <button @click="deleteUser(user.id)">Delete User</button>
            <button @click="editUser(user)">Edit User</button> <!-- Pass full user object to editUser -->
        </div>
    </div>
    <div v-else>
        <p>Loading user data...</p>
    </div>
</div>
</template>

  
<style scoped>
.bordered{
    padding: 1rem;
    border: 2px solid black;
    width: 20rem;
    margin-left: 1rem;
    margin-top: 1rem;
}
.flexed{
    display: flex;
    flex-wrap: wrap;
    width: 118rem;
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
