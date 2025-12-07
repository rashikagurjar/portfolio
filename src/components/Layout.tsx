import { Outlet } from "react-router-dom";
import { Navigation } from "@/components/portfolio/Navigation";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-grow pt-16">
                <Outlet />
            </main>

            <footer className="bg-foreground/5 py-8 border-t border-border/50">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm text-muted-foreground">
                        © 2024 Rashika Singh Gurjar. Built with React, TypeScript & Tailwind CSS
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
