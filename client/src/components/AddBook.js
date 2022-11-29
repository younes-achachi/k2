import React, { useState } from 'react';
import { getAthorQuery, getBookQueries } from '../queries/queries';
import { useQuery } from '@apollo/client';
import { Ab } from './addBookMutation';

const AddBook = () => {
	const { loading, error, data } = useQuery(getAthorQuery);
	const [ name, setName ] = useState('');
	const [ genre, setGenre ] = useState('');
	const [ authorId, setId ] = useState('');
	const { addBook, dataMutation, loadingMutation, errorMutation } = Ab();

	const displayAuthor = () => {
		if (data) {
			return data.authors.map((e, i) => {
				return (
					<option key={i} value={e.authorId}>
						{e.name}
					</option>
				);
			});
		} else if (loading) {
			<p>Loading</p>;
		}
	};
	if (error) return `Error! ${error.message}`;
	console.log('touche', { data });
	const submitForm = (e) => {
		e.preventDefault();
		console.log(name.name, genre, authorId);
		addBook({
			variables: {
				name: name.name,
				genre: genre.genre,
				authorId: authorId.authorId
			},
			refetchQueries: [ getBookQueries ]
		});
		console.log({ dataMutation }, 'the Data');
		return e;
	};
	return (
		<div class="block w-[200px]">
			<form id="add-book" onSubmit={submitForm} class="flex-1 content-start ">
				<div
					class="justify-between flex mt-5 space-x-4 text-lg"
					className="field"
					style={{ alignContent: 'space-between' }}
				>
					<label htmlFor="nameBook">Bookname</label>
					<input
						id="nameBook"
						type="text"
						onChange={(e) => {
							setName({ name: e.target.value });
						}}
					/>
				</div>
				<div class="justify-between flex mt-5 space-x-4 text-lg" className="field">
					<label htmlFor="genreBook">genre</label>
					<input
						id="genreBook"
						type="text"
						onChange={(e) => {
							setGenre({ genre: e.target.value });
						}}
					/>
				</div>
				<div class="justify-between flex mt-5 space-x-4 text-lg" className="field">
					<label htmlFor="selectAuthor">Author: </label>
					<select
						name=""
						id="selectAuthor"
						onChange={(e) => {
							setId({ authorId: e.target.value });
						}}
						class="ml-[10%] bg-lime-200"
					>
						<option disabled>Choose Author...</option>
						{displayAuthor()}
					</select>
				</div>
				<input type="submit" value="Add" class="bg-red-500 w-[100%] mt-9 rounded text-xl" />
			</form>
		</div>
	);
};

export default AddBook;
