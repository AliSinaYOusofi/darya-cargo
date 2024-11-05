import React from 'react';
import ship from "../public/images/cargo.jpg"
import plane from '../public/images/shipping.png'
import containers from '../public/images/container-ship.gif'
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const MissionAndVision = () => {

    useGSAP(() => {
        gsap.from(".title1", {
          opacity: 0,
          y: -150,
          duration: 1,
          scrollTrigger: {
            trigger: ".title1",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });
    
        // Animate the subtitle
        gsap.from(".subtitle1", {
          opacity: 0,
          x: -150,
          duration: 1,
          scrollTrigger: {
            trigger: ".subtitle1",
            
            toggleActions: "play none none reverse", // Control the animation play state
            scrub: true
          },
        });

        gsap.from(".subtitle2", {
          opacity: 0,
          x: 150,
          duration: 1,
          scrollTrigger: {
            trigger: ".subtitle2",
            
            toggleActions: "play none none reverse", // Control the animation play state
            scrub: true
          },
        });
        
    }, []);

    return (
        <section className="relative h-fit mt-20 border-2 border-gray-300 p-10 mx-auto w-[90%] rounded-md flex flex-col justify-center items-center text-center space-y-6">
            <div className=" w-20 absolute -top-8 -right-4 rotate-[45deg]">
                <Image
                    src={containers}
                    alt="Moving Container Ship"
                    width={160}
                    height={160}
                    className="object-contain"
                />
            </div>
            <h1 className="title1 text-3xl md:text-8xl font-bold tracking-wider mb-4 text-black">
                Mission and Vision
            </h1>

            <div className="w-full  max-w-3xl space-y-16 px-4 md:px-8">
                <div className="text-center space-y-4 subtitle1">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-800">Mission</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                        To provide reliable, secure, and professional logistics services from Afghanistan to global
                        destinations, offering a seamless experience for all clients.
                    </p>
                </div>

                <div className="text-center space-y-4 subtitle2">
                    <div className="flex items-center justify-center gap-x-4 ">
                        <h2 className="text-3xl  md:text-5xl font-semibold tracking-tight text-gray-800">Vision</h2>
                        

                    </div>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                        To be Afghanistan’s trusted name in international cargo logistics, known for quality service and
                        customer satisfaction.
                    </p>
                   

                </div>
            </div>
            
        </section>
    );
};

export default MissionAndVision;
