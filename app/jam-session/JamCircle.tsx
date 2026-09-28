"use client"

import { useEffect, useState, useCallback } from "react"
import s from "./jam-session.module.css"

const LLAMA_PATH =
  "M17.25,61.5l31.5,-2.25l0,-59.25l23.25,0l0,57.75l23.25,-1.5l0,-56.25l23.25,0l0,157.5c0,0 1.575,19.367 20.25,19.5c18.675,0.133 196.5,0 196.5,0c0,0 31.721,-1.9 31.5,31.5c-0.221,33.4 0,22.5 0,22.5l-23.25,0l0,-21c0,0 0.726,-9.334 -9.75,-9.75c-10.476,-0.416 -24.75,0 -24.75,0l0,183.75l-39.75,0l0,-95.25l-146.25,0l0,95.25l-39.75,0l0,-95.25c0,0 -23.211,-0.576 -23.25,-20.25c-0.039,-19.674 0,-168 0,-168l-42.75,0l0,-39Z"

type TalkStyle = "excited" | "emphatic" | "chatter" | "bouncy"
type BubbleContent = "dots" | "idea" | "exclaim" | "chat"

interface ActiveSpeakerState {
  style: TalkStyle
  content: BubbleContent
}

interface LlamaParticipant {
  id: number
  x: number
  y: number
  k: number
  flip: boolean
  bubbleX: number
  bubbleY: number
}

// 7 lamas parfaitement centrés dans le cadre (marges égales gauche/droite et haut/bas)
// Tous tournés vers l'intérieur du cercle pour se regarder
const PARTICIPANTS: LlamaParticipant[] = [
  { id: 0, x: 151.8, y: 56.6, k: 1.05, flip: false, bubbleX: 157.8, bubbleY: 38.6 },
  { id: 1, x: 244.1, y: 89.0, k: 1.07, flip: false, bubbleX: 250.1, bubbleY: 71.0 },
  { id: 2, x: 266.8, y: 161.7, k: 1.11, flip: false, bubbleX: 272.8, bubbleY: 143.7 },
  { id: 3, x: 203.0, y: 220.1, k: 1.15, flip: false, bubbleX: 209.0, bubbleY: 202.1 },
  { id: 4, x: 100.6, y: 220.1, k: 1.15, flip: true, bubbleX: 124.6, bubbleY: 202.1 },
  { id: 5, x: 36.8, y: 161.7, k: 1.11, flip: true, bubbleX: 60.8, bubbleY: 143.7 },
  { id: 6, x: 59.5, y: 89.0, k: 1.07, flip: true, bubbleX: 83.5, bubbleY: 71.0 },
]

const STYLES: TalkStyle[] = ["excited", "emphatic", "chatter", "bouncy"]
const CONTENTS: BubbleContent[] = ["dots", "idea", "chat", "exclaim"]

export default function JamCircle() {
  const [activeSpeakers, setActiveSpeakers] = useState<Record<number, ActiveSpeakerState>>({
    0: { style: "excited", content: "dots" },
    3: { style: "bouncy", content: "idea" },
  })

  const pickRandom = useCallback(<T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)]
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const tick = () => {
      // 1 ou 2 lamas discutent en alternance vive (ping-pong)
      const count = Math.random() < 0.65 ? 2 : 1
      const ids = [0, 1, 2, 3, 4, 5, 6]
      ids.sort(() => Math.random() - 0.5)
      const chosen = ids.slice(0, count)

      const next: Record<number, ActiveSpeakerState> = {}
      chosen.forEach((id, idx) => {
        next[id] = {
          style: pickRandom(STYLES),
          content: idx === 0 ? "dots" : pickRandom(CONTENTS),
        }
      })

      setActiveSpeakers(next)

      const nextDelay = 1100 + Math.random() * 1100
      timeoutId = setTimeout(tick, nextDelay)
    }

    const initialTimer = setTimeout(tick, 800)
    return () => {
      clearTimeout(initialTimer)
      clearTimeout(timeoutId)
    }
  }, [pickRandom])

  const handleLlamaClick = (id: number) => {
    setActiveSpeakers((prev) => ({
      ...prev,
      [id]: {
        style: pickRandom(STYLES),
        content: pickRandom(CONTENTS),
      },
    }))
  }

  const getAnimationClass = (style: TalkStyle) => {
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
      aria-label="Illustration animée : 7 lamas centrés en cercle lors d'une Jam Session"
    >
      <svg
        className={s.jamIllusSvg}
        viewBox="0 0 340 290"
        role="img"
        aria-hidden="true"
      >
        {PARTICIPANTS.map((p) => {
          const speakerInfo = activeSpeakers[p.id]
          const isSpeaker = Boolean(speakerInfo)
          const scale = 0.09375 * p.k

          return (
            <g
              key={p.id}
              className={s.jamLlamaNode}
              onClick={() => handleLlamaClick(p.id)}
              style={{ cursor: "pointer" }}
            >
              {/* Corps animé du lama */}
              <g className={isSpeaker ? getAnimationClass(speakerInfo.style) : ""}>
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

              {/* Bulles de parole animées et variées */}
              {isSpeaker && (
                <g transform={`translate(${p.bubbleX} ${p.bubbleY})`}>
                  <g className={s.speechBubbleAnim}>
                    <path
                      d="M -4.5,-9 h 9 a 6,6 0 0 1 6,6 a 6,6 0 0 1 -6,6 h -2.8 l -1.7,2.8 l -1.7,-2.8 h -2.8 a 6,6 0 0 1 -6,-6 a 6,6 0 0 1 6,-6 z"
                      fill="#ffffff"
                      stroke="#111613"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    {speakerInfo.content === "dots" && (
                      <>
                        <circle cx="-4.5" cy="-3" r="1.15" className={s.bubbleDot1} />
                        <circle cx="0" cy="-3" r="1.15" className={s.bubbleDot2} />
                        <circle cx="4.5" cy="-3" r="1.15" className={s.bubbleDot3} />
                      </>
                    )}
                    {speakerInfo.content === "idea" && (
                      <path
                        d="M -3,-5 h 6 M 0,-7 v -1.2 M -2.2,-2 h 4.4 M -1.2,-0.5 h 2.4"
                        stroke="#008751"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    )}
                    {speakerInfo.content === "exclaim" && (
                      <path
                        d="M 0,-6.5 v 3.5 M 0,-1 v 0.5"
                        stroke="#008751"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    )}
                    {speakerInfo.content === "chat" && (
                      <>
                        <circle cx="-4" cy="-3" r="1.1" fill="#008751" />
                        <circle cx="0" cy="-3" r="1.1" fill="#111613" />
                        <circle cx="4" cy="-3" r="1.1" fill="#008751" />
                      </>
                    )}
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
