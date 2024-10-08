<template>
    <div class="waiter-slider">
      <Swiper
        :slides-per-view="'auto'"
        :centeredSlides="true"
        :space-between="20"
        loop
        class="swiper-container"
        @slideChange="handleSlideChange"
      >
        <SwiperSlide v-for="(waiter, index) in waiters" :key="waiter.id">
          <div class="waiter-card" :class="{ 'active-slide': index === activeIndex }">
            <img :src="waiter.image" :alt="waiter.name" class="waiter-image" />
            <div v-if="index === activeIndex" class="waiter-info">
              <span class="waiter-name">{{ waiter.name }}</span>
              <span class="waiter-role">{{ waiter.role }}</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import { ref, defineEmits } from 'vue';
  
  const emit = defineEmits(['waiter-selected']);
  const activeIndex = ref(0);
  
  const waiters = ref([
    {
      id: 1,
      name: 'Madison',
      role: 'Waiter',
      image: new URL('@/assets/madison.png', import.meta.url).href,
    },
    {
      id: 2,
      name: 'Paul',
      role: 'Waiter',
      image: new URL('@/assets/paul.jpeg', import.meta.url).href,
    },
    {
      id: 3,
      name: 'John',
      role: 'Waiter',
      image: new URL('@/assets/john.jpeg', import.meta.url).href,
    },
  ]);
  
  const handleSlideChange = (swiper) => {
    activeIndex.value = swiper.realIndex;
    const selectedWaiter = waiters.value[swiper.realIndex];
    emit('waiter-selected', selectedWaiter.name);
  };
  </script>
  
  <style scoped>
  .waiter-slider {
    position: relative;
    width: 100%;
    max-width: 375px; /* Ограничиваем ширину контейнера */
    height: 150px; /* Высота для отображения */
    margin: 0 auto; /* Центрируем по горизонтали */
    display: flex;
    align-items: center; /* Центрируем по вертикали */
    justify-content: center; /* Центрируем по горизонтали */
    overflow: hidden; /* Скрываем лишние части */
  }
  
  .swiper-container {
    width: calc(100% + 40px); /* Позволяем боковым слайдам быть видимыми */
    height: 100%;
    overflow: visible; /* Чтобы боковые слайды могли быть видны */
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center; /* Центрируем содержимое по вертикали */
    transition: opacity 0.3s ease;
  }
  
  .waiter-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 8px;
    border-radius: 12px;
    background-color: transparent;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .waiter-image {
    width: 92px;
    height: 92px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .waiter-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .waiter-name {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #000;
  }
  
  .waiter-role {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #7f56d9; /* Фиолетовый цвет */
  }
  
  /* Стили для неактивных слайдов */
  .swiper-slide {
    opacity: 0.5; /* Полупрозрачный для неактивных слайдов */
  }
  
  .swiper-slide-active {
    opacity: 1; /* Полностью видимый активный слайд */
  }
  
  .active-slide {
    transform: scale(1.1); /* Легкое увеличение для выделения активного слайда */
    background-color: transparent;
  }
  </style>
  