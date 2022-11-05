import styled from "styled-components";

const CategoryCard = ({ openDetailCard, ...category }) => {
  const handleClickOpen = () => {
    openDetailCard(category.id);
  };

  return (
    <Wrapper>
      <Card onClick={handleClickOpen}>
        <Title>{category.name}</Title>
        <Divider />
        <TaskContainer>
          {category.tasks.map((task) => (
            <Task key={task.id}>
              {task.completed ? <del>{task.name}</del> : task.name}
            </Task>
          ))}
        </TaskContainer>
      </Card>
    </Wrapper>
  );
};

export default CategoryCard;

const Wrapper = styled.div`
  perspective: 300px;
  perspective-origin: center;

  transform: translateY(80%);
  transition: transform ease 0.5s;

  &:hover {
    transform: translateY(0);
  }
`;

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 600px;
  padding: 30px;
  box-sizing: border-box;

  background-color: white;
  box-shadow: 0 0 20px lightgray;
  border-radius: 30px;

  transform: rotateY(5deg);

  &::after {
    content: "+";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    padding-top: 50px;
    backdrop-filter: blur(20px);
    border-radius: 30px;
    font-size: 50px;
    text-align: center;

    opacity: 0;
    transition: opacity ease 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Title = styled.h2`
  margin: 0;

  font-size: 30px;
  font-weight: 500;
`;

const Divider = styled.hr`
  border: none;
  background-color: black;
  height: 1px;
  margin: 15px 0;
`;

const TaskContainer = styled.ul`
  margin-top: 30px;
  padding: 0;

  list-style-type: none;
`;

const Task = styled.li``;
