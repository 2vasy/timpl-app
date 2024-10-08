<template>
    <div class="payment-methods">
      <button @click="payWith('apple-pay')">Pay with Apple Pay</button>
      <button @click="payWith('card')">Pay with debit card</button>
    </div>
  </template>
  
  <script setup>
  const payWith = (method) => {
    alert(`Payment method selected: ${method}`);
  };
  </script>
  
  <style scoped>
  .payment-methods button {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    background-color: #6a0dad;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  