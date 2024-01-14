"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: " Refreshing Designs",
    href: "#features",
    description:
      "Creating memorable and impactful experiences with our user friendly designs.",
  },
  {
    title: "Web Development",
    href: "#features",
    description:
      "Unlock online success with our expert web development.",
  },
  {
    title: "Mobile App Development",
    href: "#features",
    description:
      "Crafting seamless mobile experiences.",
  },
  {
    title: "Full Stack Development",
    href: "#features",
    description: "From Company Website to E-Commerce we've got you covered",
  },
  {
    title: "Speed Optimized",
    href: "#features",
    description:
      "We provide effiecient and fast solutions for your business.",
  },
  {
    title: "Fully Customizable",
    href: "#features",
    description:
      "Tailor every detail to reflect your unique style and preferences.",
  },
]

export function NavBtn() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Softwares</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#campuslink"
                    style={{backgroundImage: 'url(/src/Web.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}
                  >
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="" title="E-Commerce">
                A full stack E-Commerce solution with admin dashboard for your business.
              </ListItem>
              <ListItem href="" title="Booking System">
                A full stack Booking System with admin dashboard for your business.
              </ListItem>
              <ListItem href="" title="Automations + Integrations">
              Elite integration of payment gateways and automations.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Technologies</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
          <Link href="https://www.txwservices.software/" target="blank" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              TXW Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
