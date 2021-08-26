import 'normalize.css';
import {useState} from 'react';
import './App.css';
import List from './components/list/List';
import store from './utils/store';
import DataContext from './context/index';
import {v4 as uuid} from 'uuid';

function App() {
  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };
    const list = data.lists.find((list) => list.id === listId);
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: [...data.lists],
    };
    setData(newState);
  };

  return (
    <DataContext.Provider value={{addMoreCard}}>
      <div className="App">
        {data.lists.map((list) => (
          <List list={list} key={list.id} />
        ))}
      </div>
    </DataContext.Provider>
  );
}

export default App;
