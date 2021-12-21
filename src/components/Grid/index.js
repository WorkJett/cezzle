import {useSt} from 'state/context'

const get_url = url => `${process.env.PUBLIC_URL}${url}`

const Image = ({id, url}) => {
  return (
    <pattern id={id} viewBox="0 0 311 311" width="100%" height="100%">
      <image href={get_url(url)} width="311" height="311" />
    </pattern>
  )
}

const Pattern = ({id, pattern, colors, rotate}) => {
  const get_color = idx => colors ? `url(#image_${idx})` : '#FFFFFF'
  const get_rotate = (rotate || 0) * 90

  return (
    <pattern id={id} viewBox="0 0 436 436" width="100%" height="100%">
      {colors && (
        <defs>
          {colors.map((color, idx) => (
            <Image key={`image_${idx}`} id={`image_${idx}`} url={color.url} />
          ))}
        </defs>
      )}
      <g transform={`rotate(${get_rotate}, 218, 218)`}>
        {pattern.d.map((path, idx) => (
          <path key={idx} d={path} fill={get_color(idx)} stroke="#575756" strokeWidth={4}/>
        ))}
      </g>
    </pattern>
  )
}

export const Grid = ({tile, shape}) => {
  const {state, setState} = useSt()

  const rect_click = (col, row) => {
    return () => {
      if(tile === null) return
      const st = {...state}
      const {map} = st[shape]
      const idx = row * 6 + col
      map[idx] = tile
      setState(st)
    }
  }

  const get_fill = (col, row) => {
    const idx = row * 6 + col
    const st = {...state}
    const {map} = st[shape]
    if(map[idx] === null) return '#FFFFFF'
    return `url(#tile_${map[idx]})`
  }

  return (
    <svg width="436" height="436" viewBox="0 0 436 436" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {state[shape].tiles.map((tile, idx) => (
          <Pattern
            id={`tile_${idx}`}
            pattern={tile.pattern}
            colors={tile.colors}
            rotate={tile.rotate}
          />
        ))}
      </defs>
      {new Array(6).fill(null).map((row, row_idx) => (
        <>
        {new Array(6).fill(null).map((col, col_idx) => (
          <rect x={col_idx * 72 + 1} y={row_idx * 72 + 1} width="72" height="72" stroke="#575756" stroke-width="1" fill={get_fill(col_idx, row_idx)} onClick={rect_click(col_idx, row_idx)} />
        ))}
        </>
      ))}
    </svg>
  )
}
