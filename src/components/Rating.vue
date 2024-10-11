<template>
  <div class="rating-header">
    <span class="line"></span>
    <h3>{{ title }}</h3>
    <span class="line"></span>
  </div>
  <div class="rating">
    <div class="stars">
      <img
        v-for="star in 5"
        :key="star"
        :src="starIcon"
        @click="setRating(star)"
        :class="{ active: star <= rating }"
        class="star"
        alt="star"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

// Импортируем иконку звезды
import starIcon from '@/assets/star.svg';

const props = defineProps({
  title: {
    type: String,
    default: 'Rate your experience',
  },
});

const rating = ref(0);

const setRating = (star) => {
  rating.value = star;
};
</script>

<style scoped>
.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 16px;
  padding: 16px;
  width: 100%;
  max-width: 335px;
  margin: 20px auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.rating-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
  width: 100%;
  padding: 0 20px;
}

.rating-header .line {
  flex-grow: 1;
  height: 1px;
  background-color: #7f56d9;
}

.rating-header h3 {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.stars {
  display: flex;
  gap: 8px;
  cursor: pointer;
}

.star {
  width: 30.04px;
  height: 28.69px;
  transition: all 0.2s ease;
  filter: grayscale(100%);
  -webkit-tap-highlight-color: transparent;
  background: none; 
  box-shadow: none; 
  user-select: none;
  outline: none;
  pointer-events: auto;
}

.star:focus-visible {
  outline: none;
}

.star.active {
  filter: grayscale(0%); 
  fill: #7f56d9; 
  background-color: transparent;
}

.star:hover {
  transform: scale(1.1);
}
</style>
