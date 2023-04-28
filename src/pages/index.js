import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/Main';
import SearchBar from '@/components/Books/SearchBar';
import Books from 'src/containers/BooksSection';
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Main />
      <Books />
      <div className='h-[100vh]'></div>
      <Footer/>
    </>
  )
}
