import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

function BookDetails(props) {
	const { loading, error, data } = useQuery(getBookQuery, { variables: { authorId: props.book.authorId } });
	console.log(data);
	return (
		<div id="book-details" class="w-[220px] block h-auto">
			<p class="font-bold text-xl ml-[-20px]">
				Book name :<p class="italic ml-4 font-normal"> {props.book.name}</p>
			</p>
			<p class="font-bold text-xl ml-[-20px]">
				Book genre :<p class="italic ml-4 font-normal"> {props.book.genre}</p>
			</p>
			<p class="font-bold text-xl ml-[-20px]">
				Author name :<p class="italic ml-4 font-normal">
					{loading ? 'loading' : data && data.book[0].author ? data.book[0].author.name : 'no Author'}
				</p>
			</p>
			<p class="font-bold text-xl ml-[-20px]">Other from this Author : </p>
			<ul>
				{data ? (
					data.book.map((e, i) => (
						<li class="font-bold" style={{ listStyleType: 'square' }} key={i}>
							book name: <p class="italic xs-4 font-normal">{e.name}</p>
						</li>
					))
				) : (
					<p>select a book</p>
				)}
			</ul>
		</div>
	);
}

export default BookDetails;
