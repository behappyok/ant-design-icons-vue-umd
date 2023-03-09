/*
 * @Description  :
 * @Author       : zyl
 * @Date         : 2023-03-09 09:43:30
 * @LastEditTime : 2023-03-09 11:26:27
 * @FilePath     : \\vite-project\\vite.config.ts
 */
import { defineConfig } from "vite";
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx';
 
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins:[
    vueJsx()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "AntDesignIconsVue",
      fileName: (format) => `ant-design-icons-vue.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
