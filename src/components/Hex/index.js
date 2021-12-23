import {useSt} from 'state/context'

const get_url = url => `${process.env.PUBLIC_URL}${url}`

const Image = ({id, url}) => {
  return (
    <pattern id={id} viewBox="0 0 436 436" width="436" height="436" patternUnits="userSpaceOnUse">
      <image href={get_url(url)} width="436" height="436" />
    </pattern>
  )
}

const Pattern = ({id, pattern, colors, rotate}) => {
  const get_color_id = colors ? colors.map(color => color.id).reduce((prev, next) => `${prev}_${next}`) : '0'
  const get_id = idx => `${pattern.id}_${get_color_id}_${idx}`
  const get_color = idx => colors && colors[idx] ? `url(#image_${get_id(idx)})` : '#FFFFFF'
  const get_rotate = `rotate(${(rotate || 0) * 60}, 218, 189)` 

  return (
    <pattern id={id} viewBox="0 0 436 378" width="100%" height="100%">
      {colors && (
        <defs>
          {colors.map((color, idx) => (
            <Image key={`image_${idx}`} id={`get_id(idx)`} url={color.url} />
          ))}
        </defs>
      )}
      <g transform={get_rotate}>
        {pattern.d.map((path, idx) => (
          <path key={idx} d={path} fill={get_color(idx)} stroke="#575756" strokeWidth={4}/>
        ))}
      </g>
    </pattern>
  )
}

