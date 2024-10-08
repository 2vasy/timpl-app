<template>
    <div class="feedback">
      <h3>What did you like?</h3>
      <div class="emojis">
        <span v-for="emoji in emojis" :key="emoji" @click="selectEmoji(emoji)" :class="{ selected: selectedEmoji === emoji }">{{ emoji }}</span>
      </div>
      <textarea placeholder="Describe your feedback" v-model="feedbackText"></textarea>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const emojis = ['😊', '🧼', '🌟', '🍔'];
  const selectedEmoji = ref('');
  const feedbackText = ref('');
  
  const selectEmoji = (emoji) => {
    selectedEmoji.value = emoji;
  };
  </script>
  
  <style scoped>
  .emojis {
    display: flex;
    gap: 10px;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  
  .selected {
    border: 2px solid #000;
    border-radius: 50%;
  }
  
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  </style>
  