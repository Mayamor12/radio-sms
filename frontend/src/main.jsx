import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'


import {
  createBrowserRouter,
  createRoutesFromElements,
  Form,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/home';
import Detaille from './pages/detaille/detaille';
import Calendra from './pages/calendra/calendra';
import Suggestion from './pages/suggetion/suggestion';
import Singup from './pages/sing up/singup';
import Login from './pages/login/login';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='detaille' element={<Detaille/>}></Route>
      <Route path='' element={< Home/>}></Route>
      <Route path='calendra' element={< Calendra/>}></Route>
      <Route path='suggestion' element={<Suggestion/>}></Route>
      <Route path='singup' element={<Singup/>}></Route>
      <Route path='login' element={<Login/>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
