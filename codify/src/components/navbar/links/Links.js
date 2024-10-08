//import Link from "next/link"
"use client"
import { useState } from "react"
import styles from "./Links.module.css"
import Navlink from "./navLink/Navlink"
import Image from "next/image"
import { handleLogout } from "@/lib/action"
const Links = ({session}) => {
    const [open, setOpen] = useState(false)
    const links = [
    {
        title: "Home",
        path: "/"

    },
    {
        title: "About",
        path: "/about"

    },
    {
        title: "Contact",
        path: "/contact"

    },

    {
        title: "Blog",
        path: "/blog"

    },
]
    //const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {links.map((link => (
                    <Navlink item={link} key={link.title}/>
                )))}
                {
                    session?.user ? (
                        <>
                            {session.user?.isAdmin && <Navlink item={{ title: "Admin", path:"/admin"}}/>}
                            <form action={handleLogout}>
                                <button className={styles.logout}>Logout</button>
                            </form>

                        </>
                    ) : (
                        <Navlink item={{ title: "Login", path: "/login"}}/>
                    )
                }
            </div>
            {/*<button className={styles.menuButton} onClick ={() => setOpen((prev) => !prev)}>Menu</button>*/}
            <Image src="/menu.png" alt="menu" className={styles.menuButton} width={30} height={30} onClick ={() => setOpen((prev) => !prev)}/>
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {links.map((link => (
                            <Navlink item={link} key={link.title}/>
                        )))}
                    </div>
                )
            }
        </div>

    )
}

export default Links;