<template>
    <div>
        <h1>Course Details</h1>
        <p>Course ID: {{ courseId }}</p>
    </div>
</template>





<script setup lang="ts">
import { useRoute } from 'vue-router'
import {venueStore} from '~/store/store'
import { storeToRefs } from 'pinia';


const store = venueStore().venues
console.log('store', store)

// const { state } = storeToRefs(store);
// console.log('state', state)
    const route = useRoute()
    const courseId = route.params.id

definePageMeta
({
    // validate: async (route) => {
    //     // return store?.includes(route.params.id)
    //     return false
    // },
    layout: 'default',
  middleware: ['auth', 'valid-venue']
});





</script>
