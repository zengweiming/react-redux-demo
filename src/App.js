// import React from 'react'
import AppleCar from './components/appleCar'
// import AppleItem from './components/appleItem'
import './styles.css'
import AppleListStore from './stores/appleListStore'
import AppleViewStore from './stores/appleViewStore'


// new一个store实例，并将这个实例注入到组件中
// const appleStore = new AppleStore()
const appleListStore = new AppleListStore([
  new AppleViewStore('5')
])

function App() {
  return (
    <div className="App">
      <AppleCar appleListStore={appleListStore}></AppleCar>
    </div>
  );
}

export default App;
