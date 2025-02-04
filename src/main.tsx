import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'
import { Provider } from 'react-redux'
import { store } from './features/redux/store.ts'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
