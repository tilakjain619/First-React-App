import React, { useEffect, useState } from 'react'

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("");
  const [filter, setFilter] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }
  let newTodo;
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = todos.length - 1;
    newTodo = {
      "id": id + 1,
      "task": input,
      "priority": priority
    }
    setTodos([...todos, newTodo]);
    setInput("");
    setPriority("");
  }
  const handleDelete = (id) => {
    const arr = todos.filter((todo) => todo.id !== id);
    setTodos(arr);
  }

  function handlePriority(e) {
    setPriority(e.target.value);
  }
  useEffect(()=>{
    if(filter === 'high'){
      setTodos(todos.sort((a, b) => b.priority.localeCompare(a.priority)));
    }
    else if(filter === 'low'){
      setTodos(todos.sort((a, b) => a.priority.localeCompare(b.priority)));
    }
    else{
      return;
    }
  }, [filter])
  function handleFilter(e){
    setFilter(e.target.value);
  }
  return (
    <div className='min-h-screen'>
      <div className='px-4 py-6 max-w-[500px] w-full mx-auto'>
        <form className='flex gap-1 flex-wrap justify-center w-full'>
          <input className='text-gray-700 w-full border-2 border-slate-200 px-2 py-2 rounded-md' required onChange={handleInput} type="text" placeholder='Write your todo' value={input} />
          <select name='priority' className='border-2 w-1/4 border-slate-200 px-2 py-2 rounded-md' required onChange={handlePriority}>
            <option value="">Priority</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
          <button type='submit' className='flex-1 px-4 py-2 bg-sky-500 rounded-lg' onClick={handleSubmit}>Add</button>
        </form>
        <div className='flex justify-end pt-4'>
          <span>Filter: </span>
          <select onChange={handleFilter}>
            <option value="">Priority</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </div>
        <ul className='py-4'>
          {
            todos.map((todo) => {
              return (
                <li className='bg-sky-100 px-4 border relative border-slate-200 shadow-md shadow-gray-100 py-3 rounded-md flex justify-between mt-4' key={todo.id}>
                  {todo.task}
                  <button className='bg-red-600 text-white px-2 py-1 text-xs rounded-md' onClick={() => handleDelete(todo.id)}>Remove</button>
                  {todo.priority != 'none' && <span className='absolute right-0 -top-2 uppercase text-xs bg-orange-500 px-2 text-white rounded-full'>{todo.priority}</span>}
                </li>
              )
            })
          }
          {todos.length == 0 && <li className='py-4 px-1'>No todos yet!</li>}
        </ul>
      </div>
    </div>
  )
}

export default TodoApp
