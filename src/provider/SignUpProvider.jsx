import PropTypes from "prop-types";
import { createContext, useState } from "react";
 export const SignUpContext = createContext(null); 

const SignUpProvider = ({children}) => {
const [signUpStep, setSignUpStep] = useState(1)

    const signUpInfo = {signUpStep, setSignUpStep}
    return (
        <SignUpContext.Provider value={signUpInfo}>
            {children}
        </SignUpContext.Provider>
    );
};

SignUpProvider.propTypes = {
    children: PropTypes.node
}
export default SignUpProvider;