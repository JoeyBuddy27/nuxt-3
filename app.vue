<template class='d-flex'>
  <NuxtLayout>
   <NuxtPage  />
  </NuxtLayout>
    <!-- <NuxtWelcome /> -->
</template>


<script setup lang="ts">
useHead({
  // title: 'Nuxt 3',
  meta: [
    { name: 'description', content: 'Nuxt 3 Features & such' }
  ],
  bodyAttrs: {
    class: 'bg-gray-100'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt 3 Site` : 'Nuxt 3 Site';
  }
})
</script>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
/* layout transitions */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
