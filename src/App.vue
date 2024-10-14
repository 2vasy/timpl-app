<template>
  <div id="app" class="app-container">
    <Header />
    <TipInput v-model:tipAmount="tipAmount" />
    <Rating title="Rate your experience" />
    <Rating title="Rate Service" />
    <Feedback />
    <PaymentMethods 
      :amount="tipAmount" 
      :serviceFee="serviceFee"
      @showSwenPopup="showSwenPopup = true" 
    />
    <SwenPopup v-if="showSwenPopup" @close="showSwenPopup = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Header from './components/Header.vue';
import TipInput from './components/TipInput.vue';
import Rating from './components/Rating.vue';
import Feedback from './components/Feedback.vue';
import PaymentMethods from './components/PaymentMethods.vue';
import SwenPopup from './components/SwenPopup.vue';

const showSwenPopup = ref(false);

// Сумма чаевых
const tipAmount = ref(0);

// Рассчет комиссии (например, 1.2%)
const serviceFee = computed(() => {
  return parseFloat((tipAmount.value * 0.012).toFixed(2));
});
</script>

<style scoped>
.app-container {
  max-width: 375px;
  margin: 0 auto;
}
</style>
