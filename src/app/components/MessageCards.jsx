"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Mail, Heart, Star, Gift, Sparkles, ArrowRight } from "lucide-react"
import { messages, NAME } from "@/data"

export default function MessageCards({ onNext }) {
    const [revealedCards, setRevealedCards] = useState([])
    const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

    const icons = [Heart, Star, Gift, Sparkles];

    const handleEnvelopeClick = () => {
        if (revealedCards.length === 0) {
            setIsEnvelopeOpen(true)
        }

        if (revealedCards.length < messages.length) {
            const nextCardIndex = revealedCards.length
            setRevealedCards((prev) => [...prev, nextCardIndex])
        } else {
            setRevealedCards([])
            setIsEnvelopeOpen(false)
        }
    }

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
        >
            {/* Overlay when cards are revealed */}
            <AnimatePresence>
                {revealedCards.length > 0 && (
                    <motion.div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>

            <motion.div
                className="text-center mb-8 relative"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <motion.div
                    className="my-6"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <Mail className="w-16 h-16 text-pink-400 mx-auto" />
                </motion.div>

                <h1 className="text-4xl md:text-6xl py-1.5 md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4">
                    Special Messages
                </h1>
                <p className="text-xl text-purple-300">For {NAME} 💌</p>
            </motion.div>

            {/* Envelope*/}
            <div className="flex flex-col items-center justify-end min-h-[450px] w-full max-w-4xl relative">
                <motion.div
                    className="relative cursor-pointer z-20 mb-10 will-change-transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEnvelopeClick}
                >
                    <div className="w-72 h-48 bg-gradient-to-br from-rose-200 to-pink-200 rounded-xl shadow-2xl border-2 border-rose-300 relative overflow-hidden">
                        <motion.div
                            className="absolute z-10 top-0 left-0 w-full h-20 bg-gradient-to-br from-rose-300 to-pink-300 origin-top"
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                            }}
                            animate={isEnvelopeOpen ? { rotateX: -160 } : { rotateX: 0 }}
                            transition={{ duration: 0.8 }}
                        />

                        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-br from-rose-100 to-pink-100" />

                        <div className="absolute z-20 top-4 left-1/2 transform -translate-x-1/2">
                            <Heart className="w-8 h-8 text-red-500 fill-current" />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-rose-700 font-semibold text-sm">
                                    {revealedCards.length === 0
                                        ? "Tap to open your first message"
                                        : revealedCards.length < messages.length
                                            ? `${messages.length - revealedCards.length} messages remaining`
                                            : "All messages opened. Tap to reset"}
                                </p>
                            </div>
                        </div>

                        <div className="absolute bottom-2 left-2">
                            <Sparkles className="w-4 h-4 text-yellow-500" />
                        </div>
                        <div className="absolute bottom-2 right-2">
                            <Sparkles className="w-4 h-4 text-yellow-500" />
                        </div>
                    </div>
                </motion.div>

                {/* Card Stack */}
                <div className="absolute top-10 left-[45%] md:left-[48%] transform -translate-y-1/2 z-30">
                    <AnimatePresence>
                        {revealedCards.map((cardIndex, stackIndex) => {
                            const message = messages[cardIndex]
                            const IconComponent = icons[cardIndex % icons.length];

                            return (
                                <motion.div
                                    key={message.id}
                                    className="absolute will-change-transform"
                                    style={{
                                        left: `${stackIndex * 8 - 80}px`, // Center horizontally
                                        top: `${stackIndex * -3}px`,
                                        transformPerspective: "1000px",
                                    }}
                                    initial={{
                                        y: 40,
                                        opacity: 0,
                                        rotate: 0,
                                        scale: 0.5,
                                    }}
                                    animate={{
                                        y: -80 - stackIndex * 12,
                                        opacity: 1,
                                        rotate: stackIndex * 2 - 4,
                                        scale: 1,
                                    }}
                                    exit={{
                                        y: 40,
                                        opacity: 0,
                                        rotate: 0,
                                        scale: 0.8,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: stackIndex * 0.1,
                                        type: "tween",
                                        stiffness: 150,
                                    }}
                                >
                                    <div
                                        className={`w-48 h-56 bg-gradient-to-br ${message.color} rounded-xl p-4 shadow-xl border border-white/20 relative overflow-hidden`}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: stackIndex * 0.5,
                                            }}
                                        />

                                        <div className="relative z-10 h-full flex flex-col">
                                            <div className="text-center">
                                                {message.showIcon && <IconComponent className="w-6 h-6 text-white mx-auto mb-2" />}
                                                <h3 className="text-white font-bold text-base">{message.title && message.title}</h3>
                                            </div>

                                            <div className="flex-1 flex items-center">
                                                <p className="text-white text-center text-sm leading-relaxed">{message.message}</p>
                                            </div>

                                            <div className="absolute top-2 right-2">
                                                <motion.div
                                                    animate={{ rotate: [0, 360] }}
                                                    transition={{
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        delay: stackIndex * 0.3,
                                                    }}
                                                >
                                                    <Sparkles className="w-3 h-3 text-yellow-300" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* button at bottom */}
            <motion.div
                className="relative pb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white text-lg px-8 py-4 rounded-full shadow-xl border-2 border-white/70 transition-all duration-300 hover:scale-[103%] font-medium"
                >
                    <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }}>
                        <span>Next</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </button>
            </motion.div>
        </motion.div>
    )
}
