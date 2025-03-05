<template>
  <div v-if="isVisible" class="swen-popup" :class="{ hide: isClosing }">
    <div class="popup-content" :class="{ hide: isClosing }">
      <button class="close-icon" @click="closePopup">
        <img src="@/assets/close.svg" alt="Close" />
      </button>
      <img src="@/assets/Carbon Neutral Challenger.png" alt="SWEN" class="swen-image" />
      <h3>Profit goes to SWEN</h3>
      <p>By leaving a tip, you take care of nature.</p>
      <button @click="closePopup" class="close-btn">Learn more about SWEN</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['close']);
const isVisible = ref(true);
const isClosing = ref(false);


const closePopup = () => {
  isClosing.value = true;
  setTimeout(() => {
    emit('close');
  }, 500);
};
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
  animation: popup-fade-in 0.5s ease forwards;
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
  animation: slide-up 0.5s ease forwards;
}

.swen-popup.hide {
  animation: popup-fade-out 0.5s ease forwards;
}

.popup-content.hide {
  animation: slide-down 0.5s ease forwards;
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-down {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}

@keyframes popup-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes popup-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}


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
}

.close-icon img {
  width: 12.01px;
  height: 12.01px;
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
</style>
