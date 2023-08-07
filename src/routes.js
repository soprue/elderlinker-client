import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import MainPage from "./pages/MainPage";

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Header, Footer를 보여 주고 싶은 컴포넌트 */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<MainPage />} />
                </Route>
                {/* Header, Footer를 안 보여 주고 싶은 컴포넌트 */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default routes;
