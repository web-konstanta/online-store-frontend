import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="content">
            <Header />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <Footer />
            <ScrollRestoration />
        </div>
    )
}

export default Layout
