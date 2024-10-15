import Head from "next/head";

export default function ComingSoon({}) {
    return (

        <>
            <Head>
                <title>Coming Soon - Darya Cargo</title>
                <meta name="description" content="Darya Cargo is working hard to launch our site. Stay tuned for reliable and efficient shipping services!" />
                <meta name="keywords" content="Darya Cargo, shipping, logistics, coming soon, international shipping" />
            </Head>
            
            <div className="flex items-center justify-center min-h-screen bg-green-900 w-[90%] mx-auto rounded-md">
                <div className="rounded-md  p-8 text-white">
                    
                    <h1 className="text-4xl md:text-8xl font-bold text-center ">  Darya Cargo </h1>
                    <h1 className="text-2xl md:text-6xl font-bold text-center ">
                        Coming Soon 
                    </h1>
                    <p className="mt-4 text-center text-gray-300">
                        We are working hard to get our site up and running. Stay tuned!
                    </p>
                </div>
            </div>
        </>
    );
  }
  