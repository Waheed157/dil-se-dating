export default function Home() {
  return (
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

}
