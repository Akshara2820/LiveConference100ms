import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import ReactDOM from "react-dom";
import { HMSRoomProvider } from "@100mslive/react-sdk";

const inter = Inter({ subsets: ['latin'] })
import App from '../component/App'
export default function Home() {
  return (
    <>
     <HMSRoomProvider>
      <App />
    </HMSRoomProvider>
    </>
  )
}
