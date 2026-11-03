import { defineConfig } from 'vite';
export default defineConfig({base:'/Venture-3D-Studio/',build:{target:'es2022',rollupOptions:{input:{studio:'index.html',viewer:'viewer.html'}}}});
