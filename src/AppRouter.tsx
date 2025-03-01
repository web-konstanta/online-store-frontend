import Footer from './components/Layouts/Footer'
import Header from './components/Layouts/Header'
import { publicRoutes } from './routes/publicRoutes'
import { Routes, Route } from 'react-router-dom'

const AppRouter = () => {
    return (
        <div className="content">
            <Header />
            <div style={{ flex: 1 }}>
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
