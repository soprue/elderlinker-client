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

    const goToSmartContnet1 = () => {
        navigate("/smartphone/smartContnet1")
    };
    const goToSmartContnet2 = () => {
        navigate("/smartphone/smartContnet2")
    };
    const goToSmartContnet3 = () => {
        navigate("/smartphone/smartContnet3")
    };
    const goToSmartContnet4 = () => {
        navigate("/smartphone/smartContnet4")
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
        goToSmartContnet1,
        goToSmartContnet2,
        goToSmartContnet3,
        goToSmartContnet4,
    };
}
