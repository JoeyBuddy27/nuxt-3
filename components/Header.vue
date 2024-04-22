<template>
    <header class="bg-gray-800 text-white py-4 px-6">
        <div class="justfiy-between flex items-center w-100">
            <h1 class="text-2xl font-bold">My Website</h1>
            <nav class="flex-end ml-auto">
                <NuxtLink  to="/about" class="mr-4">About</NuxtLink>
                <NuxtLink class="mr-4" to="/">Home</NuxtLink>
                <NuxtLink to="/data">Data</NuxtLink>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

