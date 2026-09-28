"use client"

import { useEffect, useState, useCallback } from "react"
import s from "./page.module.css"

const LLAMA_PATH =
  "M17.25,61.5l31.5,-2.25l0,-59.25l23.25,0l0,57.75l23.25,-1.5l0,-56.25l23.25,0l0,157.5c0,0 1.575,19.367 20.25,19.5c18.675,0.133 196.5,0 196.5,0c0,0 31.721,-1.9 31.5,31.5c-0.221,33.4 0,22.5 0,22.5l-23.25,0l0,-21c0,0 0.726,-9.334 -9.75,-9.75c-10.476,-0.416 -24.75,0 -24.75,0l0,183.75l-39.75,0l0,-95.25l-146.25,0l0,95.25l-39.75,0l0,-95.25c0,0 -23.211,-0.576 -23.25,-20.25c-0.039,-19.674 0,-168 0,-168l-42.75,0l0,-39Z"

type TalkStyle = "excited" | "emphatic" | "chatter" | "bouncy"
const STYLES: TalkStyle[] = ["excited", "emphatic", "chatter", "bouncy"]

interface LlamaParticipant {
  id: number
  x: number
  y: number
  k: number
  flip: boolean
  bubbleX: number
  bubbleY: number
}

const PARTICIPANTS: LlamaParticipant[] = [
  {
    id: 0,
    x: 118.0,
    y: 48.0,
    k: 0.8,
    flip: false,
    bubbleX: 123.0,
    bubbleY: 35.0,
  },
  {
    id: 1,
    x: 182.0,
    y: 92.0,
    k: 0.8,
    flip: false,
    bubbleX: 187.0,
    bubbleY: 79.0,
  },
  {
    id: 2,
    x: 160.0,
    y: 156.0,
    k: 0.85,
    flip: false,
    bubbleX: 165.2,
    bubbleY: 143.0,
  },
  {
    id: 3,
    x: 95.0,
    y: 156.0,
    k: 0.85,
    flip: true,
    bubbleX: 117.7,
    bubbleY: 143.0,
  },
  {
    id: 4,
    x: 72.0,
    y: 92.0,
    k: 0.8,
    flip: true,
    bubbleX: 93.3,
    bubbleY: 79.0,
  },
]

export default function JamCircle() {
  const [activeSpeaker, setActiveSpeaker] = useState<number>(0)
  const [talkStyle, setTalkStyle] = useState<TalkStyle>("excited")
  const [isTalking, setIsTalking] = useState<boolean>(true)

  const pickRandomSpeaker = useCallback((current: number) => {
    const candidates = [0, 1, 2, 3, 4].filter((idx) => idx !== current)
    return candidates[Math.floor(Math.random() * candidates.length)]
  }, [])

  const pickRandomStyle = useCallback(() => {
    return STYLES[Math.floor(Math.random() * STYLES.length)]
  }, [])

  const pickRandomDuration = useCallback(() => {
    const roll = Math.random()
    if (roll < 0.28) {
      // Petite phrase courte / réplique rapide (850ms - 1400ms)
      return 850 + Math.random() * 550
    } else if (roll < 0.72) {
      // Phrase de longueur moyenne (2000ms - 3400ms)
      return 2000 + Math.random() * 1400
    } else {
      // Longue intervention / exposé passionné (4200ms - 6200ms)
      return 4200 + Math.random() * 2000
    }
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const cycle = () => {
      const duration = pickRandomDuration()
      setIsTalking(true)

      timeoutId = setTimeout(() => {
        setIsTalking(false)
        // Micro-pause naturelle entre les répliques (250ms à 600ms)
        const pause = 250 + Math.random() * 350
        timeoutId = setTimeout(() => {
          setActiveSpeaker((prev) => pickRandomSpeaker(prev))
          setTalkStyle(pickRandomStyle())
          setIsTalking(true)
          cycle()
        }, pause)
      }, duration)
    }

    cycle()
    return () => clearTimeout(timeoutId)
  }, [pickRandomSpeaker, pickRandomStyle, pickRandomDuration])

  const handleLlamaClick = (id: number) => {
    setActiveSpeaker(id)
    setTalkStyle(pickRandomStyle())
    setIsTalking(true)
  }

  const getSpeakerAnimationClass = (style: TalkStyle) => {
    switch (style) {
      case "excited":
        return s.speakerExcited
      case "emphatic":
        return s.speakerEmphatic
      case "chatter":
        return s.speakerChatter
      case "bouncy":
        return s.speakerBouncy
      default:
        return s.speakerExcited
    }
  }

  return (
    <div
      className={s.jamIllusWrapper}
      aria-label="Illustration : lamas qui échangent en cercle"
    >
      <svg
        className={s.jamIllusSvg}
        viewBox="0 0 260 220"
        role="img"
        aria-hidden="true"
      >
        {PARTICIPANTS.map((p) => {
          const isSpeaker = activeSpeaker === p.id && isTalking
          const scale = 0.09375 * p.k

          return (
            <g
              key={p.id}
              className={s.jamLlamaNode}
              onClick={() => handleLlamaClick(p.id)}
              style={{ cursor: "pointer" }}
            >
              {/* Animation de parole cartoon du lama */}
              <g className={isSpeaker ? getSpeakerAnimationClass(talkStyle) : ""}>
                <g
                  transform={
                    p.flip
                      ? `translate(${p.x} ${p.y}) scale(${-scale} ${scale}) translate(-366.75 0)`
                      : `translate(${p.x} ${p.y}) scale(${scale}) translate(-17.25 0)`
                  }
                  className={isSpeaker ? s.speakerLlama : s.listenerLlama}
                >
                  <path d={LLAMA_PATH} />
                </g>
              </g>

              {/* Bulle de parole cartoon : contour noir, fond blanc, points ondulants noir/vert */}
              {isSpeaker && (
                <g transform={`translate(${p.bubbleX} ${p.bubbleY})`}>
                  <g className={s.speechBubbleAnim}>
                    <path
                      d="M -4,-8 h 8 a 5.5,5.5 0 0 1 5.5,5.5 a 5.5,5.5 0 0 1 -5.5,5.5 h -2.5 l -1.5,2.4 l -1.5,-2.4 h -2.5 a 5.5,5.5 0 0 1 -5.5,-5.5 a 5.5,5.5 0 0 1 5.5,-5.5 z"
                      fill="#ffffff"
                      stroke="#111613"
                      strokeWidth="1.15"
                      strokeLinejoin="round"
                    />
                    <circle cx="-4" cy="-2.5" r="1.05" className={s.bubbleDot1} />
                    <circle cx="0" cy="-2.5" r="1.05" className={s.bubbleDot2} />
                    <circle cx="4" cy="-2.5" r="1.05" className={s.bubbleDot3} />
                  </g>
                </g>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
