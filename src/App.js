import 'normalize.css';
import {useState} from 'react';
import './App.css';
import List from './components/list/List';
import store from './utils/store';
import DataContext from './context/index';
import {v4 as uuid} from 'uuid';
import InputContainer from './components/addCard/InputContainer';

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
  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      ...data,
      lists: [...data.lists, newList],
    };
    setData(newState);
  };
  const updateListTitle = (title, listId) => {
    const newState = {
      ...data,
      lists: data.lists.map((list) => {
        if (list.id === listId) {
          return {...list, title: title};
        } else {
          return list;
        }
      }),
    };
    setData(newState);
  };
  return (
    <DataContext.Provider value={{addMoreCard, addMoreList, updateListTitle}}>
      <div className="App">
        {data.lists.map((list) => (
          <List list={list} key={list.id} />
        ))}
        <InputContainer type="list" />
      </div>
    </DataContext.Provider>
  );
}

export default App;