export const Hex = ({tile, shape}) => {
  const {state, setState} = useSt()

  const rect_click = idx => {
    return () => {
      if(tile === null || tile === undefined) return
      const st = {...state}
      const {map} = st[shape]
      map[idx] = tile
      setState(st)
    }
  }

  const get_fill = idx => {
    const st = {...state}
    const {map} = st[shape]
    if(map[idx] === null || map[idx] === undefined) return '#FFFFFF'
    return `url(#tile_${map[idx].id})`
  }

  return (
    <svg width="436" height="436" viewBox="0 0 436 436" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#575756" strokeWidth="1">
      <defs>
        {state[shape].tiles.map((tile, idx) => (
          <Pattern
            id={`tile_${tile.id}`}
            pattern={tile.pattern}
            colors={tile.colors}
            rotate={tile.rotate}
          />
        ))}
      </defs>
      <path d="M 394.44004,88.509404 419.55927,45.390303 394.44004,2.2712399 h -50.23755 l -25.11831,43.1190631 25.11831,43.119101 z" stroke="#575756" strokeWidth="1" fill={get_fill(0)} onClick={rect_click(0)} />
      <path d="M 394.44004,174.75786 419.55927,131.6286 394.44004,88.509496 h -50.23755 l -25.11831,43.119104 25.11831,43.12926 z" stroke="#575756" strokeWidth="1" fill={get_fill(1)} onClick={rect_click(1)}  />
      <path d="m 394.44004,260.99624 25.11923,-43.12926 -25.11923,-43.10912 h -50.23755 l -25.11831,43.10912 25.11831,43.12926 z" stroke="#575756" strokeWidth="1" fill={get_fill(2)} onClick={rect_click(2)}  />
      <path d="m 394.44004,347.23371 25.11923,-43.1192 -25.11923,-43.11918 h -50.23755 l -25.11831,43.11918 25.11831,43.1192 z" stroke="#575756" strokeWidth="1" fill={get_fill(3)} onClick={rect_click(3)}  />
      <path d="m 394.44004,433.47209 25.11923,-43.11919 -25.11923,-43.11919 h -50.23755 l -25.11831,43.11919 25.11831,43.11919 z" stroke="#575756" strokeWidth="1" fill={get_fill(4)} onClick={rect_click(4)}  />
      <path d="m 319.15439,131.6286 25.10815,-43.119104 -25.10815,-43.1191 h -50.24771 l -25.11831,43.1191 25.11831,43.119104 z" stroke="#575756" strokeWidth="1" fill={get_fill(5)} onClick={rect_click(5)}  />
      <path d="m 319.15439,217.87705 25.10815,-43.12926 -25.10815,-43.11919 h -50.24771 l -25.11831,43.11919 25.11831,43.12926 z" stroke="#575756" strokeWidth="1" fill={get_fill(6)} onClick={rect_click(6)}  />
      <path d="m 319.15439,304.11451 25.10815,-43.11827 -25.10815,-43.11919 h -50.24771 l -25.11831,43.11919 25.11831,43.11827 z" stroke="#575756" strokeWidth="1" fill={get_fill(7)} onClick={rect_click(7)}  />
      <path d="m 319.15439,390.3529 25.10815,-43.11919 -25.10815,-43.1192 h -50.24771 l -25.11831,43.1192 25.11831,43.11919 z" stroke="#575756" strokeWidth="1" fill={get_fill(8)} onClick={rect_click(8)}  />
      <path d="M 243.78745,88.509404 268.90668,45.390303 243.78745,2.2712399 H 193.54991 L 168.4316,45.390303 193.54991,88.509404 Z" stroke="#575756" strokeWidth="1" fill={get_fill(9)} onClick={rect_click(9)}  />
      <path d="M 243.78745,174.75786 268.90668,131.6286 243.78745,88.509496 h -50.23754 l -25.11831,43.119104 25.11831,43.12926 z" stroke="#575756" strokeWidth="1" fill={get_fill(10)} onClick={rect_click(10)}  />
      <path d="m 243.78745,260.99624 25.11923,-43.12926 -25.11923,-43.10912 h -50.23754 l -25.11831,43.10912 25.11831,43.12926 z" stroke="#575756" strokeWidth="1" fill={get_fill(11)} onClick={rect_click(11)}  />
      <path d="m 243.78745,347.23371 25.11923,-43.1192 -25.11923,-43.11918 h -50.23754 l -25.11831,43.11918 25.11831,43.1192 z" stroke="#575756" strokeWidth="1" fill={get_fill(12)} onClick={rect_click(12)}  />
      <path d="m 243.78745,433.47209 25.11923,-43.11919 -25.11923,-43.11919 h -50.23754 l -25.11831,43.11919 25.11831,43.11919 z" stroke="#575756" strokeWidth="1" fill={get_fill(13)} onClick={rect_click(13)}  />
      <path d="M 168.5018,131.6286 193.61087,88.509496 168.5018,45.390396 H 118.2541 L 93.13542,88.509496 118.2541,131.6286 Z" stroke="#575756" strokeWidth="1" fill={get_fill(14)} onClick={rect_click(14)}  />
      <path d="M 168.5018,217.87705 193.61087,174.74779 168.5018,131.6286 h -50.2477 l -25.11868,43.11919 25.11868,43.12926 z" stroke="#575756" strokeWidth="1" fill={get_fill(15)} onClick={rect_click(15)}  />
      <path d="m 168.5018,304.11451 25.10907,-43.11827 -25.10907,-43.11919 h -50.2477 l -25.11868,43.11919 25.11868,43.11827 z" stroke="#575756" strokeWidth="1" fill={get_fill(16)} onClick={rect_click(16)}  />
      <path d="m 168.5018,390.3529 25.10907,-43.11919 -25.10907,-43.1192 h -50.2477 l -25.11868,43.1192 25.11868,43.11919 z" stroke="#575756" strokeWidth="1" fill={get_fill(17)} onClick={rect_click(17)}  />
      <path d="M 93.135512,88.509404 118.2541,45.390303 93.135512,2.2712399 H 42.897969 L 17.77917,45.390303 42.897969,88.509404 Z" stroke="#575756" strokeWidth="1" fill={get_fill(18)} onClick={rect_click(18)}  />
      <path d="M 93.135512,174.75786 118.2541,131.6286 93.135512,88.509496 H 42.897969 L 17.77917,131.6286 42.897969,174.75786 Z" stroke="#575756" strokeWidth="1" fill={get_fill(19)} onClick={rect_click(19)}  />
      <path d="M 93.135512,260.99624 118.2541,217.86698 93.135512,174.75786 H 42.897969 l -25.118799,43.10912 25.118799,43.12926 z" stroke="#575756" strokeWidth="1" fill={get_fill(20)} onClick={rect_click(20)}  />
      <path d="M 93.135512,347.23371 118.2541,304.11451 93.135512,260.99533 H 42.897969 l -25.118799,43.11918 25.118799,43.1192 z" stroke="#575756" strokeWidth="1" fill={get_fill(21)} onClick={rect_click(21)}  />
      <path d="M 93.135512,433.47209 118.2541,390.3529 93.135512,347.23371 H 42.897969 L 17.77917,390.3529 42.897969,433.47209 Z" stroke="#575756" strokeWidth="1" fill={get_fill(22)} onClick={rect_click(22)}  />
    </svg>
  )
}
