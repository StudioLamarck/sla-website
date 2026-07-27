"use client"

import { useState, useEffect } from "react"
import s from "./v5.module.css"

function Llama({
  k = 1,
  flip = false,
  cls,
}: {
  k?: number
  flip?: boolean
  cls?: string
}) {
  return (
    <g
      className={cls}
      transform={
        flip
          ? `scale(${-k} ${k}) translate(-34 0)`
          : `scale(${k})`
      }
    >
      <rect x="3" y="0" width="2" height="6" />
      <rect x="7" y="0" width="2" height="6" />
      <rect x="0" y="6" width="9" height="4" />
      <rect x="4" y="10" width="5" height="7" />
      <rect x="4" y="17" width="25" height="10" />
      <rect x="29" y="17" width="4" height="6" />
      <rect x="6" y="27" width="4" height="9" />
      <rect x="23" y="27" width="4" height="9" />
    </g>
  )
}

interface LlamaPassenger {
  id: string
  startX: string
  endX: string
  startY: string
  endY: string
  scale: number
  walkDuration: string
  walkDelay: string
  flip: boolean
}

export default function LlamaDispersal() {
  const [mounted, setMounted] = useState(false)
  const [llamas, setLlamas] = useState<LlamaPassenger[]>([])

  useEffect(() => {
    setMounted(true)
    const generateLlamas = () => {
      const carDoorOffsets = [-190, 0, 190] // Emplacement des portes des 3 rames (en px)
      const newLlamas: LlamaPassenger[] = []

      carDoorOffsets.forEach((carX, carIndex) => {
        // Nombre aléatoire de lamas entre 1 et 5 par rame
        const count = Math.floor(Math.random() * 5) + 1

        for (let i = 0; i < count; i++) {
          const isGoingLeft = Math.random() > 0.5
          const directionFactor = isGoingLeft ? -1 : 1

          // Vitesse de marche (entre 7s et 11s)
          const durationSec = 7.5 + Math.random() * 3.5
          // Décalage pour créer une file indienne naturelle (step-out delay)
          const delaySec = 4.2 + i * 0.4 + Math.random() * 0.25

          // Position X de départ à la porte de la rame
          const startPosPx = carX + (Math.random() * 12 - 6)
          // Destination X finale : très loin pour sortir 100% hors de l'écran (1000px à 1400px du centre)
          const endPosPx = startPosPx + directionFactor * (1100 + Math.random() * 400)

          // Profondeur verticale Y décalée pour éviter les superpositions (entre 10px et 55px)
          const startYPx = 4 + Math.random() * 6
          const endYPx = 15 + Math.random() * 45

          // Échelle selon la profondeur Y (perspective : plus c'est bas, plus c'est grand)
          const scale = 0.75 + (endYPx / 55) * 0.35

          newLlamas.push({
            id: `llama-${carIndex}-${i}-${Date.now()}`,
            startX: `${startPosPx}px`,
            endX: `${endPosPx}px`,
            startY: `${startYPx}px`,
            endY: `${endYPx}px`,
            scale,
            walkDuration: `${durationSec.toFixed(2)}s`,
            walkDelay: `${delaySec.toFixed(2)}s`,
            flip: !isGoingLeft, // Orienté vers sa direction de marche
          })
        }
      })

      setLlamas(newLlamas)
    }

    generateLlamas()
    const interval = setInterval(generateLlamas, 22000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return <div className={s.platformArea} />
  }

  return (
    <div className={s.platformArea}>
      {llamas.map((l) => (
        <div
          key={l.id}
          className={s.walkingLlama}
          style={
            {
              "--start-x": l.startX,
              "--end-x": l.endX,
              "--start-y": l.startY,
              "--end-y": l.endY,
              "--llama-scale": l.scale,
              "--walk-duration": l.walkDuration,
              "--walk-delay": l.walkDelay,
              left: "50%",
              zIndex: Math.floor(l.scale * 100), // Tri selon la profondeur
            } as React.CSSProperties
          }
        >
          <svg viewBox="0 0 34 36">
            <Llama flip={l.flip} />
          </svg>
        </div>
      ))}
    </div>
  )
}
