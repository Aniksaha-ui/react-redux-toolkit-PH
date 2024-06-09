import { removeTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";

interface todoInterface {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

const TodoCard = ({ id, title, description, isCompleted }: todoInterface) => {
  const dispatch = useAppDispatch();
  // const handleDelete = (id: string) => {
  //   dispatch(removeTodo(id));
  // };
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">{title}</p>
      <p className="font-semibold">{description}</p>
      <p className="font-semibold">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </p>
      <div className="space-x-5">
        {/* <button onClick={() => handleDelete(id)}>Del</button> */}
        <button onClick={() => dispatch(removeTodo(id))}>Del</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
