import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../context/Authcontext";

const Login = () => {
  const { user, setUser } = useUserContext()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log('user is already logged in');
      navigate('/')
    }
  }, [user])

  const handleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      
      if (data) {
        const res = await axios.post(`http://localhost:5000/oauth`, {
          email: data.user.email,
          userName: data.user.displayName
        });

        if (res.data.success) {
          const auth = { email: res.data.data.email, sessionId: res.data.data.sessionId };
          localStorage.setItem("auth", JSON.stringify(auth));
          setUser({
            id: res.data.data._id,
            email: res.data.data.email,
            sessionId: res.data.data.sessionId,
            userName: res.data.data.userName,
            phoneNumber: res.data.data.phoneNumber,
            address: res.data.data.address,
            userPhoto : res.data.data.userPhoto
          })
          toast.success("Login Successful");
        }

      }

    } catch (error) {
      console.error("Login failed: ", error);
      toast.error("Login Failed");
    }
  };

  const login = async () => {
    try {
      let pass = encodeURIComponent(password);
      let eml = encodeURIComponent(email);
      axios.get(`http://localhost:5000/login?email=${eml}&password=${pass}`)
        .then((res) => {
          // console.log(res.data);
          if (res.data.message == "User not found") {
            alert("User not found");
          }
          else if (res.data.message == "Wrong password") {
            alert("Incorrect Password");
          }
          else {
            // console.log(res.data);
            const auth = { email: res.data.data.email, sessionId: res.data.data.sessionId };
            localStorage.setItem("auth", JSON.stringify(auth));
            setUser({
              id: res.data.data._id,
              email: res.data.data.email,
              sessionId: res.data.data.sessionId,
              userName: res.data.data.userName,
              phoneNumber: res.data.data.phoneNumber,
              address: res.data.data.address,
              userPhoto : res.data.data.userPhoto
            })
            navigate('/');
          }
        })
        .catch((err) => {
          console.error(err);
        })

    } catch (error) {
      console.error("Login Failed: ", error);
    }
  }


  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <h1 className="font-bold text-4xl text-green-600 mt-6">NUTRIBITES</h1>
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Login</h3>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="font-medium text-green-600 hover:text-green-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
            />
          </div>
          <button onClick={login} className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150">
            Login
          </button>
        </form>
        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_17_40)">
              <path
                d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                fill="#4285F4"
              />
              <path
                d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                fill="#34A853"
              />
              <path
                d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                fill="#FBBC04"
              />
              <path
                d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Continue with Google
        </button>
      </div>
    </main>
  );
};

export default Login;
