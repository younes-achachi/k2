import React, { useEffect, useState, useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import { getBookQueries, getAthorQuery } from '../queries/queries';
import BookDetails from './BookDetails';

console.log('im here');
const BookList = () => {
	const ref = useRef();
	const { loading, error, data } = useQuery(getBookQueries, {
		fetchPolicy: 'network-only'
	});
	const [ selectedBook, setSelectedBook ] = useState({});
	useEffect(() => {
		console.log(data);
	}, []);
	if (loading) return <p>'Loading...'</p>;

	if (error) return `Error! ${error.message}`;
	console.log('touche', { data });

	return (
		<div class="flex h-auto space-x-10 space-h-10">
			<div class="block">
				<ul id="book-list" class="overflow-auto   h-100 ">
					{data.books.map((e, i) => {
						return (
							<li
								onClick={() => setSelectedBook(e)}
								id={i}
								style={{ listStyleType: '' }}
								class="flex-none mt-2 text-center cursor-pointer border-2 border-black border-solid border-l-4 rounded"
								key={i}
							>
								{e.name}
							</li>
						);
					})}
				</ul>
			</div>
			<div class=" block w-[15%] h-40">
				<BookDetails book={selectedBook} />
			</div>
		</div>
	);
};

export default BookList;
