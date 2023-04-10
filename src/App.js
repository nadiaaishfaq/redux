import { UserList } from './components/UserList'
// import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import {Counter} from './features/counter/Counter'

// const queryClient = new QueryClient()

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <UserList /> */}
        <Counter/>
      </div>
    // </QueryClientProvider>
  );
}

export default App;
