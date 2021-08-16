import React from 'react';
import Logo from './components/Logo/Logo';
import HeaderSection from './components/HeaderSection/HeaderSection';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';

function App() {
  return (
    <div className="App">
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
    </div>
  );
}

export default App;
