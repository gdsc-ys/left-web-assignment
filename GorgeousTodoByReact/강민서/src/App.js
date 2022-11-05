import { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import CategoryCard from "./components/CategoryCard";
import CategoryDetailCard from "./components/CategoryDetailCard";
import { TASK_STORAGE_NAME } from "./data/constants";
import useCategoryDetail from "./hooks/useCategoryDetail";
import {
  getCategories,
  addCategory,
  renameCategory,
  addTask,
  completeTask,
} from "./utils/task";

function App() {
  const [categories, setCategories] = useState(getCategories());
  const { selectedCategoryId, open, close } = useCategoryDetail();

  // Sync data
  useEffect(() => {
    const rawCategories = JSON.stringify(categories);

    localStorage.setItem(TASK_STORAGE_NAME, rawCategories);
  }, [categories]);

  const selectedCategory = useMemo(
    () => categories.find((category) => category.id === selectedCategoryId),
    [categories, selectedCategoryId]
  );

  // Event
  const handleAddCategory = () => {
    setCategories(addCategory(categories));
  };

  const handleRenameCategory = (categoryId, categoryName) => {
    setCategories(renameCategory(categories, categoryId, categoryName));
  };

  const handleAddTask = (categoryId, taskName) => {
    setCategories(addTask(categories, categoryId, taskName));
  };

  const handleCompleteTask = (categoryId, taskId) => {
    setCategories(completeTask(categories, categoryId, taskId));
  };

  return (
    <Wrapper>
      {/* Header */}
      <Title>
        Gorgeous
        <br />
        <Light>Todo</Light>
      </Title>
      <Corner />
      {/* Content */}
      <CategoryContainer>
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} openDetailCard={open} />
        ))}
      </CategoryContainer>
      <AddButton onClick={handleAddCategory}>+</AddButton>
      {/* Detail */}
      <CategoryDetailCard
        category={selectedCategory}
        close={close}
        onRenameCategory={handleRenameCategory}
        onAddTask={handleAddTask}
        onCompleteTask={handleCompleteTask}
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;

const Corner = styled.div`
  position: fixed;
  top: -300px;
  right: -300px;
  width: 600px;
  height: 600px;
  background-color: cornflowerblue;

  transform: rotateZ(45deg);
`;

const Title = styled.h1`
  position: fixed;
  top: 50px;
  left: 50px;
  margin: 0;

  font-size: 100px;
  font-weight: 500;
  color: black;
`;

const Light = styled.span`
  font-weight: 100;
`;

const CategoryContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 100px 50px 0;
  box-sizing: border-box;

  overflow-x: scroll;
  overflow-y: hidden;

  & > :not(:first-child) {
    margin-left: -50px;
  }
`;

const AddButton = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;

  width: 70px;
  height: 70px;

  background: cornflowerblue;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 20px lightgray;

  font-family: monospace;
  font-size: 40px;
  color: white;

  transition: box-shadow ease 0.3s;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 30px gray;
  }
`;
