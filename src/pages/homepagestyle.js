// homepagestyle.js
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const UserCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  button {
    margin-top: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;

    &:hover {
      background-color: #45a049;
    }
  }

  .editButton {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;

    &:hover {
      background-color: #2980b9;
    }
  }

  .deleteButton {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

export const UserInfo = styled.div`
  margin-bottom: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
`;

export const AddButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`;

export const ModalHeader = styled.h2`
  margin-bottom: 20px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ModalButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #2980b9;
  }
`;

export const ModalCancelButton = styled(ModalButton)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

export const StyledModal = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;