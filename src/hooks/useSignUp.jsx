import { useContext } from "react";
import { SignUpContext } from "../provider/SignUpProvider";


const useSignUp = () => {
    const signUp = useContext(SignUpContext);
    return signUp;
};

export default useSignUp;