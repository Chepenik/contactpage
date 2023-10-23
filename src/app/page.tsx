import Image from 'next/image';
import Link from 'next/link';  // Don't forget to import the Link component if you're using it.
import contactor from '../../public/contactor.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image 
        src={contactor}
        alt="contact logo"
        className="h-auto rounded-lg mb-8"
        width={300}
        height={300}
      />
      <h1 className="text-6xl font-bold mb-4 text-black">Contactooors</h1>
      <br />
      <section className="max-w-3xl text-center text-black">
        <h3 className="text-3xl font-bold mb-4">A page for people looking to contact you!</h3>
        
        <p className="text-xl mb-4">
         Make this the copy for your landing Page
        </p>

        <a href="https://www.x.com" rel="noopener noreferrer" className="flex flex-col items-center">
          <Image 
            src={contactor} 
            alt="Another Image" 
            width={200} 
            height={200} 
            className="h-auto rounded-lg mb-8"
          />
        </a>
        <Link className="px-4 py-2 text-lg font-medium text-white bg-blue-300 rounded hover:bg-green-400 hover:text-gray-600 transition-colors duration-300 ease-in-out" href="/contact">
          <button>
            Contact Page
          </button>
        </Link>
      </section>
    </main>
  );
}
