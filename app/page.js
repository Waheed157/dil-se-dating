"use client"
import { useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";


export default function Home() {
  useEffect(() => {
    console.log("Page load ho gaya Waheed bhai");
  }, []);

  const handleLogin = () => {
    alert("Button dab gaya!");
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => alert("LOGIN HO GAYA!"))
      .catch((error) => alert("Error: " + error.message));
  };

  return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
      <h1>Dil Se Dating</h1>
      <button onClick={handleLogin} style={{padding: '20px', fontSize: '20px'}}>
        Shuru Karein
      </button>
    </div>
  );
}
