<template>
    <div>
      <h1 class="mx-4 my-10">Fetching data screen</h1>
      <div class="m-4"> Status: {{ status }}</div>
      <div class="grid grid-cols-5 gap-4 px-4">
        <div v-if="pending">
        Pending...</div>
        <Suspense :key="status">
          <template #fallback>
            <div class="bg-gray-200 p-4">Loading...</div>
          </template>
          <div v-for="image in images?.slice(0, 10)" :key="image?.id" class="bg-gray-200 p-4">
            <img :src="image?.thumbnailUrl" :alt="image?.title" />
            <p>{{ image?.title }}</p>
          </div>
        </Suspense>
      </div>

      <button @click="images ? refresh() : execute()" class="bg-blue-500 text-white px-4 py-2 rounded m-4 mx-4">
    {{ images ? 'Refresh' : 'Get Data' }}
</button>
</div>

  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue';
  
  useHead({
    title: 'Data Fetch'
  });
  
  // const images = ref([]);
  // let images = ref([

  // ]);



  const { data: images, pending, refresh, status, execute } = await useFetch('https://jsonplaceholder.typicode.com/photos', {
     lazy: true,
    immediate: false,
     server: false,
  });
    
 


  </script>
  
  