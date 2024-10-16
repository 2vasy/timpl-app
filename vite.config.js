import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/<timpl-app>/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  //server: {
  //  host: '192.168.178.21', // или укажите конкретный IP вашего компьютера
  //  port: 3000 // любой доступный порт
 // }
});