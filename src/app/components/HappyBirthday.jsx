"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import confetti from "canvas-confetti"
import { useEffect, useState } from "react"
import { NAME } from "@/data"

export default function HappyBirthday({ onNext }) {
    const [showRisingBalloons, setShowRisingBalloons] = useState(false)
    const [balloonCount, setBalloonCount] = useState(7);

    useEffect(() => {
        const interval = setInterval(() => {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.8 },
                colors: ["#ff69b4", "#ff1493", "#9370db"],
            })
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.8 },
                colors: ["#ff69b4", "#ff1493", "#9370db"],
            })
        }, 1500)

        setTimeout(() => {
            clearInterval(interval); // stop confetti after 6 seconds
        }, 6000)

        const balloonTimer = setTimeout(() => {
            setShowRisingBalloons(true)
        }, 1000)

        return () => {
            clearTimeout(balloonTimer)
        }
    }, [])

    useEffect(() => {
        const updateBalloonCount = () => {
            setBalloonCount(window.innerWidth >= 1024 ? 20 : window.innerWidth >= 768 ? 15 : 7);
        };

        updateBalloonCount();
        window.addEventListener('resize', updateBalloonCount);

        return () => window.removeEventListener('resize', updateBalloonCount);
    }, []);

    // Balloon Component
    const Balloon = ({ color, delay = 0, x = 0, isRising = false }) => {
        return (
            <motion.div
                className="absolute pointer-events-none will-change-transform"
                style={{
                    left: `${x}%`,
                    bottom: isRising ? "-10%" : "-2.5%",
                    zIndex: isRising ? 40 : 5,
                }}
                initial={isRising && {
                    opacity: [0.6]
                }}
                animate={
                    isRising
                        ? {
                            y: [0, -window.innerHeight - 200],
                            x: [-50, (Math.random() * window.innerWidth - 40) - (window.innerWidth - 60) / 2],
                            rotate: [0, -5, 5, 0],
                        }
                        : {
                            y: [0, -15, 0],
                            x: [0, 5, -5, 0],
                            rotate: [0, 3, -3, 0],
                        }
                }
                transition={
                    isRising
                        ? {
                            duration: 14 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 8,
                            ease: "easeOut",
                        }
                        : {
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                        }
                }
            >
                <div className="relative w-[70px] h-[80px]">
                    {/* Balloon shape */}
                    <div
                        className={`w-full h-full bg-gradient-to-b ${color} relative shadow-md`}
                        style={{
                            borderRadius: "75% 75% 80% 80% / 75% 75% 80% 80%",
                        }}
                    >
                        {/* Highlights */}
                        <div className="absolute top-2 left-2 w-3 h-5 bg-white/50 rounded-full blur-[1px]" />
                        <div className="absolute bottom-2 left-3 w-2 h-1 bg-white/30 rounded-full blur-[0.5px]" />
                    </div>

                    {/* Tie */}
                    <div
                        className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[12px] h-[12px] bg-gradient-to-b ${color}`}
                        style={{
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                    />

                    {/* String */}
                    <svg
                        className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2"
                        width="3"
                        height="40"
                        style={{ zIndex: -1 }}
                        viewBox="0 0 3 40"
                    >
                        <path
                            d="M 1.5 0 Q 0.5 5 1.5 10 T 1.5 20 Q 2.5 25 1.5 30 T 1.5 40"
                            stroke="rgba(255,255,255,0.4)"
                            strokeWidth="1.5"
                            fill="none"
                        />
                    </svg>

                </div>

            </motion.div>
        )
    }

    // Cake Component   
    const AnimatedCake = () => (
        <motion.div
            className="relative z-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="relative flex flex-col items-center">

                {/* Candles */}
                <div className="absolute -top-11 left-1/2 -translate-x-1/2 w-[50px] flex justify-between">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="relative">
                            <motion.div
                                className="relative mx-auto"
                                animate={{
                                    scaleY: [1, 1.3, 1],
                                    scaleX: [1, 0.8, 1],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                }}
                            >
                                <div className="w-2 h-3 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full mx-auto" />
                                <motion.div
                                    className="w-3 h-3 bg-yellow-300/50 rounded-full absolute -top-1 -left-0.5 blur-sm"
                                    animate={{
                                        scale: [0.8, 1.2, 0.8],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                    }}
                                />
                            </motion.div>
                            <div className="w-1.5 h-8 bg-gradient-to-b from-yellow-100 to-yellow-300 rounded-sm mx-auto shadow-sm" />
                        </div>
                    ))}
                </div>


                {/* Top layer */}
                <div className="w-20 h-10 bg-gradient-to-b from-purple-200 to-purple-400 rounded-xl relative mx-auto -mt-1 shadow-lg">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-300 to-indigo-400 rounded-t-xl" />
                    {[...Array(2)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-3 w-1.5 h-1.5 bg-pink-100 rounded-full"
                            style={{ left: `${35 + i * 15}%` }}
                        />
                    ))}
                </div>

                {/* Middle layer */}
                <div className="w-28 h-12 bg-gradient-to-b from-pink-200 to-pink-400 rounded-xl relative mx-auto -mt-2 shadow-lg">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-300 to-purple-400 rounded-t-xl" />
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-3 w-1.5 h-1.5 bg-white rounded-full"
                            style={{ left: `${20 + i * 15}%` }}
                        />
                    ))}
                </div>

                {/* Bottom layer */}
                <div className="w-36 h-14 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-xl relative mx-auto -mt-1 shadow-lg">
                    <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-pink-300 to-pink-400 rounded-t-xl" />
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-4 w-2 h-2 bg-red-400 rounded-full"
                            style={{ left: `${15 + i * 12}%` }}
                        />
                    ))}
                </div>

                {/* Cake plate */}
                <div className="w-40 h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-lg" />
            </div>
        </motion.div>
    )

    const balloonColors = [
        "from-red-400 to-red-500",
        "from-blue-400 to-blue-500",
        "from-green-400 to-green-600",
        "from-yellow-400 to-yellow-600",
        "from-purple-400 to-purple-600",
        "from-pink-400 to-pink-600",
    ]

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Static balloons at bottom*/}
            {Array.from({ length: balloonCount }, (_, i) => {
                const colorIndex = i % balloonColors.length;
                const xPosition = (100 / balloonCount) * i;

                return (
                    <motion.div
                        key={`balloon-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}>
                        <Balloon
                            color={balloonColors[colorIndex]}
                            delay={i * 0.2}
                            x={xPosition}
                            isRising={false}
                        />
                    </motion.div>
                );
            })}

            {/* Rising balloons */}
            {showRisingBalloons &&
                [...Array(4)].map((_, i) => (
                    <Balloon
                        key={`rising-${i}`}
                        color={balloonColors[i % balloonColors.length]}
                        delay={i * 2}
                        x={10 + Math.random() * 90}
                        isRising={true}
                    />
                ))}

            <motion.div
                className="text-center mb-8 relative z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}

                transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                }}
            >
                <motion.div layout className="mb-8 will-change-transform">
                    <AnimatedCake />
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl py-1.5   md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4 relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    Happy Birthday!
                </motion.h1>

                <motion.h2
                    className="text-3xl md:text-4xl py-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                >
                    {NAME}<span className="text-white">💝</span>
                </motion.h2>

                <motion.div
                    className="text-xl md:text-2xl text-purple-300 mb-8 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    style={{
                        textShadow: "0 0 10px rgba(0,0,0,0.8)",
                    }}
                >
                    🎉 It's your special day! 🎉
                </motion.div>
            </motion.div>

            <motion.div
                className="relative z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            >
                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white text-xl px-8 py-4 rounded-full shadow-xl border-2 border-white/70 transition-all duration-300 hover:scale-[103%] font-medium"
                >
                    <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }}>
                        <span>Continue the Magic</span>
                        <ArrowRight className="w-6 h-6" />
                    </motion.div>
                </button>
            </motion.div>
        </motion.div>
    )
}
