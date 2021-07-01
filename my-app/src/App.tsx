import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div className="Home">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div id = "Background"></div>
      <header id = "UserBar">
        <div id = "User">User</div>
        <div id = "Logo">Logo</div>
      </header>
      <ul id = "Threads">
        <li id = "ThreadBreakdown">
          <section id = "titleThread">
            <div>Matt is a genius</div>
          </section>
          <article>
            <div id = "descThread">That Matt guy, he's so cool. Absolutely frozen, they say.</div>
          </article>
          <aside> 
            <div id = "mediaThread">
              <img id = "media" src="Sylph.PNG" alt= "A thing" />
            </div>
          </aside>
        </li>
      </ul>
      <div id = "TopUser"> Top User Block</div>
    </div>

  );
}

export default App;
