const get_url = url => `${process.env.PUBLIC_URL}${url}`

const Image = ({id, url}) => {
  return (
    <pattern id={id} viewBox="0 0 311 311" width="100%" height="100%">
      <image href={get_url(url)} width="311" height="311" />
    </pattern>
  )
}

export const Pattern = ({pattern, colors, rotate, stroke, width, height}) => {
  const get_color = idx => colors ? `url(#image_${idx})` : '#FFFFFF'
  const get_rotate = (rotate || 0) * 90

  return (
    <svg width={width || 96} height={height || 96} viewBox="0 0 436 436" xmlns="http://www.w3.org/2000/svg">
      {colors && (
        <defs>
          {colors.map((color, idx) => (
            <Image key={`image_${idx}`} id={`image_${idx}`} url={color.url} />
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
