<template>
  <div id="app" class="app-container">
    <Header />
    <TipInput />
    <Rating />
    <Feedback />
    <PaymentMethods />
    <SwenPopup v-if="showSwenPopup" @close="showSwenPopup = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import TipInput from './components/TipInput.vue';
import Rating from './components/Rating.vue';
import Feedback from './components/Feedback.vue';
import PaymentMethods from './components/PaymentMethods.vue';
import SwenPopup from './components/SwenPopup.vue';

const showSwenPopup = ref(false);
</script>

<style>
.app-container {
  max-width: 375px;
  margin: 0 auto;
}
@media (max-width: 600px) {

}

</style>
