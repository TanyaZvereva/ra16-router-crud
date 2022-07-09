import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import PostWatch from './Components/Post-watch';
import PostList from './Components/Post-list';
import PostCreate from './Components/Post-create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<PostList/>}/>
        <Route path='create'elememt={<PostCreate/>}/>
        <Route path='edit'element={<PostWatch/>}/>
      </Routes>
    </div>
  );
}

export default App;
