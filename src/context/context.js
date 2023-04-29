import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext();
const API = 'https://openlibrary.org/search.json?title=';

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('The Lord of the Rings');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultHeader, setResultHeader] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try {
            const response = await fetch(`${API}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;
            if(docs) {
                const newBooks = docs.map(
                    (book) => {
                        const {key, author_name, first_publish_year, subject, title} =  book;
                        return {
                            id: key,
                            title: title,
                            author: author_name,
                            publicationDate: first_publish_year,
                            genre: subject,
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