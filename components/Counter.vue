<template>
    <div>
        <h1>Counter: {{ counter }}</h1>
        <button class='bg-green-400 p-5 mr-4' @click="increment">+</button>
        <button class='bg-red-400 p-5 mr-4' @click="decrement">-</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Counter',
    setup() {
        const counter = ref(0);

        const increment = () => {
            counter.value++;
        };

        const decrement = () => {
            counter.value--;
        };

        return {
            counter,
            increment,
            decrement
        };
    }
};
</script>

<style>
/* Add your custom styles here */
</style>