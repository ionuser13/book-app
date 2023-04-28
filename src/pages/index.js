import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/Main';
import SearchBar from '@/components/Books/SearchBar';
import Books from 'src/containers/BooksSection';
import Footer from "@/components/Footer"
import { AppProvider } from 'src/context/context';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <AppProvider>
      <>
        <Main />
        <Books />
        <Footer/>
      </>
    </AppProvider>
  )
}
