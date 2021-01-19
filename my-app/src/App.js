import react from 'react';
import './App.css';
import Picture from './Library/Image/Picture.jpg';

function App() {
  return (
<div className="wrapper">
  <img src={Picture} alt="Picture of Jon"/>
  <h1>Jon Helge Skjærstein</h1>
  <div className="container"></div>
</div>
  );
}

export default App;