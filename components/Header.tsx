
import React from 'react'
import Link from "next/link";
import Image from "next/image"
import Logo from "@/public/assets/icons/logo.svg"
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

function Header() {


    return (
        <header className={"sticky top-0 header"}>

            <div className={"container header-wrapper"}>
                <Link href={"/"}>
                   <Image src={Logo} alt={"LOGO"}/>
                </Link>
                <nav className={"hidden sm:block"}>
                    <NavItems/>
                </nav>
                <UserDropdown/>
            </div>

        </header>
    )
}

export default Header
