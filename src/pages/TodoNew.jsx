import TodoWriting from "../components/Todo/TodoWriting";
import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { DiaryDispatchContext } from "../App";

const TodoNew = () => {
    const data = useContext(DiaryStateContext)
    const [state, setState] = useState()

    const { onCreate, onUpdate } = useContext(DiaryDispatchContext)
    const edit = false;


    const onSubmit = (input) => {
        const exist = data.some((item) => {
            console.log(new Date(item.createdDate).toLocaleDateString())
            return new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString()
        })

        const item = data.find((item) => {
            return new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString();
        });

        console.log(item)
        const todo = item ? item.todo : [];
        console.log(todo)
        todo.push(input.todo[0]);
        console.log(input.todo);
        const content = item ? item.content : "";
        const emotionId = item ? item.emotionId : 2;


        console.log(exist)
        console.log(new Date(input.createdDate).toLocaleDateString())
        if (exist === true) {
            console.log("날짜 존재 함")
            console.log(input)
            onUpdate(input.createdDate.getTime(), emotionId, content, todo)
        }
        else {
            console.log(input)
            console.log("날짜 존재 안함")
            onCreate(input.createdDate.getTime(), emotionId, content, input.todo)
        }

    }

    const onUpdateTodo = (data, input, index) => {
        // input과 item과 isChecked가 같은 값을 찾아내서 isChecked를 반대로 바꿈
        // 그리고 onUpdate 실행시킴
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
        console.log(findData)
        findData.forEach((item) => {
            onUpdate(item.id, item.createdDate, item.emotionId, item.content, item.todo);
        });
    }

    const onDeleteTodo = (data, input, index) => {
        console.log('삭제', index)
        const findData = data.map((item) => ({
            ...item,
            todo: item.todo.filter((todoItem, todoIndex) => {
                return !(todoIndex === index && todoItem.item === input.item && todoItem.ischecked === input.ischecked);
            })
        }));
        console.log(findData)
        findData.forEach((item) => {
            onUpdate(item.id, item.createdDate, item.emotionId, item.content, item.todo);
        });
    }

    const onProcess = (id) => {
        console.log('data', data)
        const intidata = data.find((item) => Number(item.id) === Number(id))
        const totalTodoCount = intidata.todo.length;
        const completedTodoCount = intidata.todo.filter(todo => todo.ischecked).length;
        return totalTodoCount === 0 ? 0 : (completedTodoCount / totalTodoCount) * 100
    }

    return <div><TodoWriting onSubmit={onSubmit} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} edit={edit} onProcess={onProcess} /></div>
}

export default TodoNew;