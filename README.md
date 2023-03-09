# 说明

`ant-design-icons-vue-umd` 是 Ant Design Icons Vue的UMD版本（非官方）。

## 改动或新增目录结构  

```bash
.
├── vite.config.ts #打包编译配置     
└── package.json   # 新增vite  @vitejs/plugin-vue-jsx 依赖
```

## 生成流程  

安装依赖

```bash
pnpm install

```

编译

```bash
pnpm run build
```

## 使用  
在所需要引入的项目的vite.config.js文件plugins节点添加如下配置，其中  
importToCDN module 中的path可以改为你自己的静态资源服务器
```ts

import { Plugin as importToCDN } from "vite-plugin-cdn-import";

 plugins: [
     //... other plugins 
    importToCDN({
      modules: [
         {
          name: "@ant-design/icons-vue",
          var: "AntDesignIconsVue",
          path: "https://cdn.jsdelivr.net/npm/@elonmuscle/ant-design-icons-vue/dist/ant-design-icons-vue.umd.js"
        }
      ],
    }),
  ],

```

 