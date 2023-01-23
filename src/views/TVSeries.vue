<script setup>
import EntertainmentGrid from "../components/EntertainmentGrid.vue"
import { useEntertainmentStore } from "../stores/entertainment"

const store = useEntertainmentStore()
</script>

<template>
  <h1 className="text-white text-xl md:text-3xl font-light my-6">TV Series</h1>
  <EntertainmentGrid :data="store.tvSeries" />
</template>

<style></style>
