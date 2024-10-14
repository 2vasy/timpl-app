<template>
  <div class="feedback">
    <h3 class="title">What did you like?</h3>
    <div class="emojis">
      <div
        v-for="(emoji, index) in emojis"
        :key="index"
        @click="selectEmoji(index)"
        :class="{ selected: selectedEmoji === index }"
        class="emoji-wrapper"
      >
        <div class="emoji-container">
          <img :src="emoji.icon" :alt="emoji.name" class="emoji-icon" />
        </div>
        <span class="emoji-label" :class="{ active: selectedEmoji === index }">{{ emoji.name }}</span>
      </div>
    </div>

    <!-- Новый div для текстовой области и заголовка -->
    <div class="feedback-text">
      <h3 class="title">Share your feedback</h3>
      <textarea placeholder="Describe your own feedback" v-model="feedbackText"></textarea>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Иконки и их описание
const emojis = ref([
  {
    name: 'Service',
    icon: new URL('@/assets/service.png', import.meta.url).href,
  },
  {
    name: 'Cleanliness',
    icon: new URL('@/assets/cleanliness.png', import.meta.url).href,
  },
  {
    name: 'Atmosphere',
    icon: new URL('@/assets/atmosphere.png', import.meta.url).href,
  },
  {
    name: 'Food quality',
    icon: new URL('@/assets/food_quality.png', import.meta.url).href,
  }
]);

const selectedEmoji = ref(null); // Храним индекс выбранного эмодзи
const feedbackText = ref('');

// Функция выбора эмодзи
const selectEmoji = (index) => {
  selectedEmoji.value = index;
};
</script>

<style scoped>
.feedback {
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрируем содержимое */
  border-radius: 16px;
  padding: 20px 0 0;
  width: 100%; /* Ширина 100% родителя */
  max-width: 335px; /* Максимальная ширина контейнера */
  margin: 0 auto; /* Центрируем весь контейнер */
}

h3.title {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-bottom: 12px;
  text-align: center;
  width: 100%;
}

.emojis {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 335px;
  margin-bottom: 20px;
}

.emoji-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.emoji-container {
  background-color: #fff;
  border-radius: 12px;
  padding: 10px;
  transition: background-color 0.3s ease;
}

.emoji-wrapper.selected .emoji-container {
  background-color: #7f56d9; /* Подсветка только фона иконки */
}

.emoji-icon {
  width: 48px;
  height: 48px;
}

.emoji-label {
  font-family: 'Manrope', sans-serif;
  font-size: 12px; /* Размер текста 12px */
  font-weight: 500;
  color: #000; /* По умолчанию черный цвет */
  transition: color 0.3s ease;
}

.emoji-label.active {
  color: #7f56d9; /* Фиолетовый цвет при клике */
}

.feedback-text {
  width: 100%; /* Ширина 100% для адаптивности */
  max-width: 335px; /* Ограничиваем максимальную ширину */
  height: 140px; /* Высота контейнера */
  gap: 12px; /* Расстояние между элементами */
}

textarea {
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid transparent;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  resize: none;
}
</style>
