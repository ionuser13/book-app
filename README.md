# Approaches taken to build this application

## Pre-production stage

The first approach I took in order to start this project was to decide which tools I was going to use depending on the features, layout and data management the app was going to have. To start with, I was given general instructions about the app, so the features were clear: a simple app that searches for books, displays a list of the results and redirects to another page with the details of the selected book. I included Material UI and Tailwind CSS to build the layout, and I went for the Context API for the data management.

I made a few layout drafts to settle my ideas. I opted for a simple responsive layout as told in the instructions. I included a header from Material UI in all the pages. The main page consist in a presentation section and the search section, which includes the search bar and the list of books in a table from Material UI. After that, I started building the application.

## Development stage

The app was created with create-next-app because of performance and feature reasons. Then, I installed the necessary dependency, Material UI. I chose the App bar with responsive menu component since it solves the need of building a separated mobile menu and keep important links on sight. Then, I built a simple 404 page and the presentation section of the main page. I included both a search bar and a table from Material UI without any logic between them to begin with. To be specific, the only logic was the example code given by Material UI to explain how the components behave. 

I also changes my initial folder structure in order to have a more organized work environment and to bring a better experience when reading my code to whoever wants to. Aliases were added to make the process of importing components easier. 

I implemented a request to an API in order to get the data to work with. I used the [Open Library API](https://openlibrary.org/). To be precise, I made two requests: one to show the data in the main page table, and the second to show the details of every book. For this, I used the Context API from React. The API takes a string as a parameter to make the request. So I used the search bar value as the parameter to get the data. With this, I managed to render the data (title, author, publication date and genre) of every book that matched the search from the bar in the table and find a way to make routes. Every book has an id, so this is used as a single route that redirects to the page that renders the books details.

Inside this page, I made the second request to the API. The response is different and more detailed than the previous data given by the previous request. So I built a simple layout to make the data more presentable and easier to read. Each page displays the title, author, description and genres of each book.

## Deployment

I used Vercel's feature to deploy this book app and make it available from anywhere. This is because it's a simple and practical way to deploy projects built in any technology. Here is the [link](https://book-app-alpha-five.vercel.app/).