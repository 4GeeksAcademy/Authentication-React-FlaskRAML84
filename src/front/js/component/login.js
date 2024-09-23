import React, {useState} from "react";

export const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <form className="w-50 mx auto" onSubmit={handleLogin}>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control
                id="exampleInputEmail1
                aria-describedby="emailHelp"
                placeholder="Enter email"
                />

            </div>

            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="examplePassword1"
                placeholder="Password"
                />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>

        </form>
    );
};