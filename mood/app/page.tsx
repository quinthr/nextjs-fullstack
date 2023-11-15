import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
        <div className="w-full max-w-[600px]">
          <h1 className="text-6xl mb-4">The best journal ever</h1>
          <p className="text-2xl text-white/60 mb-4">
            This is the best app for tracking your thoughts.
          </p>
          <div>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}