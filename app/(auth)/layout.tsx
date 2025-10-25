import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/icons/logo.svg"

function Layout({children}: { children: React.ReactNode }) {


    return (
        <main className={"auth-layout"}>

            <section className={"auth-left-section scrollbar-hide-default"}>
                <Link href="/" className={"auth-logo"}>
                    <Image src={Logo} alt="logo" width={140} height={32} className={"h-8 w-auto"}/>
                </Link>
                <div className={"pb-6 lg:pb-8 flex-1"}> {children} </div>

            </section>

            <section className={"auth-right-section"}>
                <div className={"z-10 relative lg:mt-4 lg:mb-16"}>
                    <blockquote className={"auth-blockquote"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </blockquote>
                    <div className={"flex items-center justify-between"}>

                        <div>
                            <cite className={"auth-testimonial-author"}>- Ethan H.</cite>
                            <p className={"max-md:text-xs text-gray-500"}>Retail Investor</p>
                        </div>
                        <div className={" flex items-center gap-0.5"}>
                            {[1,2,3,4,5].map((star) => (<Image src='/assets/icons/star.svg' alt='stars' width={10} height={10} className={"w-4 h-4"} />))}
                        </div>

                    </div>

                </div>

                <div className={"flex-1 relative"}>
                    <Image src="/assets/images/dashboard.png" alt="dashboard Image" width={1440} height={1150} className={"auth-dashboard-preview absolute top-0"} />
                </div>
            </section>


        </main>
    )
}

export default Layout
