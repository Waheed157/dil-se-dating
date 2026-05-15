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
<<<<<<< HEAD
    <div style={{textAlign: 'center', marginTop: '100px'}}>
      <h1>Dil Se Dating</h1>
      <button onClick={handleLogin} style={{padding: '20px', fontSize: '20px'}}>
        Shuru Karein
      </button>
    </div>
  );
=======
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Dil Se Dating ❤️
        </h1>
        <p className="text-2xl text-white mb-8">
          Jahan Dil Milte Hain
        </p>
        <button className="bg-white text-pink-600 font-bold py-3 px-8 rounded-full text-xl hover:bg-pink-100">
          Shuru Karein
        </button>
      </div>
    </main>
  )
}"use client";

import { useRouter } from "next/navigation";

export default function Home() {

const router = useRouter();

return (

<div>

<h1>Dil Se Dating</h1>

<button
onClick={() => router.push("/login")}


Shuru Karein

</button>

</div>

);

>>>>>>> 975d86d (Fix firebase import path)
}
