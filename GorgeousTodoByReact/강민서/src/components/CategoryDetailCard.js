import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import TaskItem from "./TaskItem";

const CategoryDetailCard = ({
  close,
  category,
  onRenameCategory,
  onAddTask,
  onCompleteTask,
}) => {
  const [categoryNameInput, setCategoryNameInput] = useState("");
  const [taskInput, setTaskInput] = useState("");

  // Event
  const preventBubbling = (event) => {
    event.stopPropagation();
  };

  const handleRenameCategory = () => {
    onRenameCategory(category.id, categoryNameInput);
  };

  const handleAddTask = () => {
    onAddTask(category.id, taskInput);
    setTaskInput("");
  };

  const handleCompleteTask = (taskId) => {
    onCompleteTask(category.id, taskId);
  };

  // Input
  const handleChangeCategoryNameInput = (event) => {
    setCategoryNameInput(event.target.value);
  };

  const handleChangeTaskInput = (event) => {
    setTaskInput(event.target.value);
  };

  // Sync data
  useEffect(() => {
    setCategoryNameInput(category?.name ?? "");
  }, [category]);

  return (
    <Wrapper onClick={close} $active={!!category}>
      <Card onClick={preventBubbling} $active={!!category}>
        <TitleContainer>
          <Title
            value={categoryNameInput}
            onChange={handleChangeCategoryNameInput}
          />
          {categoryNameInput !== category?.name && (
            <ConfirmButton onClick={handleRenameCategory}>변경</ConfirmButton>
          )}
        </TitleContainer>
        <TaskContainer>
          {category?.tasks.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
              onCompletedChange={handleCompleteTask}
            />
          ))}
        </TaskContainer>
        <TaskInputContainer>
          <TaskInput value={taskInput} onChange={handleChangeTaskInput} />
          {taskInput.length > 0 && (
            <AddButton onClick={handleAddTask}>+</AddButton>
          )}
        </TaskInputContainer>
      </Card>
    </Wrapper>
  );
};

export default CategoryDetailCard;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  justify-content: center;
  align-items: center;

  background-color: #00000020;
  backdrop-filter: blur(20px);

  transition: opacity ease 0.3s;

  /* Hide by default */
  opacity: 0;
  pointer-events: none;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  height: 80%;
  overflow: hidden;

  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 20px rgb(194, 194, 194);

  transition: transform ease 0.5s;

  /* Hide by default */
  transform: translateY(120%);

  ${({ $active }) =>
    $active &&
    css`
      transform: translateY(0);
    `}
`;

const TitleContainer = styled.div`
  position: relative;
  height: 100px;

  background-color: gray;
`;

const Title = styled.input`
  width: 100%;
  height: 100%;

  background: none;
  border: none;
  outline: none;
  padding: 0;

  font-size: 30px;
  font-weight: 500;
  line-height: 100px;
  text-align: center;
  color: white;
`;

const ConfirmButton = styled.button`
  position: absolute;
  right: 30px;
  top: 50px;

  border: none;
  border-radius: 10px;
  background-color: #ffffff30;
  padding: 5px 10px;

  color: white;

  transform: translateY(-50%);

  transition: background-color ease 0.3s;

  &:hover {
    background-color: #ffffff50;
  }
`;

const TaskContainer = styled.ul`
  flex: 1 1 0;
  margin: 0;
  padding: 50px;

  list-style-type: none;

  & > :not(:first-child) {
    margin-top: 20px;
  }

  overflow-y: scroll;
`;

const TaskInputContainer = styled.div`
  display: flex;

  height: 60px;

  border-top: 1px solid lightgray;
`;

const TaskInput = styled.input`
  flex: 1 1 0;
  height: 100%;

  background: none;
  border: none;
  outline: none;
  padding: 0 30px;
`;

const AddButton = styled.button`
  width: 60px;
  height: 60px;
  background: none;
  border: none;

  font-family: monospace;
  font-size: 25px;

  transition: background-color ease 0.3s;

  &:hover {
    background-color: lightgray;
  }
`;
