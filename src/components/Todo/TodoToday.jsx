import './TodoToday.css'
import { useContext } from 'react';
import { DiaryDispatchContext } from '../../App';

const TodoToday = ({ id, createdDate, emotionId, content, todo, data, onUpdateTodo, onDeleteTodo }) => {

    return (
        <div className="todoToday">
            {todo.map((todoItem, index) => (
                <div className="item"
                    key={index}>
                    <input readOnly type="checkbox"
                        onChange={() => {
                            onUpdateTodo(data, todo[index], index)
                        }}
                        checked={todoItem.ischecked} />
                    <label>{todoItem.item}</label>
                    <button onClick={() => {
                        onDeleteTodo(data, todo[index], index)
                    }}>🗑️</button>
                </div>
            ))}
        </div>
    );
}

export default TodoToday;