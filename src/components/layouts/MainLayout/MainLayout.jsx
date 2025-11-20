// React Router
import { Outlet } from "react-router";

// Components
import { Header } from '@/components/layouts/Header/Header.jsx';
import { Footer } from '@/components/layouts/Footer/Footer.jsx';


export const MainLayout = () => {
    return (
        <>
            <Header />
            <main> 
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
