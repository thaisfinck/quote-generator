
function App() {
  return (
    <>
    <div className="container-fluid">
      <div className="container" id="quote-box">
        <div className="row">
          <div className="col">
            <input id="text"></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input id="author"></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="twitter.com/intent/tweet" id="tweet-quote">icon</a>
          </div>
          <div className="col">
            <button className="btn-info" id="new-quote">New</button>
          </div>
        </div>        
      </div>
    </div>
    </>
  );
}

export default App;
