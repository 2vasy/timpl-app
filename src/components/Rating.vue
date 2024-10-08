<template>
  <div class="rating">
    <h3>Rate your experience</h3>
    <div class="stars">
      <span v-for="star in 5" :key="star" @click="setRating(star)" :class="{ active: star <= rating }">★</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const rating = ref(0);

const setRating = (star) => {
  rating.value = star;
};
</script>

<style scoped>
.stars {
  display: flex;
  gap: 5px;
  font-size: 24px;
  cursor: pointer;
}

.active {
  color: #ff9900;
}
</style>
