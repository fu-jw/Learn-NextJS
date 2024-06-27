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

## 文件和路由

NextJS 使用基于文件系统的路由器，每个文件夹代表一个映射到URL的路由段。
若要创建嵌套路由，只需在文件夹内部嵌套即可。

>\[path\] :动态路由，该文件夹下内容可以动态拼接到路由中 </br>
> (groupName): 该名称不会出现在路由中，用于分组汇总 </br>

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

## Layouts

页面就是路由，具有唯一性。
对于相同的部分可以定义为 Layout 复用

- 根目录下的Layout，整个项目复用
- 子目录下的Layout，只在子目录下复用

常见使用：

- loading: 项目加载时显示
- not-found：项目未找到路径时显示
- error: 项目出错时显示
- 在blog目录下时，只会在 blog/* 下显示

## 响应式

以右侧按钮为例，默认不显示
屏幕缩小时显示该按钮，且隐藏导航栏的链接，按钮点击后显示导航栏的链接
屏幕放大时，隐藏按钮，显示导航栏的链接

1. 定义变量监控按钮点击状态

```jsx
// To inform next js, this is a client component 
"use client"; 
// Import useState from 'react' library 
import { useState } from "react"; 

  // 定义一个 useState() 钩子, Syntax:
  // const [varName,setVarName] = useState(<initial_state>);
  // 用于右边的响应式按钮，默认不显示(小屏时显示)
  const [open, setOpen] = useState(false);
```

2. 定义按钮

默认不显示按钮，显示导航栏的链接
屏幕缩小时，隐藏导航栏的链接，显示按钮，按钮点击后显示导航栏的链接

```jsx
{/* 右侧的响应式按钮，点击打开或关闭菜单 */}
<button className={styles.menuButton} onClick={()=>setOpen((pre)=>!pre)}>Menu</button>
{
  open && 
  <div className={styles.mobileLinks}>
    {links.map((link=>(
        <NavLink item={link} key={link.title}/>
      )))
    }
  </div>
}
```

3. 样式

```css
/* 默认不显示按钮和小屏版链接 */
.menuButton,
.mobileLinks {
  display: none;
}

/* 屏幕缩小到 768px 时 */
@media (max-width: 768px) {
  /* 隐藏导航链接 */
  .links {
    display: none;
  }
  /* 显示该菜单按钮 */
  .menuButton {
    display: block;
    cursor: pointer;
  }

  .mobileLinks {
    position: absolute;
    top: 100px;
    right: 0;
    width: 50%;
    height: calc(100vh - 100px);
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
```

## Image
