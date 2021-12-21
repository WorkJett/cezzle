import {StrictMode} from 'react'
import ReactDOM from 'react-dom'
import {Normalize} from 'styled-normalize'

import {App} from 'components/App'
import {Spinner} from 'components/Spinner'
import 'assets/muller/stylesheet.css'
import {useStateContext, StateContext, useSt} from 'state/context'

const ContextCheck = () => {
  const st = useSt()

  if(!st.state.loaded) return <Spinner />

  return (
    <App />
  )
}

const WithContext = () => {
  const st = useStateContext()

  return (
    <StateContext.Provider value={st}>
      <ContextCheck />
    </StateContext.Provider>
  )
}

ReactDOM.render(
  <StrictMode>
    <Normalize />
    <WithContext />
  </StrictMode>,
  document.getElementById('root')
)
