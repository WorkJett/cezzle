import {StrictMode} from 'react'
import ReactDOM from 'react-dom'
import {Normalize} from 'styled-normalize'

import {App} from 'components/App'
import 'assets/muller/stylesheet.css'

ReactDOM.render(
  <StrictMode>
    <Normalize />
    <App />
  </StrictMode>,
  document.getElementById('root')
)
