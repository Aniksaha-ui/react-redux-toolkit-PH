const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo title</p>
      <p className="font-semibold">Time</p>
      <p className="font-semibold">Description</p>
      <div className="space-x-5">
        <button>Del</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
