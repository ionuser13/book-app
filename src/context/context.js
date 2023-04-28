import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext();
const API = 'https://openlibrary.org/search.json?title';

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('the lord of the rings');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultHeader, setResultHeader] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try {
            const response = await fetch(`${API}=${searchTerm}`);
            const data = await response.json();
            const {docs} = data;
            console.log(docs);
            if(docs) {
                const newBooks = docs.slice(0,20).map(
                    (book) => {
                        const {key, author_name, first_publish_year, subject} =  book;
                        return {
                            id: key || 'id not found',
                            author: author_name || 'author not found',
                            PublicationDate: first_publish_year || 'Date not found',
                            genre: subject[0] || 'genre not found',
                            description: subject[5] || 'description not available',
                        }
                    }
                );
                setBooks(newBooks);

                newBooks.length > 1 ? setResultHeader('Your search results') : setResultHeader('No Results :(');

            }
            else {
                setBooks([]);
                setResultHeader('No Search Result Found');
            }
            setLoading(false)
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(()=> {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={{
            loading, books, setSearchTerm, resultHeader, setResultHeader,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}