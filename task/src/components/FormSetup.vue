<template>
    <div class="container">
      <Form ref="form" :validation-schema="schema" @submit="submit" :initial-values="formData">
        <CustomInput v-model="formData.name" placeholder="Full Name" label="Full Name" name="name" type="text" />
        <CustomInput v-model="formData.email" placeholder="Email" label="Email" name="email" type="email" />
        <CustomInput v-model="formData.job_type" placeholder="Job Type" label="Job Type" name="job_type" />
        <CustomInput v-model="formData.customer_name" placeholder="Customer Name" label="Customer Name" name="customer_name" />
  
        <div class="button-wrapper">
          <button class="btn btn-success" type="submit">Submit</button>
          <button @click="reset" class="btn btn-danger" type="button">Reset</button>
        </div>
      </Form>
      
      <DataList 
        :dataEntries="submittedValues" 
        @edit="handleEdit" 
        @delete="handleDelete" 
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Form } from 'vee-validate'
  import * as yup from 'yup'
  import CustomInput from '@/components/CustomInput.vue'
  import DataList from './DataList.vue'
  
  const form = ref(null)
  const formData = ref({
    name: '',
    email: '',
    job_type: '',
    customer_name: ''
  })
  const submittedValues = ref([])
  const isEditing = ref(false)
  const editIndex = ref(null)
  
  const schema = yup.object().shape({
    name: yup.string().required().min(6),
    email: yup.string().email().required(),
    job_type: yup.string().required('Job Type field is required'),
    customer_name: yup.string().required('Customer Name field is required')
  })
  
  const submit = (values) => {
    if (isEditing.value) {
      // Update the existing entry
      submittedValues.value[editIndex.value] = values
      isEditing.value = false // Reset editing state
    } else {
      // Add new entry
      submittedValues.value.push(values)
    }
    reset() // Reset the form after submission
  }
  
  const reset = () => {
    form.value.resetForm()
    formData.value = { name: '', email: '', job_type: '', customer_name: '' } // Reset form data
    isEditing.value = false
    editIndex.value = null
  }
  
  const handleEdit = (index) => {
    const entry = submittedValues.value[index]
    formData.value = { ...entry } // Fill the form with the selected entry
    isEditing.value = true // Set editing state
    editIndex.value = index // Save the index of the entry being edited
  }
  
  const handleDelete = (index) => {
    submittedValues.value.splice(index, 1) // Remove entry from the list
  }
  </script>

<style scoped>
.container {
  padding: 20px;
  width: 300px;
}

.btn {
  height: 35px;
  padding: 0px 20px;
  background-color: gray;
  color: white;
  border-radius: 5px;
}
.button-wrapper {
  display: flex;
  gap: 10px;
}
.btn-success {
  background-color: rgb(64, 181, 64);
}
.btn-danger {
  background-color: rgb(186, 17, 17);
}
</style>