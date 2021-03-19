import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './Home';
import Product from './Product';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    cache: new InMemoryCache()
  });

const Root = () => {
    return(
        <div>
            <ApolloProvider client={client}>
                <Router>
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/product/:id'} component={Product} />
                    </Switch>
                </Router>
            </ApolloProvider>
        </div>
    )
}

export default Root;