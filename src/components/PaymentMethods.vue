<template>
  <div class="payment-section">
    <div class="payment-summary">
      <p>To pay {{ amount }}€</p>
      <p>Service fees {{ serviceFee }}€</p>
    </div>
    <div class="payment-buttons">

      <button class="apple-pay-button" @click="handlePayClick('apple-pay')">
        <span>Pay with</span>
        <img src="@/assets/pay.svg" alt="Apple Pay" class="pay-icon" />
      </button>
      <button class="debit-card-button" @click="handlePayClick('card')">
        Pay with debit card
      </button>
    </div>
    <p class="terms">
      By clicking the button, you agree to our
      <a href="#" class="terms-link">Terms of Use</a> and <a href="#" class="terms-link">Privacy Policy</a>, and authorize payment and data processing.
    </p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';


const props = defineProps({
  amount: {
    type: Number,
    required: true,
  },
  serviceFee: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['showSwenPopup']);


const handlePayClick = (method) => {

  console.log(`Selected payment method: ${method}`);

о
  emit('showSwenPopup');
};
</script>

<style scoped>
.payment-section {
  width: 100%;
  max-width: 375px;
  margin: 20px auto;
  padding: 24px 20px 32px 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.payment-summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-family: 'Manrope', sans-serif;
}

.payment-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-family: 'Manrope', sans-serif;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.apple-pay-button {
  background-color: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
}

.apple-pay-button span {
  font-size: 16px;
  font-weight: 500;
}

.apple-pay-button .pay-icon {
  width: 47px;
  height: 19px;
}

.debit-card-button {
  background-color: #7f56d9;
  color: white;
}

.terms {
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 20px;
}

.terms-link {
  color: #7f56d9;
  text-decoration: underline;
}
</style>
