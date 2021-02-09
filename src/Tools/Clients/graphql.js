import { ApolloClient, createHttpLink, InMemoryCache  } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'


const headers = {
	'x-hasura-role': 'admin',
}

const adminSecret = process.env.REACT_APP_AUTH_ADMIN_SECRET
if(adminSecret) 	headers['x-hasura-admin-secret'] = adminSecret

const httpLink = createHttpLink({
	uri: 'https://hogwarts-school.caprover.cocaud.dev/v1/graphql',
	headers,
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('token')
	if(!token) return
	return { headers: {
		...headers,
		authorization: `Bearer ${token}`,
	}}
})

export const hogwarts = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})
