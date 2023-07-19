// import { useState} from "react";
// import { FaArrowAltCircleLeft } from "react-icons/fa";

// import styles from "./Login.module.scss";

// export const Login = () => {

//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const [errorMail, setErrorMail] = useState(false);
//   const [errorPassword, setErrorPassword] = useState(false);
//   // const [isValid, setIsValid] = useState(true);

 
//   const handleSubmit = (event:any) => {
//     event.preventDefault();
   

//     setForm({
//       email: '',
//       password: ''
//     });

   
//   };



//    // Validate Mail
//   //  const validateMail = () => {
//   //   const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

//   //   return regex.test(form.mail)
//   // };


//   const handleSetForm = (event:any) => {
//     const { name, value } = event.target;
//     setForm({
//       ...form,
//       [name]: value
//     });
//     console.log(form.email);

//     if(form.email.length  !=0){
//       setErrorMail(true)
      
//     }
    
//     if(form.password.includes("")){
//       setErrorPassword(true)}
  

//   };



//   return (
//     <div className={styles.container}>
//       <div className={styles.formcontainer}>
//         <h2 className={styles.logintext}>Inicia sesión</h2>
//         <form action="" onSubmit={handleSubmit}>
//           <div className={styles.inputbox}>
//             <label htmlFor="email" className={styles.label}>
//               Mail
//             </label>
//             <input
//               type="text"
//               id="email"
//               name="email"
//               value={form.email}
//               onChange={handleSetForm}
//               // onBlur={validateMail}
//             />
//             {errorMail && (
//               <div className={styles.errormail}>
//                 <p>El campo mail es obligatorio</p>
//               </div>
//             )}
//             {/* {!errorMail && !isValid && (
//               <div className={styles.errormail}>
//                 <p>El mail no es válido</p>
//               </div> */}
//             {/* )} */}
//           </div>
//           <div className={styles.inputbox}>
//             <label htmlFor="password" className={styles.label}>
//               Contraseña
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={form.password}
//               onChange={handleSetForm}
//             />
//             {errorPassword && (
//               <div className={styles.errorpass}>
//                 <p>El campo Contraseña es obligatorio</p>
//               </div>
//             )}
           
//           </div>

//           <div className={styles.forgotcontainer}>
//             <a href="#">olvidé mi contraseña </a>
//           </div>

//           <div className={styles.btncontainer}>
//             <input type="submit" className={styles.btn} value="Login" />
//           </div>

//           <div className={styles.registerlink}>
//             No tienes cuenta?
//             <a href="#">
//               <span> Regístrate! </span>
//             </a>
//           </div>

//           <div className={styles.backbtn}>
//             <a href="#">
//               <FaArrowAltCircleLeft />
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
