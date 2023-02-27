<template>
  <div
    data-test="bookmark"
    class="absolute top-2 right-2 grid place-content-center bg-[#10141E] bg-opacity-50 hover:bg-white hover:bg-opacity-50 rounded-full w-8 h-8"
  >
    <img
      v-if="isBookmarked"
      src="../assets/icon-bookmark-full.svg"
      alt="bookmarked"
    />
    <img
      v-if="!isBookmarked"
      src="../assets/icon-bookmark-empty.svg"
      alt="not bookmarked"
    />
  </div>
</template>

<script>
export default {
  name: "Bookmark",
  props: {
    isBookmarked: {
      type: Boolean,
    },
  },
}
</script>

<style></style>
