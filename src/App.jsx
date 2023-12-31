import Body from "./components/Body"
import { Provider } from "react-redux"
import store from "./utils/store"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/watchPage"
import Searchcontainer from "./components/Searchcontainer"

const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[{
    path:'/',
    element:<MainContainer/>
  },
{
  path:'/watch',
  element:<WatchPage/>
},
{
  path:'/search',
  element:<Searchcontainer/>
}]
}])
function App() {


  return (
    <Provider store={store}>
    <>
      <RouterProvider router={appRouter}/>
    </>
    </Provider>
  )
}

export default App
