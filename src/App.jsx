import './App.css';
import LikeImageHOC from './components/LikeImageHOC';
// import LikeImage from './components/LikeImage';
// import LikePost from './components/LikePost';
import LikePostHOC from './components/LikePostHOC';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePostHOC/>
        <LikeImageHOC/>
      </div>
    </div>
  );
}

export default App;
