<script setup>
import { reactive, onBeforeMount, onBeforeUnmount } from "vue"
import { useEntertainmentStore } from "../stores/entertainment"
import Bookmark from "./Bookmark.vue"

const store = useEntertainmentStore()

const props = defineProps({
  data: Array,
})

// 1. Should the img src be selected based on the
// parent div width instead of the window width?
// 2. Would a ref on the div work?
// 3. What are the downsides of using a larger jpg
// and scaling it down?
const size = reactive({
  width: window.innerWidth,
  heigth: window.innerHeight,
})

function handleResize() {
  size.width = window.innerWidth
  size.heigth = window.innerHeight
  console.log(size)
}

onBeforeMount(() => {
  window.addEventListener("resize", handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize)
})

console.log(size)
</script>

<template>
  <div
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[2280px]"
  >
    <div v-for="(item, index) in props.data" :key="index">
      <div className="relative">
        <Bookmark :isBookmarked="item.isBookmarked" />
        <img
          v-if="size.width >= 1024"
          class="rounded-lg"
          :src="item.thumbnail.regular.large"
          alt="entertainment"
        />
        <img
          v-else-if="768 <= size.width < 1024"
          class="rounded-lg"
          :src="item.thumbnail.regular.medium"
          alt="entertainment"
        />
        <img
          v-else
          class="rounded-lg"
          :src="item.thumbnail.regular.small"
          alt="entertainment"
        />
      </div>
      <div className="flex gap-x-2 mt-2 mb-1">
        <span className="text-xs text-white text-opacity-50 font-light">
          {{ item.year }}
        </span>
        <span className="text-xs text-white text-opacity-50 font-light"
          >&#183;</span
        >
        <span className="text-xs text-white text-opacity-50 font-light">
          {{ item.category }}
        </span>
        <span className="text-xs text-white text-opacity-50 font-light"
          >&#183;</span
        >
        <span className="text-xs text-white text-opacity-50 font-light">
          {{ item.rating }}
        </span>
      </div>
      <h1 className="text-sm md:text-lg text-white font-medium">
        {{ item.title }}
      </h1>
    </div>
  </div>
</template>

<style></style>
