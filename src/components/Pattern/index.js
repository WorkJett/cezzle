const get_url = url => `${process.env.PUBLIC_URL}${url}`

const Image = ({id, url}) => {
  return (
    <pattern id={id} viewBox="0 0 436 436" width="436" height="436" patternUnits="userSpaceOnUse">
      <image href={get_url(url)} width="436" height="436" />
    </pattern>
  )
}

export const Pattern = ({pattern, colors, rotate, stroke, width, height, viewbox}) => {
  const get_color_id = colors ? colors.map(color => color.id).reduce((prev, next) => `${prev}_${next}`) : '0'
  const get_id = idx => `${pattern.id}_${get_color_id}_${idx}`
  const get_color = idx => colors && colors[idx] ? `url(#image_${get_id(idx)})` : '#FFFFFF'
  const get_rotate = (rotate || 0) * 90

  return (
    <svg width={width || 96} height={height || 96} viewBox={viewbox || '0 0 436 436'} xmlns="http://www.w3.org/2000/svg">
      {colors && (
        <defs>
          {colors.map((color, idx) => (
            <>
              {color && (
                <Image key={`image_${idx}`} id={`image_${get_id(idx)}`} url={color.url} />
              )}
            </>
          ))}
        </defs>
      )}
      <g transform={`rotate(${get_rotate}, 218, 218)`}>
        {pattern.d.map((path, idx) => (
          <path key={idx} d={path} fill={get_color(idx)} stroke="#575756" strokeWidth={stroke || 4}/>
        ))}
      </g>
    </svg>
  )
}
