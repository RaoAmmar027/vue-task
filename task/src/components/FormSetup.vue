<template>
    <div class="container">
      <Form ref="form" :validation-schema="schema" @submit="submit" :initial-values="formData">
        <custom-input placeholder="Full Name" label="Full Name" name="name" type="text" />
        <custom-input placeholder="email" label="Email" name="email" type="email" />
        <custom-input placeholder="Job Type" label="Job Type" name="job_type" />
        <custom-input placeholder="Customer Name" label="Customer Name" name="customer_name" />
  
        <div class="button-wrapper">
          <button class="btn btn-success" type="submit">submit</button>
          <button @click="reset" class="btn btn-danger" type="button">Reset</button>
        </div>
      </Form>
    </div>
  </template>
  <script setup>
  import { Form } from 'vee-validate'
  import { ref } from 'vue'
  import * as yup from 'yup'
  import CustomInput from '@/components/CustomInput.vue'
  
  const form = ref(null)
  const schema = yup.object().shape({
    name: yup.string().required().min(6),
    email: yup.string().email().required(),
    job_type: yup.string().required('Job Type field is required'),
    customer_name: yup.string().required('Customer Name field is required')
  })
  
  const formData = ref({
    name: '',
    email: '',
    job_type: '',
    customer_name: ''
  })
  
  const submit = (values) => {
    // implement your logic here
    console.log(values)
  }
  const reset = () => {
    form.value.resetForm()
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