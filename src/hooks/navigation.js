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

    return {
        goToHome,
        goToSignIn,
        goToSignUp,
        goToMypage,
        goToIntro,
        goToComputer,
        goToSmartphone,
        goToQuiz,
        goToGym,
        goToSmartContent1,
        goToSmartContent2,
        goToSmartContent3,
        goToSmartContent4,
    };
}
