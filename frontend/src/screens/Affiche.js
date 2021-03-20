import React, { useRef, useState, useCallback } from 'react'
import { useSpring, animated } from 'react-spring/hooks'
 function Affiche({ children, offset, pos, start, end }) {
    const [transform] = useState(() =>
    offset.interpolate({ range: [start, end], output: [100, 0], extrapolate: 'clamp' }).interpolate(s => `translate3d(${s}px,0,0)`),
  )
  const [opacity] = useState(() => offset.interpolate([start, end], [0, 1]))
  return <animated.div style={{ position: 'absolute', left: 0, top: `${pos * 100}vh`, transform, opacity }}>{children}</animated.div>
}
export default Affiche;
