import Footer from './components/Layouts/Footer/Footer'
import Header from './components/Layouts/Header/Header'
import { publicRoutes } from './routes/publicRoutes'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/Layouts/ScrollToTop/ScrollToTop'

const AppRouter = () => {
    return (
        <div className="content">
            <Header />
            <div style={{ flex: 1 }}>
                <ScrollToTop />
                <Routes>
                    {publicRoutes.map((route, key) => (
                        <Route
                            key={key}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default AppRouter
