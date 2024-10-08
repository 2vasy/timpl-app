<template>
    <div class="tip-input">
        <h2>{{ waiterName }}</h2>
        <input type="number" v-model="tipAmount" placeholder="Enter amount of tips" min="0" />
        <div class="switch">
            <label>
                <input type="checkbox" v-model="isFullAmount" />
                I want {{ waiterName }} to receive the full amount
            </label>
        </div>
        <p>To pay {{ tipAmount }}€</p>
        <p v-if="isFullAmount">Service fees 0€</p>
        <p v-else>Service fees {{ (tipAmount * 0.012).toFixed(2) }}€</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const waiterName = ref('Madison');
const tipAmount = ref(0);
const isFullAmount = ref(false);
</script>

<style scoped>
.tip-input {
    margin-bottom: 20px;
}

input[type="number"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.switch {
    margin: 10px 0;
}
</style>