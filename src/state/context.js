import {createContext, useState, useEffect, useContext} from 'react'

const default_state = {
  loaded: false,
  colors: [{id: 'color_1', title: 'белый', color: '#FFFFFF'}],
  cube: {
    collection: [],
    tiles: []
  }
}

export const StateContext = createContext({
  state: default_state,
  setState: () => {}
})

export const useStateContext = () => {
  const [state, setState] = useState(default_state)

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(res => res.json())
      .then(json => {
        json.cube.tiles = []
        json.cube.map = new Array(36).fill(null)
        json.hex.tiles = []
        json.hex.map = new Array(23).fill(null)
        json.loaded = true
        setState(json)
      })
  }, [])

  return {state, setState}
}

export const useSt = () => {
  return useContext(StateContext)
}
