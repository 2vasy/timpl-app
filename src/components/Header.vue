<template>
  <header class="header">
    <div class="logo-container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Timpl Logo" />
      </div>
    </div>
    <div class="language-switcher">
      <div class="selected-language" @click="toggleDropdown">
        <span>{{ formattedLanguage }}</span>
        <img class="arrow" src="@/assets/angle-down.png" alt="Dropdown Arrow" />
      </div>
      <ul v-if="dropdownOpen" class="language-options">
        <li
          v-for="lang in languages"
          :key="lang"
          @click="selectLanguage(lang)"
          :class="{ active: lang === selectedLanguage }"
        >
          {{ lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase() }}
        </li>
      </ul>
    </div>
    <div class="swen-marquee">
      <div class="swen-text">
        Part of the profit goes to SWEN, By leaving a tip, you take care of nature
      </div>
      <div class="swen-logo-container">
        <img src="@/assets/Frame 15485.svg" alt="SWEN Logo" class="swen-logo" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const selectedLanguage = ref(locale.value);
const dropdownOpen = ref(false);
const languages = ['en', 'de', 'fr'];

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectLanguage = (lang) => {
  selectedLanguage.value = lang;
  locale.value = lang;
  dropdownOpen.value = false;
};

const formattedLanguage = computed(() => {
  return selectedLanguage.value.charAt(0).toUpperCase() + selectedLanguage.value.slice(1).toLowerCase();
});
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 0;
  background-color: #fff;
  position: relative;
}

.logo-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 24px;
}

.language-switcher {
  position: absolute;
  right: 20px;
  top: 10px;
}

.selected-language {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background: none;
  padding: 5px 10px;
  user-select: none;
}

.arrow {
  margin-left: 5px;
  width: 24px;
  height: 24px;
}

.language-options {
  position: absolute;
  right: 0;
  top: calc(100% + 5px);
  background: #fff;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 80px;
  z-index: 1000;
  list-style: none;
  padding: 0;
  margin: 0;
}

.language-options li {
  padding: 8px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s;
}

.language-options li.active,
.language-options li:hover {
  background-color: #f0f0f0;
}

.swen-marquee {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 44px;
  background: linear-gradient(90deg, #FFDEE9 0%, #B5FFFC 100%);
  margin-top: 10px;
  overflow: hidden;
}

.swen-text {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  white-space: nowrap;
  position: absolute;
  animation: scrollText 10s linear infinite;
}

.swen-logo-container {
  position: relative;
  z-index: 1; /* Логотип всегда сверху */
}

.swen-logo {
  height: 24px;
}

@keyframes scrollText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
