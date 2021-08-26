import 'normalize.css';
import {useState} from 'react';
import './App.css';
import List from './components/list/List';
import store from './utils/store';
import DataContext from './context/index';
import {v4 as uuid} from 'uuid';
import InputContainer from './components/addCard/InputContainer';
import {DragDropContext} from 'react-beautiful-dnd';

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
  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    console.log(destination, source, draggableId);
    const sourceList = data.lists.find(
      (list) => list.id === source.droppableId
    );
    console.log(sourceList);

    const destinationList = data.lists.find(
      (list) => list.id === destination.droppableId
    );
    console.log(destinationList);

    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];
    console.log(draggingCard);

    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: data.lists.map((list) => {
          if (list.id === sourceList.id) {
            return destinationList;
          } else {
            return list;
          }
        }),
      };

      setData(newState);
    } else {
      sourceList.cards.splice(source.index, 1);
      console.log(
        destinationList.cards.splice(destination.index, 0, draggingCard)
      );

      const newState = {
        ...data,
        lists: data.lists.map((list) => {
          if (list.id === sourceList.id) {
            return sourceList;
          } else {
            return list;
          }
        }),
      };
      setData(newState);
    }
  };
  return (
    <DataContext.Provider value={{addMoreCard, addMoreList, updateListTitle}}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          {data.lists.map((list) => (
            <List list={list} key={list.id} />
          ))}
          <InputContainer type="list" />
        </div>
      </DragDropContext>
    </DataContext.Provider>
  );
}

export default App;
