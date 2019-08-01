import React, { useContext } from 'react';
import { Container, EmptyList } from './styles';
import { MdAdd } from 'react-icons/md';
import Card from 'components/Card';
import { useDrop } from 'react-dnd';
import BoardContext from 'components/Board/context';

// import PerfectScrollbar from 'react-perfect-scrollbar'


export default function List({ data, listIndex }) {

  const { addCardList } = useContext(BoardContext);

  const [, dropRef] = useDrop({
    accept: 'Card',
    // Ativa quando o card é solto no target
    drop(item, monitor) {
      if (item.listIndex === listIndex) {
        return;
      }
      addCardList(item.listIndex, listIndex, item.index);
      item.listIndex = listIndex;

    }
  })

  const lis = [...data.cards];

  // console.log(lis.length === 0 ? lis.length : 'ok')

  return (
    <Container done={data.done} ref={lis.length === 0 ? dropRef : null}>
      <header>
        <h2>{ data.title }</h2>
        {
          data.creatable
          ?
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
          :
          null
        }
      </header>

      {
        lis.length === 0
        ?
        <EmptyList>
          <p>Solte aqui!</p>
        </EmptyList>
        :
        <ul>
        {
          lis.map((card, index) => (
            <Card key={card.id} 
              listIndex={listIndex}
              index={index} 
              data={card}
            />
          ))
        }
      </ul>
      }
    </Container>
  );
}
