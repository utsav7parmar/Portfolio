import { useState } from 'react'

interface ImageCardProps {
  src: string
  alt: string
  className?: string
}

export default function ImageCard({ src, alt, className }: ImageCardProps) {
  const [visible, setVisible] = useState(true)

  return visible ? (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setVisible(false)}
    />
  ) : null
}
