

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const RegisterModal = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    captchaInput: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasContacted = localStorage.getItem("hasContacted");
    if (!hasContacted) {
      setShowModal(true);
    }
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput !== captcha) {
      setCaptchaError("Invalid captcha");
    } else {
      setCaptchaError("");

      // Ask the user if they want to send the email
      const confirmSend = window.confirm("Do you want to send the email?");
      if (confirmSend) {
        // Create the mailto link
        const mailtoLink = `mailto:info@infomericainc.com?subject=Contact&body=${encodeURIComponent(`
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Organization: ${formData.organization}
          Message: ${formData.message}
        `)}`;

        // Open the mailto link
        window.location.href = mailtoLink;

        // After mailto is triggered, store the hasContacted flag
        localStorage.setItem("hasContacted", "true");
        setShowModal(false);

        // Clear the form fields
        setFormData(initialFormData);
      } else {
        // The user discarded the email, so don't store the hasContacted flag
        localStorage.removeItem("hasContacted");
      }
    }
  };

  const generateCaptcha = () => {
    const randomchar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let uniquechar = "";
    for (let i = 1; i < 7; i++) {
      uniquechar += randomchar.charAt(
        Math.floor(Math.random() * randomchar.length)
      );
    }
    setCaptcha(uniquechar);
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="m-1">
              <label>
                <b>Your Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-1">
              <label>
                <b>Email Address</b>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-1">
              <label>
                <b>Phone Number</b>
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                minLength={10}
                maxLength={10}
                required
              />
            </div>
            <div className="m-1">
              <label>
                <b>Organization</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-1">
              <label>
                <b>Message</b>
              </label>
              <textarea
                rows="2"
                cols="50"
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="d-flex justify-content-center mt-2 mb-2">
              <div id="user-input" className="d-flex m-2 gap-2">
                <input
                  type="text"
                  className="mr-2 form-control"
                  id="submit"
                  name="captchaInput"
                  placeholder="Enter Captcha"
                  value={formData.captchaInput}
                  onChange={handleChange}
                  required
                />
                <div
                  className="mr-2 mt-1"
                  onClick={generateCaptcha}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-sync"></i>
                </div>
                <div
                  id="image"
                  className="bg-secondary text-white fst-italic p-1 rounded fs-5 no-select"
                >
                  {captcha}
                </div>
              </div>
            </div>
            {captchaError && (
              <p className="text-danger text-center">{captchaError}</p>
            )}
            <Button
              type="submit"
              className="btn fs-6 w-100 text-white"
              style={{ backgroundColor: "rgb(14, 46, 78)" }}
            >
              Send Message
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterModal;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import scan1 from "./Images/scan1.jpg";
// import scan2 from "./Images/scan2.jpg";
// import scan3 from "./Images/scan3.jpg";

// const Register = () => {
//   const [confirmpassword, setConfirmpassword] = useState("");
//   const [values, setValues] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const navigate = useNavigate();

//   const handleInput = (event) => {
//     setValues((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//     // console.log(CryptoJS.MD5(event.target.value).toString())
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const { email, phone, password } = values;
//     // if (userdetails.some((user) => user.email === email)) {
//     //   setError("This Email already Registered");
//     // } else if (userdetails.some((user) => user.phone.toString() === phone)) {
//     //   setError("Phone number already exists");
//     // } else
//     if (password !== confirmpassword) {
//       setError("Passwords do not match");
//     } else {
//       const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
//       if (!passwordRegex.test(password)) {
//         setError(
//           "Password must contain at least 8 characters, including one number, one letter, and one special character."
//         );
//       } else {
//         setError("");
//         sessionStorage.setItem("registered_user", JSON.stringify(values));
//         navigate("/main");
//         // values.password = CryptoJS.MD5(values.password).toString();
//         // navigate("/emailverification", { state: { values } });
//       }
//     }
//   };
//   // console.log(values);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleToggleConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <div className="fullscreen">
//       <main>
//         <div className=" d-lg-flex gap-5 align-items-center" style={{minHeight:'100vh'}}>
//           {/* <div className=""> */}
       
            
//                 <div className="col-lg-7">
//                   <img
//                     src={scan2}
//                     // className="img-fluid"
//                     width="100%"
//                     alt="Sample"
//                   />
//                 </div>
//                 <div className="col-lg-4 ">
//                   <form method="post" onSubmit={handleSubmit}>
//                     <div>
//                       <div>
//                         <h1 className="text-center fs-3">Register</h1>
//                       </div>
//                       {/* <hr /> */}
//                       <div className="form-group mt-4 mb-2">
//                         <label className="control-label fw-bold" htmlFor="firstname">
//                           First Name
//                         </label>
//                         <div className="d-flex">
//                           <input
//                             className="form-control mb-2"
//                             type="text"
//                             id="firstname"
//                             name="firstname"
//                             onChange={handleInput}
//                             placeholder="Enter First Name"
//                             pattern="[A-Z][a-z]*\s*\w*"
//                             title="First letter should be uppercase, remaining letters are lowercase. No special characters"
//                             required
//                           />
//                           <span className="text-danger fs-4"> &nbsp;*</span>
//                         </div>
//                       </div>
//                       <div className="form-group mb-2">
//                         <label className="control-label fw-bold" htmlFor="lastname">
//                           Last Name
//                         </label>
//                         <div className="d-flex ">
//                           <input
//                             className="form-control mb-2"
//                             type="text"
//                             id="lastname"
//                             name="lastname"
//                             onChange={handleInput}
//                             placeholder="Enter Last Name"
//                             pattern="[A-Z][a-z]*\s*\w*"
//                             title="First letter should be uppercase, remaining letters are lowercase. No special characters"
//                             required
//                           />
//                           <span className="text-danger fs-4"> &nbsp;*</span>
//                         </div>
//                       </div>
//                       <div className="form-group mb-2">
//                         <label className="control-label fw-bold" htmlFor="email">
//                           Email
//                         </label>
//                         <div className="d-flex ">
//                           <input
//                             className="form-control mb-2"
//                             type="email"
//                             id="email"
//                             name="email"
//                             onChange={handleInput}
//                             placeholder="Enter Email"
//                             required
//                           />
//                           <span className="text-danger fs-4"> &nbsp;*</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="form-group mb-2">
//                         <label className="control-label fw-bold" htmlFor="phone">
//                           Phone
//                         </label>
//                         <div className="d-flex ">
//                           <input
//                             className="form-control mb-2"
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             onChange={handleInput}
//                             placeholder="Enter Phone Number"
//                             pattern="[0-9]{10}"
//                             title="10 digit numeric value only"
//                             minLength={10}
//                             maxLength={10}
//                             required
//                           />
//                           <span className="text-danger fs-4"> &nbsp;*</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <div className="form-group mb-2">
//                         <label className="control-label fw-bold" htmlFor="password">
//                           Password
//                         </label>
//                         <div className="d-flex  passwordgroup">
//                           <input
//                             className="form-control mb-2"
//                             type={showPassword ? "text" : "password"}
//                             id="password"
//                             name="password"
//                             onChange={handleInput}
//                             placeholder="Enter Password"
//                             required
//                             pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$"
//                             title="Password must contain at least 8 characters, including one number, one letter, and one special character."
//                           />
//                           <button
//                             type="button"
//                             id="btnToggle"
//                             className="toggle12"
//                             onClick={handleTogglePassword}
//                           >
//                             <i
//                               className={`bi ${
//                                 showPassword ? "bi-eye-slash" : "bi-eye"
//                               }`}
//                             ></i>
//                           </button>
//                           <span className="text-danger fs-4"> &nbsp;*</span>
//                         </div>
//                       </div>
//                       <div className="form-group mb-2">
//                         <label
//                           className="control-label fw-bold"
//                           htmlFor="confirmpassword"
//                         >
//                           Confirm Password
//                         </label>
//                         <div className="d-flex  passwordgroup">
//                           <input
//                             className="form-control mb-2"
//                             type={showConfirmPassword ? "text" : "password"}
//                             id="confirmpassword"
//                             name="confirmpassword"
//                             onChange={(e) =>
//                               setConfirmpassword(e.currentTarget.value)
//                             }
//                             placeholder="Enter Confirm Password"
//                             required
//                           />
//                           <button
//                             type="button"
//                             id="btnToggle"
//                             className="toggle12"
//                             onClick={handleToggleConfirmPassword}
//                           >
//                             <i
//                               className={`bi ${
//                                 showConfirmPassword ? "bi-eye-slash" : "bi-eye"
//                               }`}
//                             ></i>
//                           </button>
//                           <span className="text-danger fs-4"> &nbsp;*</span>
//                         </div>
//                       </div>
//                     </div>
//                     {/* Error message */}
//                     {error && (
//                       <div className="text-danger text-center mb-3">
//                         {error}
//                       </div>
//                     )}
//                     <div className="form-group ">
//                       <div className=""></div>
//                       <div className=" text-center">
//                         <button
//                           type="submit"
//                           className="btn btn-primary register-next-step-button w-50 mt-3"
//                         >
//                           Register
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
             
           
//           {/* </div> */}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Register;
