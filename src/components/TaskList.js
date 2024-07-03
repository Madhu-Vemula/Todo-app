import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.li`
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const TaskText = styled.span`
  flex-grow: 1;
  text-align: left;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  padding: 8px;
  margin-left: 10px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:first-child {
    background-color: #ffbb33;
    margin-left: 0;

    &:hover {
      background-color: #ffa726;
    }
  }
`;

const EditButton = styled(Button)`
  background-color: #4caf50;

  &:hover {
    background-color: #45a049;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #ff4444;

  &:hover {
    background-color: #ff2a2a;
  }
`;

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          <TaskText>{task}</TaskText>
          <EditButton onClick={() => editTask(index)}>Edit</EditButton>
          <DeleteButton onClick={() => deleteTask(index)}>Delete</DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
