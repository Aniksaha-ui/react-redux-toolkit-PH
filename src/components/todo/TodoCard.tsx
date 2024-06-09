import { removeTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";

interface todoInterface {
  id: string;
  title: string;
  description: string;
}

const TodoCard = ({ id, title, description }: todoInterface) => {
  const dispatch = useAppDispatch();
  // const handleDelete = (id: string) => {
  //   dispatch(removeTodo(id));
  // };
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">{title}</p>
      <p className="font-semibold">{description}</p>
      <div className="space-x-5">
        {/* <button onClick={() => handleDelete(id)}>Del</button> */}
        <button onClick={() => dispatch(removeTodo(id))}>Del</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
