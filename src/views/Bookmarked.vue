<script setup>
import EntertainmentGrid from "../components/EntertainmentGrid.vue"
import { useEntertainmentStore } from "../stores/entertainment"

const store = useEntertainmentStore()

const movies = store.movies.filter((item) => item.isBookmarked)
const tvSeries = store.tvSeries.filter((item) => item.isBookmarked)
</script>

<template>
  <h1 className="text-white text-xl md:text-3xl font-light my-6">
    Bookmarked Movies
  </h1>
  <EntertainmentGrid :data="movies" />
  <h1 className="text-white text-xl md:text-3xl font-light my-6">
    Bookmarked TV Series
  </h1>
  <EntertainmentGrid :data="tvSeries" />
</template>

<style></style>
