export const Pattern = ({pattern, colors, rotate, stroke, width, height}) => {
  const color = idx => colors ? colors[idx].color : '#FFFFFF'
  const rot = (rotate || 0) * 90

  return (
    <svg width={width || 96} height={height || 96} viewBox="0 0 436 436" xmlns="http://www.w3.org/2000/svg">
      <g transform={`rotate(${rot}, 218, 218)`}>
        {pattern.d.map((path, idx) => (
          <path key={idx} d={path} fill={color(idx)} stroke="#575756" strokeWidth={stroke || 4}/>
        ))}
      </g>
    </svg>
  )
}
