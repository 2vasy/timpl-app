<template>
    <div class="tip-input-container">
      <WaiterSlider @waiter-selected="selectedWaiter = $event" />
      <div class="tip-input">
        <input
          type="number"
          v-model="tipAmount"
          placeholder="Enter amount of tips"
          min="0"
          class="tip-input-field"
        />
        <div class="switch">
          <label>
            <input type="checkbox" v-model="isFullAmount" />
            I want {{ selectedWaiter }} to receive the full amount
          </label>
        </div>
        <p>To pay {{ tipAmount }}€</p>
        <p v-if="isFullAmount">Service fees 0€</p>
        <p v-else>Service fees {{ (tipAmount * 0.012).toFixed(2) }}€</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import WaiterSlider from './WaiterSlider.vue';
  
  const tipAmount = ref(0);
  const isFullAmount = ref(false);
  const selectedWaiter = ref('Madison');
  </script>
  
  <style scoped>
  .tip-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9; /* Цвет фона */
    border-radius: 10px;
    max-width: 478px; /* Устанавливаем ширину, чтобы соответствовать макету */
    margin: 0 auto; /* Центрируем на экране */
  }
  
  .tip-input {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 20px;
    margin-top: 20px; /* Отделяем поле чаевых от слайдера */
  }
  
  .tip-input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .switch {
    margin: 10px 0;
  }
  
  .switch label {
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    color: #555;
  }
  
  p {
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    color: #333;
    margin: 5px 0;
  }
  </style>
  