import "./App.css";
import styled from "styled-components";
import { useState } from "react";

const TodoItemWrapper = styled.div`
  display: flex;
  padding: 8px 16px;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
`;
const TodoButtonWrapper = styled.div`
  display: flex;
  paddind: 4px;
`;
const Button = styled.button`
  &:hover {
    color: red;
  }
  border-radius: 10px;
  border: 0px;
`;
const TodoContent = styled.h2`
  color: black;
  font-size: 20px;
  ${(props) =>
    props.isDone &&
    `
    text-decoration: line-through;
  `}
  margin: 0px 20px;
`;
const TodoInput = styled.input`
  padding: 10px;
  width: 20%;
  margin: 10px;
  border-radius: 8px;
  border: 2px solid;
`;
const TodoButton = styled.button`
  padding: 2px 10px;
  border-radius: 8px;
  border: 0px;
`;
const RedButton = styled.button`
  color: red;
  margin-left: 10px;
  border-radius: 10px;
  border: 0;
`;
const ButtonChangeState = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
`;

let id = 3;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "跑步",
      isDone: true,
    },
    {
      id: 2,
      content: "吃飯",
      isDone: false,
    },
  ]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("all");
  // Add
  const handleButtonClick = () => {
    setTodos([
      ...todos,
      {
        id,
        content: value,
      },
    ]);
    setValue("");
    id++;
  };
  // Let value into input
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  // Delete
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // DeletAll
  const handleDeleteAll = () => {
    setTodos([]);
  };
  // ShowAll
  const handleShowAll = () => {
    setFilter("all");
  };
  // Checked
  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };
  // Checked(isDone)
  const handleToggleIsDoneAll = () => {
    setFilter("done");
  };
  // NotChecked(Undone)
  const handleToggleIsNotDoneAll = () => {
    setFilter("undone");
  };
  return (
    <div className="App">
      <TodoInput
        input
        type="text"
        placeholder="想想做些什麼"
        value={value}
        onChange={handleInputChange}
      ></TodoInput>
      <TodoButton onClick={handleButtonClick}>新增</TodoButton>
      <div className="filter">
        <ButtonChangeState onClick={handleShowAll}>全部</ButtonChangeState>
        <ButtonChangeState onClick={handleToggleIsDoneAll}>
          已完成
        </ButtonChangeState>
        <ButtonChangeState onClick={handleToggleIsNotDoneAll}>
          未完成
        </ButtonChangeState>
        <ButtonChangeState onClick={handleDeleteAll}>
          全部清除
        </ButtonChangeState>
      </div>
      {FilterState(filter, todos)}
    </div>
  );
  function FilterState(filter, todos) {
    if (filter === "all") {
      return todos.map((todo) => (
        // check state
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleToggleIsDone={handleToggleIsDone}
        />
      ));
    }
    if (filter === "done") {
      return (
        todos
          // check state
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleToggleIsDone={handleToggleIsDone}
            />
          ))
      );
    }
    if (filter === "undone") {
      return (
        todos
          // check state
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleToggleIsDone={handleToggleIsDone}
            />
          ))
      );
    }
  }
  function TodoItem({
    className,
    size,
    todo,
    handleDelete,
    handleToggleIsDone,
  }) {
    const handleToggleClick = () => {
      handleToggleIsDone(todo.id);
    };
    const handleDeleteClick = () => {
      handleDelete(todo.id);
    };
    return (
      <TodoItemWrapper className={className} data-todo-id={todo.id}>
        <TodoContent isDone={todo.isDone} size={size}>
          {todo.content}
        </TodoContent>
        <TodoButtonWrapper>
          <Button onClick={handleToggleClick}>
            {todo.isDone ? "未完成" : "已完成"}
          </Button>
          <RedButton onClick={handleDeleteClick}>刪除</RedButton>
        </TodoButtonWrapper>
      </TodoItemWrapper>
    );
  }
}

export default App;
