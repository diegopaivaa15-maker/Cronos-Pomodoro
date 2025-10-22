

import './styles/theme.css';
import './styles/global.css';
import { Home } from './PAGES';
import { TaskContextProvider } from './TaskContext/TaskContext/TaskProvider';


export function App() {
  return ( 
  <TaskContextProvider>
     <Home />
  </TaskContextProvider>
  );
}