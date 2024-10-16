import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "./views/IndexPage";
import { FavoritesPage } from "./views/FavoritesPage";
import { Layout } from "./layouts/Layout";
//import { lazy, Suspense } from "react";


//const FavoritesPage = lazy(() => import('./views/FavoritesPage'));
//const IndexPage = lazy(() => import('./views/IndexPage'));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index />
                    <Route path="/favoritos" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;


// Performance en React Router Dom - build
/* const FavoritesPage = lazy(() => import('./views/FavoritesPage'))
const IndexPage = lazy(() => import('./views/IndexPage'));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Layout/>}>
                    <Route path="/" element={
                    <Suspense fallback="Cargando...">
                            <ndexPage />
                        </Suspense>
                    } index />
                    <Route path="/favoritos" element={
                        <Suspense fallback="Cargando...">
                            <FavoritesPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter; */