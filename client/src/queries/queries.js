import { gql } from '@apollo/client';

const getAthorQuery = gql`
	query {
		authors {
			name
			authorId
		}
	}
`;

const getBookQueries = gql`
	query {
		books {
			name
			genre
			authorId
		}
	}
`;
const addBookMutation = gql`
	mutation Mutation($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, authorId: $authorId) {
			name
			authorId
			genre
		}
	}
`;
const getBookQuery = gql`
	query($authorId: String!) {
		book(authorId: $authorId) {
			name
			genre
			author {
				name
				age
				authorId
				books {
					name
					genre
				}
			}
		}
	}
`;
export { getAthorQuery, getBookQueries, addBookMutation, getBookQuery };
