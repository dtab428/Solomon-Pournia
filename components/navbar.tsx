import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/react";
import { Kbd } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
	return (
		<NextUINavbar
			maxWidth="sm"
			position="sticky"
			className="bg-transparent flex-wrap before:content-[''] before:block before:h-[0.5rem] before:w-full"
			shouldHideOnScroll
			isBlurred={false}
		>
			<div className="flex w-full items-center inline-block w-auto rounded-3xl bg-white backdrop-blur-lg bg-teal-200/25 p-3">
				<NavbarContent className="" justify="center">
					<NavbarBrand as="li" className="gap-3 max-w-fit">
						<NextLink
							className="flex justify-center items-center gap-1"
							href="/"
						>
							{/* <Logo /> */}
							<p className="font-bold text-black dark:text-white lowercase text-3xl dahlia-font">
								Solomon Pournia
							</p>
						</NextLink>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent className="" justify="end">
					<NavbarItem className="flex ms-2 gap-2">
						<ThemeSwitch />
					</NavbarItem>
				</NavbarContent>
			</div>
		</NextUINavbar>
	);
};
