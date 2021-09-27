import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { GridItem, Grid } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
const ListComponent = lazy(() => import('./components/List'));
const CreateComponent = lazy(() => import('./components/Create'));
import LoadingComponent from './components/LoadingMessage';
import SidebarComponent from './components/SideBar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Grid
            h="100vh"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            <GridItem colSpan={1} bg="tomato">
              <SidebarComponent />
            </GridItem>
            <GridItem colSpan={3} bg="papayawhip">
              <Suspense fallback={<LoadingComponent />}>
                <div>contenido</div>
                <Switch>
                  <Route exact path="/">
                    <ListComponent />
                  </Route>
                  <Route path="/new">
                    <CreateComponent />
                  </Route>
                </Switch>
              </Suspense>
            </GridItem>
          </Grid>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
