import AddTodoModal from "./AddTodoModal";
import AddToModal from "./AddTodoModal";
import FilterTodo from "./FilterTodo";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <AddTodoModal />
        <FilterTodo />
      </div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full rounded-xl p-5 space-y-3">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />

        {/* <div className="bg-white text-2xl font-bold flex justify-center items-center p-3 rounded-md">
          <p>There is no pending task</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
