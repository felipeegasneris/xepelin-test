import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoadingComponent from './components/LoadingMessage';
import Layout from './components/Layout';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';

const ListComponent = lazy(() => import('./components/List'));
const CreateComponent = lazy(() => import('./components/Create'));
const ViewComponent = lazy(() => import('./components/View'));

const queryClient = new QueryClient();

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
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
    </ErrorBoundary>
  );
}

export default App;
