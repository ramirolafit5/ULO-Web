import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function LayoutPrincipal() {
    return (
        <div className="bg-gray-200 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-[100px]">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
