import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';

const URL = 'https://openlibrary.org/works/'

const index = () => {
    const router = useRouter();
    const {id} = router.query;
    const [bookData, setBookData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function getBook(){
            try {
                const response = await fetch(`${URL}${id}.json`)
                const data = await response.json();
                console.log(data)
                setLoading(false)
                setBookData(data)
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
    <Container>
        <div className='mt-20'>{bookData.title}</div>
    </Container>
  )
}

export default index