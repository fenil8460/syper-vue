<script setup>
import InfiniteScroll from '../components/InfiniteScroll.vue';
</script>

<template>
  <div class="home">
    <Suspense>
      <InfiniteScroll />
      <template #fallback>
        ...Loading
      </template>
    </Suspense>
  </div>
</template>

<style>
</style>
