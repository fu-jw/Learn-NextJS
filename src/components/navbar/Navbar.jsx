// import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    // <div className="container">
    // 使用此方法{styles.container}，不用担心重名问题，NextJS会在名称后面自动增加随机字符
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Links/>
      </div>
    </div>
  );
};

export default Navbar;