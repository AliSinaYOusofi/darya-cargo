import React from 'react';

const AnimatedText = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b  relative overflow-hidden">
            <div className="loader text-center f">
                <h1 className="text-4xl md:text-[10em] text-gray-800 font-bold bg-gradient-to-r from-green-200 to-green-400 animate-text">
                    Darya Cargo
                </h1>

            </div>

            <div className=" mt-20 flex items-center justify-center">
                {['Reliable', 'Global', 'Logistics', 'Solutions'].map((item, index) => (
                    <h2 
                        key={index} 
                        className="text-xl md:mx-5 mx-1 md:text-6xl font-semibold text-gray-800"
                    >
                        {item}
                    </h2>
                ))}
            </div>
        </section>
    );
};

export default AnimatedText;
