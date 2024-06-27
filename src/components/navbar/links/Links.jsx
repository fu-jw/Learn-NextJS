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

  // 临时变量
  // 是否登录
  const session = true;
  // 是否是管理员
  const isAdmin = true;



  return (
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
  )
}

export default Links;