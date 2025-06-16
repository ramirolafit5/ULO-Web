"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function WorkingNotice() {
    const containerRef = useRef(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            containerRef.current.style.visibility = "visible"

            const { words } = splitText(
                containerRef.current.querySelector("h1")
            )

            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0.3,
                    delay: stagger(0.20),
                }
            )
        })
    }, [])

    return (
        <div className="notice-container" ref={containerRef}>
            <h1 className="notice-text">
                ¡Estamos construyendo esta sección! Pronto tendrás novedades.
            </h1>
            <Style />
        </div>
    )
}

function Style() {
    return (
        <style>{`
            .notice-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 2rem;
                text-align: center;
                visibility: hidden;
            }

            .notice-text {
                font-family: 'Nunito', sans-serif;
                font-size: 1.5rem;
                font-weight: bold;
                line-height: 1.4;
            }

            .split-word {
                will-change: transform, opacity;
                display: inline-block;
                margin-right: 0.2ch;
            }
        `}</style>
    )
}
