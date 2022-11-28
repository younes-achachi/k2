import React from 'react';
import { getBookQueries } from '../queries/queries';
import { useMutation } from '@apollo/client';
import { addBookMutation } from '../queries/queries';
export const Ab = (props) => {
	const [ addBook, { data, loading, error } ] = useMutation(addBookMutation, {
		refetchQueries: [
			{ query: getBookQueries } // DocumentNode object parsed with gql
		]
	});

	let dataMutation = data;
	let loadingMutation = loading;
	let errorMutation = error;
	return { addBook, dataMutation, loadingMutation, errorMutation };
};
