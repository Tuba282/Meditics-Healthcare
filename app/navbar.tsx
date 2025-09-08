"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
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
    href: "/docs/primitives/alert-dialog",
    description:
      "Our doctors are more than just healthcare professionals",
  },
  {
    title: "Team Members",
    href: "/docs/primitives/hover-card",
    description:
      "Our team compassionate caregivers, committed to providing personalized, expert medical care.",
  }
]

function Navbar() {
  return (

    <div>
      <div className="relative w-full h-8 bg-[var(--darkBlue)]">
        <span style={{ clipPath: 'polygon(0 0, 94% 0, 97% 100%, 0% 100%)' }} className='w-[90%] sm:w-[60%] xl:w-[50%] h-full absolute bg-[var(--lightBlue)] flex justify-center items-center gap-4'>
          <span className='hidden md:flex justify-center items-center gap-4 text-white text-xs'><FaPhone className='text-white text-lg' /> <b>Help Line</b>: +208-6666-0112</span>
          <span className=' flex md:justify-center items-center gap-2 sm:gap-4 text-white text-xs'><LuClock5 className='text-white text-lg' />  <b>Open Hours</b>: Mon - Fri 8.00 am - 6.00 pm</span>
        </span>
      </div>
      <NavigationMenu viewport={false} className="w-[80%] rounded-b-2xl h-20 hidden lg:flex bg-amber-200 mx-auto px-2 md:px-10">
        <Image src={'/logo.svg'} alt="logo" className="me-20" width={200} height={100} />
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                      <div className="mt-4 mb-2 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>

                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
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
              <Link href="/docs">Services</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/docs">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/docs">Blogs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Button variant="outline" className="hidden xl:flex">BOOK AN APPOINTMENT</Button>
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

