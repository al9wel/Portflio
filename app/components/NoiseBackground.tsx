"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "motion/react";

interface NoiseBackgroundProps {
    animate?: boolean;
    noiseIntensity?: number;
    className?: string;
    children?: React.ReactNode;
}

function NoiseBackground({
    animate = true,
    noiseIntensity = 0.08,
    className = "",
    children
}: NoiseBackgroundProps) {
    const controls = useAnimationControls();
    const isMounted = useRef(false);
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []); 

    useEffect(() => {
        const animateRandomly = async () => {
            if (!isMounted.current || !animate) {
                return;
            }
            const randomX1 = -15 + Math.random() * 30;
            const randomX2 = -15 + Math.random() * 30;
            const randomX3 = -15 + Math.random() * 30;
            const randomY1 = -21 + Math.random() * 42;
            const randomY2 = -21 + Math.random() * 42;
            const randomY3 = -21 + Math.random() * 42;
            try {
                await controls.start({
                    transform: [
                        "translateX(0%) translateY(0%) translateZ(0px)",
                        `translateX(${randomX1}%) translateY(${randomY1}%) translateZ(0px)`,
                        `translateX(${randomX2}%) translateY(${randomY2}%) translateZ(0px)`,
                        `translateX(${randomX3}%) translateY(${randomY3}%) translateZ(0px)`,
                        "translateX(0%) translateY(0%) translateZ(0px)"
                    ],
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut",
                        times: [0, 0.25, 0.5, 0.75, 1]
                    }
                });

                if (isMounted.current && animate) {
                    animationFrameId.current = requestAnimationFrame(animateRandomly);
                }
            } catch (error) {
                console.error("Animation failed to start or was interrupted:", error);
                if (isMounted.current && animate) {
                    animationFrameId.current = requestAnimationFrame(animateRandomly);
                }
            }
        };
        if (animate) {
            const timeoutId = setTimeout(() => {
                if (isMounted.current) { 
                    animateRandomly();
                }
            }, 0);
            return () => {
                clearTimeout(timeoutId); 
                if (animationFrameId.current) {
                    cancelAnimationFrame(animationFrameId.current);
                }
                controls.stop();
            };
        } else {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            controls.stop();
        }
    }, [animate, controls]); 

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <motion.div
                className="absolute inset-[-200%] w-[400%] h-[400%] pointer-events-none"
                animate={controls} // Link controls to this motion component
                style={{
                    opacity: noiseIntensity,
                    background: "url('/images/noise.png')",
                    backgroundRepeat: "repeat",
                }}
            />
            <div className="relative z-[1] w-full h-full">
                {children}
            </div>
        </div>
    );
}

export default NoiseBackground;