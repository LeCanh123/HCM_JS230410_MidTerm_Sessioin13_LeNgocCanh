import React from 'react'
import Head from './Components/Head'
import Body from './Components/Body'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <Head></Head>
      <Body></Body>
      <ToastContainer />
    </div>
  )
}
