"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { FaPhone } from "react-icons/fa6";
import { LuClock5 } from "react-icons/lu";
import Image from "next/image"
import ResponsiveAppBar from "./navbar(mobile)"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Team",
    href: "/team",
    description:
      "Our doctors are more than just healthcare professionals",
  },
  {
    title: "Team Members",
    href: "/teamMember/:id",
    description:
      "Our team compassionate caregivers, committed to providing personalized, expert medical care.",
  }
]

function Navbar() {
  return (

    <div className="bg-[var(--darkBlue)]">
      <div className="relative w-full h-8 ">
        <span style={{ clipPath: 'polygon(0 0, 94% 0, 97% 100%, 0% 100%)' }} className='w-[90%] sm:w-[60%] xl:w-[50%] h-full absolute bg-[var(--lightBlue)] flex justify-center items-center gap-4'>
          <span className='hidden md:flex justify-center items-center gap-4 text-white text-xs'><FaPhone className='text-white text-lg' /> <b>Help Line</b>: +208-6666-0112</span>
          <span className=' flex md:justify-center items-center gap-2 sm:gap-4 text-white text-xs'><LuClock5 className='text-white text-lg' />  <b>Open Hours</b>: Mon - Fri 8.00 am - 6.00 pm</span>
        </span>
      </div>
      <NavigationMenu viewport={false} className="w-[80%] drop-shadow-xs drop-shadow-black z-10 fixed top-8 left-10 rounded-b-2xl rounded-r-2xl h-20 hidden lg:flex bg-white mx-auto px-2 md:px-10">
        <Image src={'/logo.svg'} alt="logo" className="me-20" width={200} height={100} />
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.80fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden select-none focus:shadow-md"
                    >
                      <div className="text-lg font-medium">
                        <Image src={'/preview.png'} alt="logo" className="object-cover w-full! h-full! rounded" width={100} height={200} />
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/home#awards" title="Qualification">
                  My Qualification & Awards
                </ListItem>
                <ListItem href="/home#consultant" title="Doctor Consult">
                  Consult Your Doctor Online — Anytime, Anywhere
                </ListItem>
                <ListItem href="/home#feedbacks" title="Clients Feedbacks">
                  I strongly believe that medicine is not just about treating diseases, but about understanding people, building trust, and guiding them toward long-term wellness.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[250px] gap-2 md:grid-cols-1 ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/services">Services</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/blog">Blogs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Button variant="outline" className="hidden xl:flex bg-[var(--totaGreen)] hover:bg-[var(--darkBlue)] hover:text-[var(--totaGreen)]">BOOK AN APPOINTMENT</Button>
      </NavigationMenu>
      <ResponsiveAppBar />
    </div>
  )
}

export default Navbar

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

