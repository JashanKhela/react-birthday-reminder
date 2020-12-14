import React, { useState } from 'react';
import data from './data';
import List from './List';
const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([])
  }
  return <main>
    <h3 className="appHeader">React Birthdays 🎂 Using useState()</h3>
    <section className="container">
      <h3> {people.length} Birthdays Today 🎂 </h3>
      <List people={people}/>
      <button onClick={clearAll}>Clear All</button>
    </section>
  </main>;
}

export default App;
