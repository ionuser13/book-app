import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import Footer from '@/components/Footer';
import Link from 'next/link';

const URL = 'https://openlibrary.org';


const index = () => {
    const router = useRouter();
    const [bookData, setBookData] = useState({});
    const [loading, setLoading] = useState(true);    

    useEffect(()=> {
        const {id} = router.query;
        if (!router.isReady) return
        async function getBook(){
            try {
                const response = await fetch(`${URL}/works/${id}.json`)
                const dataAnswer = await response.json();
                console.log(dataAnswer)
                setBookData(dataAnswer)
                setLoading(false)
            }
            catch (error) {
                console.log(error)
            }
        }
        getBook();
    }, [router?.isReady]);

    if(loading) {
        return (
            <div className='mt-20'>loading...</div>
        )
    }

  return (
    <div className='w-full h-screen relative mt-8 sm:h-[70vh]'>
        <div className="w-full h-[30%] titleBackground -z-10 relative bg-fixed"></div>
        <Container sx={{marginTop: 2, overflowWrap: 'break-word'}}>
            <h3 className='text-3xl font-bold'>{bookData.title}</h3>

            <div className='mt-2'>
                <p className='font-bold'>Author:</p>
                <Link href={`${URL}${bookData.authors[0].author.key}`}target='_blank'>{URL}{bookData.authors[0].author.key}</Link>
            </div>

            <div className='mt-2'>
                <p className='font-bold mt-2'>Genre(s):</p>
                <p>{bookData.subjects.join(", ")}</p>
            </div>

            <div className='my-2'>
                <p className='font-bold'>Description:</p>
                <p className='w-full'>{bookData.description}</p>
            </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default index