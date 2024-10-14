<template>
  <div class="swen-popup">
    <div class="popup-content">
      <!-- Кнопка закрытия -->
      <button class="close-icon" @click="$emit('close')">
        <img src="@/assets/close.svg" alt="Close" />
      </button>

      <!-- Картинка из макета -->
      <img src="@/assets/Carbon Neutral Challenger.png" alt="SWEN" class="swen-image" />

      <!-- Текст контента -->
      <h3>Profit goes to SWEN</h3>
      <p>By leaving a tip, you take care of nature.</p>
      
      <!-- Кнопка Learn more -->
      <button @click="$emit('close')" class="close-btn">Learn more about SWEN</button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close']);
</script>

<style scoped>
.swen-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 24px;
  border-radius: 20px;
  text-align: center;
  max-width: 335px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}

.swen-image {
  width: 100%;
  margin-bottom: 20px;
}

h3 {
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
}

p {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 20px;
}

.close-btn {
  background-color: #000;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
}

/* Кнопка закрытия */
.close-icon {
  position: absolute;
  top: 33px; 
  right: 33px; 
  background: #fff;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  gap: 10px;
}

.close-icon img {
  width: 12.01px; 
  height: 12.01px; 
}
</style>
