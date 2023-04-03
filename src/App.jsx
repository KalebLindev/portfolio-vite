import './App.css'
import './styles/navBar.css'
import './styles/home.css'
import './styles/lightingPage.css'
import './styles/webdev.css'
import './styles/imageDisplay.css'
import './styles/imgSlider.css'
import './styles/footer.css'
import Root from "./components/Root"
import Home from './components/Home'
import LightingPage from "./components/LightingPage"
import WebDev from './components/WebDev'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter( createRoutesFromElements( 
  <Route>
    <Route path="/" element={ <Root /> }>
      <Route path="/" element={ <Home /> }/>
      <Route path="lighting" element={ <LightingPage /> }/>
      <Route path="webdev" element={ <WebDev /> }/>
    </Route>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
