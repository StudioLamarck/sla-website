/** Glyphe officiel du lama (charte v1.0), sur grille d'entiers. */
const GLYPH_PATH =
  "M0 9.129L4.676 8.795L4.676 0L8.127 0L8.127 8.572L11.58 8.35L11.58 0L15.03 0L15.03 23.38C15.03 23.38 15.26 26.25 18.04 26.27C20.81 26.29 47.2 26.27 47.2 26.27C47.2 26.27 51.91 25.99 51.88 30.95C51.85 35.91 51.88 34.29 51.88 34.29L48.43 34.29L48.43 31.17C48.43 31.17 48.54 29.79 46.98 29.72C45.43 29.66 43.31 29.72 43.31 29.72L43.31 57L37.41 57L37.41 42.86L15.7 42.86L15.7 57L9.797 57L9.797 42.86C9.797 42.86 6.351 42.78 6.346 39.86C6.34 36.94 6.346 14.92 6.346 14.92L0 14.92L0 9.129Z"

export function LlamaGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 51.879 57" aria-hidden="true">
      <path d={GLYPH_PATH} />
    </svg>
  )
}

/** Logo horizontal : lama + « Studio Lamarck », couleur héritée (blanc sur fond vert). */
export default function Logo() {
  return (
    <span className="lockup">
      <LlamaGlyph className="lockup-glyph" />
      <span>Studio Lamarck</span>
    </span>
  )
}
