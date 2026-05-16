"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main>
      <div>
        <h1>
          Dil Se Dating ❤️
        </h1>
        <p className="text-2xl text-white mb-8">
          Jahan Dil Milte Hain
        </p>
        <button className="bg-white text-pink-600 font-bold">
          Shuru Karein
        </button>
      </div>
    </main>
  );
}