import { Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostPage from './pages/post';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
