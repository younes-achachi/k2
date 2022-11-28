import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

// create client "apollo" for node graphql server
const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache()
});
console.log('v');
function App() {
	return (
		<ApolloProvider client={client} class="flex">
			<div id="main" className="flex w-[100%] space-x-40 mx-28 pt-[10%] ">
				<p class=" mt-9 text-3xl  text-amber-800   italic"> GraphQl Books Rendering with netlifly: </p>
				<div class="block">
					<BookList class="flex mt-2 border-solide" />
				</div>
				<div class="block">
					<AddBook class="flex" />
				</div>
			</div>
		</ApolloProvider>
	);
}

export default App;
