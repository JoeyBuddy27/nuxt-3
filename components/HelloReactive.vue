<!-- components/Hello.vue -->
<template>
    <div class='bg-gray-700 text-white p-4'>
        This is a Client side component!
        <h1 class='text-white'>Hello {{title}}</h1>
        {{ currentDate }}
        <button @click="fetchCurrentDate" class='bg-slate-400 rounded p-4 block mt-4'>Fetch Current Date</button>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import {ref} from 'vue';

const currentDate = ref(moment().format('MMMM Do YYYY, h:mm:ss a'));

const fetchCurrentDate = () => {
    currentDate.value = moment().format('MMMM Do YYYY, h:mm:ss a');
}; 

const props = defineProps({
    title: {
        type: String,
        default: 'Title'
    }
});

</script>