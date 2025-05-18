import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const SignIn = () => {
    const { signInUser } = use(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //send firebase send
        signInUser(email, password)
            .then(result => {
                console.log(result);

                const signInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                //update last signIn to the database
                fetch('https://coffee-store-server-b11.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signInfo)
                }

                )
                    .then(res => res.json())
                    .then(data => {
                        console.log('after update patch', data);
                    })


            }).catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-20 shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Sign In now!</h1>
                <form onSubmit={handleSignIn} className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;