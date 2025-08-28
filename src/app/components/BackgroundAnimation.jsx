"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart, Sparkles, Star } from "lucide-react"

export default function BackgroundAnimation() {
    const [floatingElements, setFloatingElements] = useState([])

    useEffect(() => {
        const hearts = [...Array(12)].map((_, i) => (
            <motion.div
                key={`heart-${i}`}
                className="absolute"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -40, 0],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: 6 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                }}
            >
                <Heart className="w-4 h-4 text-pink-400/40 fill-current" />
            </motion.div>
        ))

        const sparkles = [...Array(8)].map((_, i) => (
            <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.1, 0.4, 0.1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 8 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                }}
            >
                <Sparkles className="w-3 h-3 text-purple-400/35" />
            </motion.div>
        ))

        const stars = [...Array(6)].map((_, i) => (
            <motion.div
                key={`star-${i}`}
                className="absolute"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -25, 0],
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 7 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                }}
            >
                <Star className="w-3 h-3 text-yellow-400/35 fill-current" />
            </motion.div>
        ))

        setFloatingElements([...hearts, ...sparkles, ...stars])
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingElements}
        </motion.div>
    )
}
