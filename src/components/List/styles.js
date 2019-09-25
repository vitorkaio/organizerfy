import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;

  flex-grow: 0;
  flex-shrink: 0; /* encolhe o nó max que der */
  flex-basis: 320px;

  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
      color: seagreen;
    }

    button {
      width: 30px;
      height: 30px;
      background: seagreen;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }

`;

export const EmptyList = styled.div`
  margin-top: 30px;
  border: 2px dashed rgba(0, 0, 0, 0.2);
  padding: 31px;
  background: transparent;
  border-radius: 0;
  box-shadow: none;

  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
  }

`;
