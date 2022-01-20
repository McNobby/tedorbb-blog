import Footer from "./Footer.jsx";
import Navbar from "./navbar.jsx";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
