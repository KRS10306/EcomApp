import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registeration = () => {
  const [userRegisteration, setUserRegisteration] = useState({
    name: "",
    email: "",
    contact: null,
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //"^[^\s@]+" => start with one or more non-space and non-@ characters
  //"@" => must include @
  //"[^\s@]+" => one or more non-space and non-@ characters after @
  //"\." => dot separator
  //"[^\s@]+$" => one or more characters after the dot

  const contactRegex = /^[6-9]\d{9}$/; //"/^[6-9]" => Starts with 6, 7, 8, or 9
  //Followed by 9 digits (\d{9})

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //At least 8 characters
  // At least one uppercase letter
  // At least one lowercase letter
  // At least one number
  // At least one special character

  const nameRegex = /^[a-zA-Z ]{2,40}$/; //Only letters and spaces allowed
  // Between 2 and 40 characters

  const registerationHandler = async () => {
    if (!emailRegex.test(userRegisteration.email)) {
      toast.warn("enter valid email");
      return
    }
    if (!contactRegex.test(userRegisteration.contact)) {
      toast.warn("enter a valid contact");
      return
    }
    if (!passwordRegex.test(userRegisteration.password)) {
      toast.warn(`enter a password with
         At least 8 characters. 
         At least one uppercase letter. 
         At least one lowercase letter.
         At least one number. 
         At least one special character`);
         return
    }
    if (!nameRegex.test(userRegisteration.name)) {
      toast.warn("enter a valid name with Only letters and spaces allowed and maximum 40 characters allowed");
      return;
    }
    console.log(userRegisteration);
    console.log(confirmPassword);

    if (
      !userRegisteration.name ||
      !userRegisteration.email ||
      !userRegisteration.password ||
      !userRegisteration.contact
    ) {
      toast.error("Fill all the fields");
      return;
    }
    if (userRegisteration.password !== confirmPassword) {
      toast.error("Password and Confirm password are not the same")
      return;
    }

    try {
      const response = await axios.post("https://ecomapp-am84.onrender.com/signup",userRegisteration)//Here "userRegistration" is payload
      //"payload"=> In the backend, a payload refers to the actual data that is sent or received in a request or response—especially in the context of HTTP requests (like POST, PUT) or APIs.
      //If a frontend sends this POST request:
      // {
      //   "name": "Rishit",
      //   "email": "rishit@example.com"
      // }

      //is called the payload — it's the data carried in the body of the request.

      //       Common Uses in Backend:
      // Request Payload: Data the frontend sends to the backend.

      // Response Payload: Data the backend sends back (e.g., in JSON format).

      // In APIs, the payload usually carries the information needed to create, update, or process resources.

      console.log(response?.data)
      toast.success("User Registered")

      navigate("/")
    } catch (err) {
      if (err.response?.data?.message === "Email already exists") {
        toast.error("Email or Contact already exists");
      } else {
        console.error("Something went wrong:", err);
        toast.error("Server error");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.svgrepo.com/show/301692/login.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or <br />
            <a
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Sign up to your account
            </a>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* <form > */}
            {/* method="POST" action="#" */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  required=""
                  onChange={(e) =>
                    setUserRegisteration({
                      ...userRegisteration,
                      name: e.target.value,
                    })
                  }
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  required=""
                  onChange={(e) =>
                    setUserRegisteration({
                      ...userRegisteration,
                      email: e.target.value,
                    })
                  }
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Contact
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                {/* <span className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  iworkedon.com/
                </span> */}
                <input
                  id="contact"
                  name="contact"
                  placeholder="9999999999"
                  type="Number"
                  required=""
                  onChange={(e) =>
                    setUserRegisteration({
                      ...userRegisteration,
                      contact: e.target.value,
                    })
                  }
                  className="flex-1 h-10 border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  onChange={(e) =>
                    setUserRegisteration({
                      ...userRegisteration,
                      password: e.target.value,
                    })
                  }
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required=""
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  onClick={registerationHandler}
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create account
                </button>
              </span>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

//toast.error         toast.warning        toast.success

export default Registeration;
