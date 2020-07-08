import ApolloClient from 'apollo-boost'

export const hogwarts = new ApolloClient({
	uri: 'https://hogwarts-school.caprover.cocaud.dev/v1/graphql',
	headers: {
		'x-hasura-admin-secret': process.env.REACT_APP_HOGWARTS_ADMIN_SECRET,
	},
})

export const auth = new ApolloClient({
	uri: 'https://planingauth.caprover.cocaud.dev/v1/graphql',
	headers: { 'x-hasura-admin-secret': process.env.REACT_APP_AUTH_ADMIN_SECRET },
})
