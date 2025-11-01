
import { motion, Transition } from "framer-motion";
import { Oswald } from "next/font/google";
const michroma = Oswald({ subsets: ["latin"], weight: "600" });

const HeroText = () => {
    const wordsLarge = "Frontend Developer".split("");
    const wordsSmall1 = "Frontend".split("");
    const wordsSmall2 = "Developer".split("");
    const renderLetters = (letters: string[], transition: Transition) => {
        const middleIndex = Math.floor(letters.length / 2);
        return letters.map((char, i) => {
            const distanceFromCenter = Math.abs(i - middleIndex);
            const delay = distanceFromCenter * 0.07;
            return (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: -160, rotateX: 55, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    transition={{ ...transition, delay }}
                    whileHover={{
                        y: -8,
                        color: "#d7bd78",
                        textShadow: "0px 0px 15px #d7bd78",
                        transition: { type: "spring", stiffness: 280 },
                    }}
                    className="inline-block mx-0.5 cursor-crosshair"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            );
        });
    };
    return (
        <div className={`uppercase mt-25 lg:mt-10 xl:mt-5 ${michroma.className} text-center flex flex-col justify-center items-center text-color1`}>
            <div className="hidden md:flex text-[4.8rem] lg:text-[6.7rem] xl:text-[9rem]">
                {renderLetters(wordsLarge, { duration: 1, type: "spring", stiffness: 110, damping: 16 })}
            </div>
            <div className="flex flex-col md:hidden text-6xl sm:text-8xl tracking-wider sm:tracking-widest gap-0">
                <div className="flex justify-center">{renderLetters(wordsSmall1, { duration: 1, ease: [0.23, 1, 0.32, 1], })}</div>
                <div className="flex justify-center">{renderLetters(wordsSmall2, { duration: 1.2, ease: [0.23, 1, 0.32, 1], })}</div>
            </div>
        </div>
    );
};

export default HeroText;
