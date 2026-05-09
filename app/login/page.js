import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-red-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Dil Se Dating ❤️
        </h1>
        <h2 className="text-xl text-center text-gray-700 mb-8">
          Account Mein Login Karein
        </h2>

        <input 
          type="email"
          placeholder="Email Daalein"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />

        <input 
          type="password"
          placeholder="Password Daalein"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
        />

        <Link href="/dashboard">
          <button className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg hover:bg-pink-700 transition duration-300">
            Login Karein
          </button>
        </Link>

        <p className="text-center text-gray-600 mt-6">
          Naya Account Banayein
        </p>
      </div>
    </div>
  )
}