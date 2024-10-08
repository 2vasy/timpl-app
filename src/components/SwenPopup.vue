<template>
    <div class="swen-popup">
      <div class="popup-content">
        <h3>Profit goes to SWEN</h3>
        <p>By leaving a tip, you take care of nature.</p>
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </template>
  
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
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  </style>

