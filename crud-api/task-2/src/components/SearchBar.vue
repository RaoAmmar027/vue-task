<script>
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.query); // Emit the search query (userId)
    },
  },
};
</script>

<template>
  <div class="search-container">
    <input 
      v-model="query" 
      @input="onSearch" 
      type="text" 
      placeholder="Enter User ID"
      class="search-input"
    />
    <button class="search-button" @click="onSearch">
      🔍
    </button>
  </div>
</template>

<style scoped>
/* Search container styling */
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 100%;
}

/* Search input styling */
.search-input {
  width: 300px;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px 0 0 5px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

/* Search button styling */
.search-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
}

.search-button:active {
  background-color: #003f7f;
}

/* Make the input and button responsive */
@media (max-width: 600px) {
  .search-input {
    width: 200px;
  }

  .search-button {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
