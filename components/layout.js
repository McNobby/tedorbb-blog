import Footer from "./Footer.jsx"
import Navbar from "./navbar"

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
