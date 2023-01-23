<script setup>
import Trending from "../components/Trending.vue"
import EntertainmentGrid from "../components/EntertainmentGrid.vue"
import { useEntertainmentStore } from "../stores/entertainment"

const store = useEntertainmentStore()
</script>

<template>
  <h1 className="text-white text-xl md:text-3xl font-light my-6">Trending</h1>
  <Trending />
  <h1 className="text-white text-xl md:text-3xl font-light my-6">
    Recommended for you
  </h1>
  <EntertainmentGrid :data="store.filteredEntertainment" />
</template>

<style></style>
