import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Themecontextprovider from './Contextprovider/Themecontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Themecontextprovider>
    {/* <BrowserRouter> */}
   <ChakraProvider>
    <App />
   </ChakraProvider>
    {/* </BrowserRouter> */}
    </Themecontextprovider>
  
)
