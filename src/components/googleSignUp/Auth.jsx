import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function SignUpWithGoogle() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    // Replace 'YOUR_CLIENT_ID' with your actual Google Sign-In client ID
    const clientId = '720654234892-hgot4p4b8hmnksngiut8qr3d0525ve1u.apps.googleusercontent.com';

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin
                clientId={clientId}
                onSuccess={responseMessage}
                onError={errorMessage}
            />
        </div>
    );
}

export default SignUpWithGoogle;
