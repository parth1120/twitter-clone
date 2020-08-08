import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'
import Feeds from './Components/Feeds/Feeds'
import Widgets from './Components/Widgets/Widgets'
function App() {
  return (
    // BEM
    <div className="app">
      {/* SideBar */}
      <Sidebar />
      {/* Feed */}
      <Feeds />
      {/* Widget */}
      <Widgets/>
    </div>
  );
}

export default App;
