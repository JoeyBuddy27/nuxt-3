<template>
  <div class='p-4'>
    <h1>Welcome to the homepage</h1>
    <div class='bg-slate-50'>

  <input v-model="randomTitle" class=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5 mt-5 mx-5 w-[200px]" type="text" placeholder="Enter a new title" />
   <Hello :title="randomTitle" />
   <HelloReactive :title="randomTitle" />
  </div>
  </div>
</template>


<script>
import {ref} from 'vue';

const randomTitle = ref('Title');

export default {
  setup() {
    return {
      randomTitle
    }
  }
}

</script>
