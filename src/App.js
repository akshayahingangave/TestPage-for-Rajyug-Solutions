import Sidebar from './components/Sidebar';
import First from './components/First';


function App() {
  return (
    <div className="container-fluid">
      <div className="row mainpage">
        <div className="col-md-1">
          <Sidebar />
        </div>
        <div className="col-md-11" style={{ marginLeft: '-30px' }}>
          <First />
        </div>
      </div>
      <br />
      <div className="footer">
        <p style={{textAlign:'center', color:'gray'}}>POWERED BY RAJYUG IT SOLUTIONS PVT LTD</p>
      </div>
    </div>
  );
}

export default App;
