import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import AddToModal from "./AddTodoModal";
import FilterTodo from "./FilterTodo";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todo);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <AddTodoModal />
        <FilterTodo />
      </div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full rounded-xl p-5 space-y-3">
        {todos.map((todo) => (
          <TodoCard
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}

        {/* <div className="bg-white text-2xl font-bold flex justify-center items-center p-3 rounded-md">
          <p>There is no pending task</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
