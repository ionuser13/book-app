import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/Main';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Main />
      <div className='h-[100vh] z-[1]'></div>
    </>
  )
}
