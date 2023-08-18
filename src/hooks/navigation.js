import { useNavigate } from "react-router-dom";

export function useNavigation() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goToSignIn = () => {
        navigate("/signin");
    };

    const goToSignUp = () => {
        navigate("/signup");
    };

    const goToMypage = () => {
        navigate("/mypage");
    };

    const goToIntro = () => {
        navigate("/intro");
    };

    const goToComputer = () => {
        navigate("/computer");
    };

    const goToSmartphone = () => {
        navigate("/smartphone");
    };

    const goToQuiz = () => {
        navigate("/quiz");
    };

    const goToQuizDetail = () => {
        navigate("/quiz/detail");
    };

    const goToGym = () => {
        navigate("/gym");
    };

    const goToSmartContent1 = () => {
        navigate("/smartphone/smartContent1")
    };
    const goToSmartContent2 = () => {
        navigate("/smartphone/smartContent2")
    };
    const goToSmartContent3 = () => {
        navigate("/smartphone/smartContent3")
    };
    const goToSmartContent4 = () => {
        navigate("/smartphone/smartContent4")
    };

    const goToComputerContent1 = () => {
        navigate("/computer/computerContent1")
    };
    const goToComputerContent2 = () => {
        navigate("/computer/computerContent2")
    };
    const goToComputerContent3 = () => {
        navigate("/computer/computerContent3")
    };
    const goToComputerContent4 = () => {
        navigate("/computer/computerContent4")
    };

    return {
        goToHome,
        goToSignIn,
        goToSignUp,
        goToMypage,
        goToIntro,
        goToComputer,
        goToSmartphone,
        goToQuiz,
        goToQuizDetail,
        goToGym,
        goToSmartContent1,
        goToSmartContent2,
        goToSmartContent3,
        goToSmartContent4,
        goToComputerContent1,
        goToComputerContent2,
        goToComputerContent3,
        goToComputerContent4,
    };
}
