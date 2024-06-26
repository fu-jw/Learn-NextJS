# Learn NextJS

## Getting Started

>- NextJS: 14
>- NodeJS: 20.15.0

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 文件结构和路由

NextJS 使用基于文件系统的路由器，每个文件夹代表一个映射到URL的路由段。
若要创建嵌套路由，只需在文件夹内部嵌套即可。

>\[path\] :动态路由，该文件夹下内容可以动态拼接到路由中
> (groupName): 该名称不会出现在路由中，用于分组汇总

- / : 对应app文件夹
- 每个文件夹下创建page.js, 对应页面UI
![page-rout](https://image.fu-jw.com/img/2024/06/26/667bf0fa833e6.webp)

项目文件结构如下：

```txt
LEARN-NEXTJS:
│              
├─public
│      favicon.ico
│      
├─src
│   └─app
|      ├———(auth)
|      |      ├———forgot-passwd
|      |      |     └──page.jsx
|      |      ├———login
|      |      |     └──page.jsx
|      |      └───register
|      |            └──page.jsx
|      ├———about
|      |     └──page.jsx
|      ├———admin
|      |     └──page.jsx
|      ├———blog
|      |     ├———[slug]
|      |     |     └──page.jsx
|      |     └──layout.jsx
|      ├———contact
|      |     └──page.jsx
|      |
│      ├———globals.css
│      ├———layout.js
│      └──page.jsx

```
