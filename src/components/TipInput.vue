<template>
  <div class="tip-input-container">
    <!-- Слайдер официантов -->
    <WaiterSlider @waiter-selected="selectedWaiter = $event" />
    
    <!-- Поле для ввода чаевых -->
    <div class="tip-input">
      <div class="input-container">
        <label for="tip-amount" class="tip-label">Enter amount of tips</label>
        <div class="input-wrapper">
          <input
            id="tip-amount"
            type="number"
            v-model="tipAmount"
            placeholder="0"
            min="0"
            class="tip-input-field"
          />
          <span class="currency">€</span>
        </div>
      </div>
      
      <!-- Быстрые кнопки выбора суммы чаевых -->
      <div class="quick-tip-buttons">
        <button
          v-for="amount in quickTipAmounts"
          :key="amount"
          @click="setTipAmount(amount)"
          class="quick-tip-button"
        >
          {{ amount }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import WaiterSlider from './WaiterSlider.vue';

const tipAmount = ref(0);
const selectedWaiter = ref('Madison');
const quickTipAmounts = [2, 5, 100];

const setTipAmount = (amount) => {
  tipAmount.value = amount;
};
</script>

<style scoped>
.tip-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  max-width: 478px;
  margin: 0 auto;
}

.tip-input {
  width: 100%;
  padding: 20px;
  margin-top: 20px;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 12px;
  width: 100%;
  max-width: 150px;
}

.tip-input-field {
  font-size: 34px;
  font-weight: 500;
  border: none;
  background: transparent;
  text-align: right;
  flex-grow: 1;
  min-width: 40px;
  outline: none;
}

.currency {
  font-size: 34px;
  font-weight: 500;
  color: #000;
  margin-left: 8px;
}

.tip-label {
  font-family: 'Manrope', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #000;
  margin-bottom: 8px;
  text-align: center;
  padding-top: 10px;
}

.quick-tip-buttons {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.quick-tip-button {
  flex: 1;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quick-tip-button:hover {
  background-color: #e0e0e0;
}
</style>
