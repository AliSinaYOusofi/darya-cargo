import React, { useEffect } from 'react';
import cargo from '../public/images/cargo.png';
import container from '../public/images/container.png';
import Image from 'next/image';
import truck from '../public/images/truck.jpg';
import receive from '../public/images/receving.jpg';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
    useGSAP(() => {
        // Animate header text
        gsap.from(".header-text", {
            opacity: 0,
            y: -50,
            scale: 0.9,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".header-text",
               
                scrub: true,
                toggleActions: "play pause resume reset",
            },
        });

        // Animate subheading text with stagger
        gsap.from(".subheading-text", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".subheading-text",
               
                scrub: true,
                toggleActions: "play pause resume reset",
            },
        });

        // Animate icons (already added in your code)
        const icons = gsap.utils.toArray(".icon");
        icons.forEach((box) => {
            gsap.from(box, {
                opacity: 0,
                y: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: box,
                    scrub: true,
                    toggleActions: "play pause resume reset",
                },
            });
        });
    }, []);

    return (
        <section className="flex flex-col items-center justify-center h-screen relative text-white mt-20">
            <div className="river">
                <h1 className="header-text text-4xl md:text-9xl text-gray-700 font-extrabold">
                    Darya Cargo
                </h1>
            </div>

            <div className="mt-10 flex river flex-wrap text-gray-500 justify-center">
                {['Reliable', 'Global', 'Logistics', 'Solutions'].map((item, index) => (
                    <h2 
                        key={index} 
                        className="subheading-text text-xl md:mx-6 mx-2 md:text-5xl font-semibold transition-transform transform hover:scale-110"
                    >
                        {item}
                    </h2>
                ))}
            </div>

            <div className="flex items-center flex-wrap justify-center md:gap-x-20 gap-x-14 md:mt-20 mt-10">
                <Image src={container} alt="Container" className="icon md:w-40 md:h-40 w-10 h-10" />
                <Image src={cargo} alt="Cargo" className="icon md:w-40 md:h-40 w-10 h-10" />
                <Image src={truck} alt="Truck" className="icon md:w-44 md:h-40 w-10 h-10" />
                <Image src={receive} alt="Receive" className="icon md:w-40 md:h-40 w-10 h-10" /> 
            </div>
        </section>
    );
};

export default AnimatedText;
