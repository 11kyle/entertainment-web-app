<script setup>
import Bookmark from "./Bookmark.vue"
import { useEntertainmentStore } from "../stores/entertainment"

const store = useEntertainmentStore()
</script>

<template>
  <div
    className="flex items-center gap-x-4 shrink-0 overflow-x-scroll hide-scrollbar"
  >
    <div v-for="(item, index) in store.trendingEntertainment">
      <div className="relative hide-scrollbar">
        <Bookmark :isBookmarked="item.isBookmarked" />
        <!-- <picture>
        <source media="(min-width: 1024px" srcSet={thumbnails["large"]} />
        <source media="(min-width: 768px" srcSet={thumbnails["large"]} /> <img
        className="rounded-lg min-w-[240px] md:min-w-[470px]"
        src={thumbnails["small"]} alt="movie" />
      </picture> -->
        <img
          className="rounded-lg min-w-[240px] md:min-w-[470px]"
          :src="item.thumbnail.trending.large"
          alt="movie"
        />
        <div class="absolute left-4 bottom-4 md:left-6 md:bottom-6">
          <div className="flex gap-x-2">
            <span
              className="text-xs md:text-sm text-white text-opacity-75 font-light"
              >{{ item.year }}</span
            >
            <span
              className="text-xs md:text-sm text-white text-opacity-75 font-light"
              >{{ item.category }}</span
            >
            <span
              className="text-xs md:text-sm text-white text-opacity-75 font-light"
              >{{ item.rating }}</span
            >
          </div>
          <h1 className="text-base md:text-2xl text-white font-medium">
            {{ item.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
