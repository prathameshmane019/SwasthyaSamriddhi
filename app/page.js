"use client"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/login');
  };

  const handleLearnMoreClick = () => {
    router.push('/about');
  };

  const handleContactClick = () => {
    router.push('/contact');
  };
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to SecureHealth Management
        </h1>
        <p className="mt-3 text-xl">
          Your Privacy, Our Promise
        </p>

        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3">
          <button onClick={handleSignUpClick} className="card cursor-pointer">
            <h3 className="text-2xl font-semibold">Sign Up Now &rarr;</h3>
            <p>Take control of your health journey today.</p>
          </button>

          <button onClick={handleLearnMoreClick} className="card cursor-pointer">
            <h3 className="text-2xl font-semibold">Learn More &rarr;</h3>
            <p>Discover the benefits of SecureHealth Management.</p>
          </button>

          <button onClick={handleContactClick} className="card cursor-pointer">
            <h3 className="text-2xl font-semibold">Contact Us &rarr;</h3>
            <p>Have questions? Reach out to us.</p>
          </button>
        </div>
      </main>

      // <footer className="w-full h-24 flex justify-center items-center border-t">
      //   <p>© {new Date().getFullYear()} SecureHealth Management. All rights reserved.</p>
      // </footer>
    // </div>
  );
}
