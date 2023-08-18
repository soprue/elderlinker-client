import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import Gym from "./pages/Gym";
import Computer from "./pages/Computer";
import Smartphone from "./pages/Smartphone";
import Quiz from "./pages/Quiz";
import MyPage from "./pages/MyPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SmartContent1 from "./pages/Smartphone/smartContent1.js";
import SmartContent2 from "./pages/Smartphone/smartContent2.js";
import SmartContent3 from "./pages/Smartphone/smartContent3.js";
import SmartContent4 from "./pages/Smartphone/smartContent4.js";
import ComputerContent1 from "./pages/Computer/computerContent1.js";
import ComputerContent2 from "./pages/Computer/computerContent2.js";
import ComputerContent3 from "./pages/Computer/computerContent3.js";
import ComputerContent4 from "./pages/Computer/computerContent4.js";
import QuizDetail from "./pages/Quiz/QuizDetail";

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/computer" element={<Computer />} />
                    <Route path="/smartphone" element={<Smartphone />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/quiz/detail" element={<QuizDetail />} />
                    <Route path="/gym" element={<Gym />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/smartphone/smartContent1" element={<SmartContent1 />} />
                    <Route path="/smartphone/smartContent2" element={<SmartContent2 />} />
                    <Route path="/smartphone/smartContent3" element={<SmartContent3 />} />
                    <Route path="/smartphone/smartContent4" element={<SmartContent4 />} />
                    <Route path="/computer/computerContent1" element={<ComputerContent1 />} />
                    <Route path="/computer/computerContent2" element={<ComputerContent2 />} />
                    <Route path="/computer/computerContent3" element={<ComputerContent3 />} />
                    <Route path="/computer/computerContent4" element={<ComputerContent4 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default routes;
