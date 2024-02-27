import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from "../Container";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Container className="pt-16 lg:pt-20">
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default MainLayout;
