import TodoWriting from "../components/Todo/TodoWriting";
import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";
import { DiaryDispatchContext } from "../App";

const TodoNew = () => {
    const data = useContext(DiaryStateContext)

    const { onCreate, onUpdate } = useContext(DiaryDispatchContext)
    const edit = false;


    const onSubmit = (input) => {
        const exist = data.some((item) => {
            return new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString()
        })

        const item = data.find((item) => {
            return new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString();
        });

        const todo = item ? item.todo : [];
        todo.push(input.todo[0]);
        const content = item ? item.content : "";
        const emotionId = item ? item.emotionId : 2;

        if (exist === true) {
            onUpdate(input.createdDate.getTime(), emotionId, content, todo)
        }
        else {
            onCreate(input.createdDate.getTime(), emotionId, content, input.todo)
        }

    }

    const onUpdateTodo = (data, input, index) => {
        const findData = data.map((item) => ({
            ...item,
            todo: item.todo.map((todoItem, todoIndex) => { // 두 번째 매개변수로 현재 요소의 인덱스를 전달받음
                if (todoIndex === index && todoItem.item === input.item && todoItem.ischecked === input.ischecked) {
                    return { ...todoItem, ischecked: !todoItem.ischecked };
                } else {
                    return todoItem;
                }
            })
        }));

        findData.forEach((item) => {
            onUpdate(item.id, item.createdDate, item.emotionId, item.content, item.todo);
        });
    }

    const onDeleteTodo = (data, input, index) => {
        const findData = data.map((item) => ({
            ...item,
            todo: item.todo.filter((todoItem, todoIndex) => {
                return !(todoIndex === index && todoItem.item === input.item && todoItem.ischecked === input.ischecked);
            })
        }));
        findData.forEach((item) => {
            onUpdate(item.id, item.createdDate, item.emotionId, item.content, item.todo);
        });
    }

    const onProcess = (id) => {
        const intidata = data.find((item) => Number(item.id) === Number(id))
        const totalTodoCount = intidata.todo.length;
        const completedTodoCount = intidata.todo.filter(todo => todo.ischecked).length;
        return totalTodoCount === 0 ? 0 : (completedTodoCount / totalTodoCount) * 100
    }

    return <div><TodoWriting onSubmit={onSubmit} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} edit={edit} onProcess={onProcess} /></div>
}

export default TodoNew;