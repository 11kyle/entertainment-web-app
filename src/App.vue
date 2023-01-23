<script setup>
import { RouterView } from "vue-router"
import Navbar from "./components/Navbar.vue"
import Search from "./components/Search.vue"
</script>

<!-- Scrollbar needs to be styled. -->
<template>
  <div class="lg:grid lg:grid-cols-[160px_calc(100%-160px)]">
    <Navbar />
    <main class="mx-4 mb-16 min-h-[100vh-64px]">
      <Search />
      <RouterView />
    </main>
  </div>
</template>

<style></style>
