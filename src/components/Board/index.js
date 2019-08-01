import React, { useState } from 'react';
import { Container } from './styles';
import List from 'components/List';
import { loadLists } from 'services/api';
import BoardContext from './context';
import produce from 'immer';

const data = loadLists();

export default function Board() {
  
  const [list, setList] = useState(data);

  const move = (fromList, toList, from, to) => {
    setList(produce(list, draft => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
      draft[toList].cards = draft[toList].cards.filter(card => card !== undefined)
    }))
  }

  const addCardList = (fromList, toList, from) => {
    setList(produce(list, draft => {
      if (list[fromList].cards[from] !== undefined) {
        const dragged = draft[fromList].cards[from];
        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.push(dragged);
      }
      else {
        console.log(list[fromList].cards[from], fromList, toList, from);
      }
      // draft[fromList].cards.splice(toList, 0, dragged);
      // draft[toList].cards = draft[toList].cards.filter(card => card !== undefined)
    }))
  }

  return (
    <BoardContext.Provider value={{list, move, addCardList}}>
      <Container>
        { list.map((item, index) => <List key={item.title} listIndex={index} data={item} />) }
      </Container>
    </BoardContext.Provider>
  );
}
