// To inform next js, this is a client component 
"use client"; 
  
// Import useState from 'react' library 
import { useState } from "react"; 
// import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";


const Links = () => {

  const links = [
    {
      title:"HomePage",
      path:"/",
    },
    {
      title:"About",
      path:"/about",
    },
    {
      title:"Contact",
      path:"/contact",
    },
    {
      title:"Blog",
      path:"/blog",
    },
  ];

  // 定义一个 useState() 钩子, Syntax:
  // const [varName,setVarName] = useState(<initial_state>);
  // 用于右边的响应式按钮，默认不显示(小屏时显示)
  const [open, setOpen] = useState(false);


  // 临时变量
  // 是否登录
  const session = true;
  // 是否是管理员
  const isAdmin = true;



  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link=>(
          // <Link href={link.path} key={link.title}>{link.title}</Link>
          <NavLink item={link} key={link.title}/>
        )))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{title:"Admin",path:"/admin"}}/>}
            <button className={styles.logout}>Logout</button>
          </>

        ) : (
          <NavLink item={{title:"Login",path:"/login"}}/>
        )}
      </div>
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
    </div>
  )
}

export default Links;