import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";
import GitHub from "./components/icons/GitHub";
import LinkedIn from "./components/icons/LinkedIn";

export const metadata: Metadata = {
	title: "Ben Bromley",
	description:
		"Ben Bromley is a software engineer, musician, and AV technician.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} antialiased relative`}>
				{children}
        <SocialIcons />
			</body>
		</html>
	);
}

const SocialIcons = () => {
	return (
		<span className="absolute top-4 right-4 flex space-x-2">
			<GitHub
				className="p-2 hover:bg-slate-800 rounded-md"
				href="https://github.com/Ben-Bromley"
			/>
			<LinkedIn
				className="p-2 hover:bg-slate-800 rounded-md"
				href="https://www.linkedin.com/in/ben-bromley/"
			/>
		</span>
	);
};
