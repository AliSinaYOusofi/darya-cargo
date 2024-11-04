import React from 'react';

const AnimatedText = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b  relative overflow-hidden">
            <div className="loader text-center f">
                <h1 className="text-6xl md:text-[10em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-text">
                    Darya Cargo
                </h1>

            </div>

            <div className=" mt-10 flex items-center justify-center">
                {['Reliable', 'Global', 'Logistics', 'Solutions'].map((item, index) => (
                    <h2 
                        key={index} 
                        className="text-2xl md:mx-5 mx-2 md:text-6xl font-semibold text-white"
                    >
                        {item}
                    </h2>
                ))}
            </div>
        </section>
    );
};

export default AnimatedText;
