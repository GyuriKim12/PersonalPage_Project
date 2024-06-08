import { useNavigate, useParams } from "react-router";
import TodoWriting from "../components/Todo/TodoWriting";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const TodoEdit = () => {
    const params = useParams();
    const data = useContext(DiaryStateContext)
    const [state, setState] = useState()
    const { onUpdate } = useContext(DiaryDispatchContext)
    const nav = useNavigate()
    const edit = true;

    useEffect(() => {
        const currentItem = data.find((item) => String(item.id) === String(params.id))
        if (!currentItem) {
            window.alert("존재하지 않는 창 입니다")
            nav('/todo', { replace: true })
        }
        setState(currentItem)
    }, [data, params.id])

    const onSubmit = (input) => {

        const item = data.find((item) => {
            return new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString();
        });

        const todo = item ? item.todo : [];
        todo.push(input.todo[0]);
        const content = item ? item.content : "";
        const emotionId = item ? item.emotionId : 2;
        onUpdate(input.createdDate.getTime(), emotionId, content, todo)

    }

    const onUpdateTodo = (data, input, index) => {
        console.log(data);
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
        const intidata = data.find((item) => Number(item.id) === Number(id))
        const totalTodoCount = intidata.todo.length;
        const completedTodoCount = intidata.todo.filter(todo => todo.ischecked).length;
        return totalTodoCount === 0 ? 0 : (completedTodoCount / totalTodoCount) * 100
    }


    return <div>
        <TodoWriting onSubmit={onSubmit} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} initData={state} edit={edit} onProcess={onProcess} />
    </div>
}

export default TodoEdit;