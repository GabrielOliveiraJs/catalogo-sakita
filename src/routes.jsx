import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasePage from './pages/BasePage/Index'
import Home from './pages/Home/Index'
import ProductDetails from './pages/ProductDetails/Index'
import ProductsProvider from './contexts/Porducts'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ProductsProvider>
                <Routes>
                    <Route path='/' element={<BasePage />}>
                        <Route index element={<Home />} />
                        <Route path='/product/:id' element={<ProductDetails />} />
                    </Route>
                </Routes>
            </ProductsProvider>
        </BrowserRouter>
    )
}

export default AppRoutes