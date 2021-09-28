import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { GridItem, Grid } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
const ListComponent = lazy(() => import('./components/List'));
const CreateComponent = lazy(() => import('./components/Create'));
const ViewComponent = lazy(() => import('./components/View'));
import LoadingComponent from './components/LoadingMessage';
import Layout from './components/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export function App() {

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Suspense fallback={<LoadingComponent />}>
              <Switch>
                <Route exact path="/">
                  <ListComponent />
                </Route>
                <Route path="/new">
                  <CreateComponent />
                </Route>
                <Route path="/post/:id" component={ViewComponent} />
              </Switch>
            </Suspense>
          </Layout>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
