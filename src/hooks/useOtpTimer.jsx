import { useState, useEffect } from 'react';

const useOtpTimer = () => {
    const [timer, setTimer] = useState(120);
    const [isDisabled, setIsDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const OTP_EXPIRATION_TIME = 120;

    useEffect(() => {
        // Check if there's already a saved expiration time
        const savedTime = localStorage.getItem("otpExpireTime");
        const otpSentStatus = localStorage.getItem("otpSent");

        if (otpSentStatus) {
            setOtpSent(true); 
        }

        if (savedTime && otpSentStatus) {
            const expireTime = new Date(savedTime).getTime();
            const currentTime = new Date().getTime();
            const remainingTime = Math.floor((expireTime - currentTime) / 1000);

            if (remainingTime > 0) {
                // If there's still time left, set the remaining time on the timer
                setTimer(remainingTime);
                setIsDisabled(true);
            } else {
                // If the time has expired, allow resending the OTP
                setTimer(0);
                setIsDisabled(false);
                setMessage('You can resend the OTP now!');
            }
        } else {
            // First time visiting the page, start the timer
            const expireTime = new Date();
            expireTime.setSeconds(expireTime.getSeconds() + OTP_EXPIRATION_TIME);
            localStorage.setItem("otpExpireTime", expireTime.toString());
            localStorage.setItem("otpSent", "true");
            setTimer(OTP_EXPIRATION_TIME); 
            setOtpSent(true);
        }
    }, []);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsDisabled(false);
            setMessage('You can resend the OTP now!');
        }

        return () => clearInterval(interval);
    }, [timer]);

    const handleResendClick = () => {
        setTimer(OTP_EXPIRATION_TIME);
        setIsDisabled(true);
        setOtpSent(true);

        const expireTime = new Date();
        expireTime.setSeconds(expireTime.getSeconds() + OTP_EXPIRATION_TIME);

        localStorage.setItem("otpExpireTime", expireTime.toString());
        localStorage.setItem("otpSent", "true");
    };

    return { timer, isDisabled, message, handleResendClick, otpSent };
};

export default useOtpTimer;
