import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/react";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	// themeColor: [
	//      { media: "(prefers-color-scheme: light)", color: "white" },
	//      { media: "(prefers-color-scheme: dark)", color: "black" },
	// ],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta
					name="theme-color"
					content="white"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="theme-color"
					content="black"
					media="(prefers-color-scheme: dark)"
				/>
			</head>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers
					themeProps={{
						attribute: "class",
						defaultTheme: "dark",
					}}
				>
					<Navbar />
					<main>{children}</main>
					<footer className="w-full flex items-center justify-center pt-3 pb-6">
						<Link
							isExternal
							className="flex items-center gap-1 text-current text-lg"
							href="https://www.dtab.xyz"
							title="Daniel Tabibzadeh's Portfolio"
						>
							<span className="text-default-600">
								Built with <span className="text-red-500">♥</span> by
							</span>
							<span className="text-blue-500">dtab.xyz</span>
						</Link>
					</footer>
				</Providers>
			</body>
		</html>
	);
}
