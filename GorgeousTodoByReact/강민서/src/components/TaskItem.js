import styled from "styled-components";

const TaskItem = ({ id, name, completed, onCompletedChange }) => {
  const handleChange = () => {
    onCompletedChange(id);
  };

  return (
    <Wrapper>
      <Task>
        <Input type="checkbox" onChange={handleChange} checked={completed} />
        <Dot />
        <Label>{name}</Label>
      </Task>
    </Wrapper>
  );
};

export default TaskItem;

const Wrapper = styled.li``;

const Task = styled.label`
  display: flex;
  align-items: center;

  font-size: 18px;

  cursor: pointer;
`;

const Dot = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;

  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
`;

const Label = styled.p``;

const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + ${Dot} {
    background-color: black;
  }

  &:checked ~ ${Label} {
    text-decoration: line-through;
  }
`;
