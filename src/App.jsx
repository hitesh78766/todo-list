import { useState } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState('')
  const [inputValue, setInputValue] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  const [completedTodos, setCompletedTodos] = useState([]);


  console.log("the edittodo is :", editTodo)

  // console.log("the input value is :" , inputValue)

  // console.log("the todo value is :" , todo)

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  // const handleClick = (e) =>
  //   {
  //     e.preventDefault()
  //     setInputValue([...inputValue , todo])
  //     setTodo('')
  //   }


  const handleClick = (e) => {
    e.preventDefault();
    if (editTodo !== null) {
      const updatedTodos = inputValue.map((item, index) =>
        // console.log("the item is :" , item)
        index === editTodo ? todo : item
      );
      setInputValue(updatedTodos);
      setEditTodo(null);
    } else {
      setInputValue([...inputValue, todo]);
    }
    setTodo('');
  };

  const handleDelete = (index) => {
    console.log("the index is : ", index)

    // const deleteData = inputValue.filter((item , i) => i !== index)
    // setInputValue(deleteData)

    const newInputValue = [...inputValue];
    newInputValue.splice(index, 1);
    setInputValue(newInputValue);
    setTodo('')

  }


  const handleEdit = (index) => {
    setEditTodo(index)
    setTodo(inputValue[index])
  }


  const todosChecked = (index) => {
    if (completedTodos.includes(index)) {
      setCompletedTodos(completedTodos.filter((i) => i !== index));
    } else {
      setCompletedTodos([...completedTodos, index]);
    }
  };


  return (
    <>

      <div className='container-fluid'>
        <div className='container d-flex align-items-center justify-content-center'>
          <div className='todo-container'>
            <h1>Todo List</h1>
            <div className='input-group mb-3 '>
              <input
                type='text'
                className='form-control me-3'
                placeholder='Add a new todo'
                value={todo}
                onChange={handleChange}

              />
              <button className='btn btn-primary' type='button' onClick={handleClick}>
                {editTodo !== null ? "Update" : "Add"}
              </button>


            </div>


            <ul className='list-group'>
              {
                inputValue.map((item, index) =>
                  <li key={index} className='list-group-item mb-2 d-flex justify-content-between align-items-center border-1'>

                    <div>
                      <input
                        type='checkbox'
                        checked={completedTodos.includes(index)}
                        onChange={() => todosChecked(index)}
                      />
                      <span className={completedTodos.includes(index) ? 'line-strike' : ''}>
                        {item}
                      </span>
                    </div>

                    <div className=''>
                      <button className='btn btn-danger btn-sm me-3' onClick={() => handleDelete(index)}>Delete</button>
                      <button className='btn btn-success btn-sm' onClick={() => handleEdit(index)} >Edit</button>
                    </div>

                  </li>)
              }
            </ul>

          </div>
        </div>
      </div>

    </>
  )
}

export default App


{/* <li key={index} className='list-group-item mb-2 d-flex justify-content-between align-items-center border-1'> */ }