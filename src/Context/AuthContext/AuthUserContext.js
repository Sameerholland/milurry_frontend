import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { createContext, useContext } from "react";
import { auth } from "./Firebase";

const authusercontext = createContext();

export function AuthUserContextProvider({ children }) {
  function reCaptcha(number){
    console.log(number)
    const recaptchaVerifier = new RecaptchaVerifier(
      auth, 
      "recaptcha-contanier",
      {}
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth,number,recaptchaVerifier);
  }
  return (
   <authusercontext.Provider value={{reCaptcha}}>
      {children}
   </authusercontext.Provider>
  )
}

export function useAuthContext(){
   return useContext(authusercontext);
}