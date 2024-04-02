import LocalStorage from '@config/localStorage';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink } from "apollo-link";

const authLink = setContext((_, { headers }) => {

    const token = localStorage.getItem(LocalStorage.token);

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
            'Content-Language': _sharedData.locale
        }
    }
});

const uploadLink = createUploadLink({
    uri: '/graphql',
    headers: { "keep-alive": "true" }
});


const client = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: ApolloLink.from([authLink, uploadLink]),
});


export default client;