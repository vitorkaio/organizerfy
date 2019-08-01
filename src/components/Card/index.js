import React, { useRef, useContext } from 'react';
import { Container, Label } from './styles';
import { useDrag, useDrop } from 'react-dnd';
import BoardContext from 'components/Board/context';

export default function Card({ data, index, listIndex }) {

  const ref = useRef();
  
  // Acessa o context do Board.
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'Card', index, id: data.id, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [, dropRef] = useDrop({
    accept: 'Card', // Tipo de itens que irá aceitar o drop
    hover(item, monitor) { // é executado quando um item drag passa por cima do useDrop
      // item é o item que está com drag

      const draggedIndex = item.index;
      const targetIndex = index;

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex && item.id === data.id) {
        return;
      }

      // Pega o tamanho do card
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      // Pega a posição que o item dragging se movimentou
      const draggedOffset = monitor.getClientOffset();

      // Verifica o quanto o item dragged está dentro do item drop
      const draggetTop = draggedOffset.y - targetSize.top;

      // Se o item veio antes do drop, não faz nada
      if (draggedIndex < targetIndex && draggetTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggetTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  // console.log(isDragging);
  dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {
          data.labels.map((label) => <Label key={label} color={label}/>)
        }
      </header>
      <p>{ data.content }</p>
      {
        data.user && (<img src={data.user} alt="avatar"/>)
      }
    </Container>
  );
}
