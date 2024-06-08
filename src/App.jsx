import { Route, Routes } from 'react-router'
import { useReducer, useRef, createContext, useState, useEffect } from 'react'
import './App.css'
import Main from './pages/Main'
import Todo from './pages/Todo'
import TodoEdit from './pages/TodoEdit'
import TodoNew from './pages/TodoNew'
import NotFound from './pages/NotFound'
import Board from './pages/Board'
import DiaryEdit from './pages/DiaryEdit'
import DiaryNew from './pages/DiaryNew'

import BoardNew from './pages/BoardNew'
import BoardEdit from './pages/BoardEdit'
import Challenge from './pages/Challenge'
import ChallengeNew from './pages/ChallengeNew'
import ChallengeEdit from './pages/ChallengeEdit'
import Diary from './pages/Diary'


function reducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT": {
      const savedData = JSON.parse(localStorage.getItem("diary")) || [];
      nextState = savedData;
      break;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item)
      break
    }
    default: return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState))
  return nextState
}

function bReducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT": {
      const savedData = JSON.parse(localStorage.getItem("board")) || [];
      nextState = savedData;
      break;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item)
      break
    }
    default: return state;
  }
  localStorage.setItem("board", JSON.stringify(nextState))
  return nextState
}

function CReducer(state, action) {
  let nextState;
  switch (action.type) {
    case "INIT": {
      const savedData = JSON.parse(localStorage.getItem("challenge")) || [];
      nextState = savedData;
      break;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item)
      break
    }
    default: return state;
  }
  localStorage.setItem("challenge", JSON.stringify(nextState))
  return nextState
}


export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();
export const BoardStateContext = createContext();
export const BoardDispatchContext = createContext();
export const ChallengeStateContext = createContext();
export const ChallengeDispatchContext = createContext();


function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const [board, Bdispatch] = useReducer(bReducer, []);
  const [cdata, Cdispatch] = useReducer(CReducer, []);
  const [isDLoading, setIsDLoading] = useState(false);
  const [isBLoading, setIsBLoading] = useState(false);
  const [isCLoading, setIsCLoading] = useState(false);
  const isRef = useRef(0);
  const bRef = useRef(0);
  const cRef = useRef(0);

  useEffect(() => {
    const diary = localStorage.getItem("diary")
    const parsedData = JSON.parse(diary);

    if (!diary) {
      dispatch({
        type: "INIT",
        data: parsedData,
      })
      setIsDLoading(true);

      return;
    }

    let maxId = 0
    if (!Array.isArray(parsedData)) {
      setIsDLoading(false);
      return;
    }
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    })

    isRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    })

    setIsDLoading(true)

  }, [])

  useEffect(() => {
    const board = localStorage.getItem("board")
    const parsedData = JSON.parse(board);

    if (!board) {
      Bdispatch({
        type: "INIT",
        data: parsedData
      })
      setIsBLoading(true);
      return;
    }

    let maxId = 0
    if (!Array.isArray(parsedData)) {
      setIsBLoading(false);
      return;
    }
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    })

    bRef.current = maxId + 1;
    Bdispatch({
      type: "INIT",
      data: parsedData
    })
    setIsBLoading(true)

  }, [bRef.current])

  useEffect(() => {
    const challenge = localStorage.getItem("challenge")
    const parsedData = JSON.parse(challenge);

    if (!challenge) {
      Cdispatch({
        type: "INIT",
        data: parsedData
      })
      setIsCLoading(true);
      return;
    }

    let maxId = 0
    if (!Array.isArray(parsedData)) {
      setIsCLoading(false)
      return;
    }
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    })

    cRef.current = maxId + 1;
    Cdispatch({
      type: "INIT",
      data: parsedData
    })
    setIsCLoading(true)


  }, [cRef.current])


  const onCreate = (createdDate, emotionId, content, todo) => {
    dispatch(
      {
        type: "CREATE",
        data: {
          id: isRef.current++,
          createdDate,
          emotionId,
          content,
          todo,
        },
      }
    )
  }

  const onDelete = (id) => {
    dispatch(
      {
        type: "DELETE",
        id,
      }
    )
  }

  const onUpdate = (id, createdDate, emotionId, content, todo) => {
    dispatch(
      {
        type: "UPDATE",
        data: {
          id, createdDate, emotionId, content, todo,
        },
      }
    )
  }

  const onBoardCreate = (createdDate, title, content, img) => {
    Bdispatch(
      {
        type: "CREATE",
        data: {
          id: bRef.current++,
          createdDate,
          title,
          content,
          img,
        },
      }
    )
  }

  const onBoardDelete = (id) => {
    Bdispatch(
      {
        type: "DELETE",
        id,
      }
    )
  }

  const onBoardUpdate = (id, createdDate, title, content, img) => {
    Bdispatch(
      {
        type: "UPDATE",
        data: {
          id, createdDate, title, content, img,
        },
      }
    )
  }

  const onChallengeCreate = (startDate, subject, state, daily) => {
    Cdispatch(
      {
        type: "CREATE",
        data: {
          id: cRef.current++,
          startDate, subject, state, daily,
        },
      }
    )
  }

  const onChallengeDelete = (id) => {
    Cdispatch(
      {
        type: "DELETE",
        id,
      }
    )
  }

  const onChallengeUpdate = (id, startDate, subject, state, daily) => {
    Cdispatch(
      {
        type: "UPDATE",
        data: {
          id, startDate, subject, state, daily,
        },
      }
    )
  }

  if (!isDLoading) {
    return <div>로딩중입니다</div>
  }
  if (!isBLoading) {
    return <div>로딩중입니다</div>
  }
  if (!isCLoading) {
    return <div>로딩중입니다</div>
  }

  return (
    <>

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete, isRef }}>
          <BoardStateContext.Provider value={board}>
            <BoardDispatchContext.Provider value={{ onBoardCreate, onBoardDelete, onBoardUpdate }}>
              <ChallengeStateContext.Provider value={cdata}>
                <ChallengeDispatchContext.Provider value={{ onChallengeCreate, onChallengeDelete, onChallengeUpdate }}>
                  <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='diary' element={<Diary />} />
                    <Route path='/diary/new' element={<DiaryNew />} />
                    <Route path='/diary/edit/:id' element={<DiaryEdit />} />
                    <Route path='/todo' element={<Todo />} />
                    <Route path='/todo/new' element={<TodoNew />} />
                    <Route path='/todo/edit/:id' element={<TodoEdit />} />
                    <Route path='/board' element={<Board />} />
                    <Route path='/board/new' element={<BoardNew />} />
                    <Route path='/board/edit/:id' element={<BoardEdit />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/challenge' element={<Challenge />} />
                    <Route path='/challenge/new' element={<ChallengeNew />} />
                    <Route path='/challenge/edit/:id' element={<ChallengeEdit />} />
                    <Route path='/challenge/new/edit/:id' element={<ChallengeNew />} />
                  </Routes>
                </ChallengeDispatchContext.Provider>
              </ChallengeStateContext.Provider>

            </BoardDispatchContext.Provider>
          </BoardStateContext.Provider>

        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>

    </>
  )
}

export default App
