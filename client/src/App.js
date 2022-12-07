import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

// create client "apollo" for node graphql server
const client = new ApolloClient({
	uri: 'https://hq-1jzj.onrender.com',
	cache: new InMemoryCache()
});
console.log('v');
function App() {
	return (
		<ApolloProvider client={client}>
			<div id="main" className="flex content-center space-x-20 p-[5%] ">
				<p class=" mt-9 text-3xl  text-amber-800 text-center  italic">GraphQl Books Rendering with NetliFly:</p>

				<BookList />

				<AddBook />
			</div>
		</ApolloProvider>
	);
}

export default App;
