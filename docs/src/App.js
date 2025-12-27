import './App.css';

function App() {
  return (
    <div className="App" align="center">
      <div><img src="../logo2.png" /></div>
      <h1>PixelIcns</h1>
      <h2>What is PixelIcns</h2>
      <p>PixelIcns is a icon database, that contain pixelated icons.</p>
      <img src="https://raw.githubusercontent.com/nico1monte/PixelIcns/main/icons/png/github.png" width="32px" height="32px" onClick={()=>{window.open("https://github.com/nico1monte/PixelIcns")}} style={{ cursor: 'pointer' }}/>
    </div>
  );
}

export default App;
