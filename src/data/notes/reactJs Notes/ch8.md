### Ch 8 - useReducers for State management

#### What is State Management?
- State management refers to the practice of managing the state of an application.
- In React, state management can be done using local component state, context API, or state management libraries like Redux, MobX, or Zustand.
- Effective state management ensures that the application state is predictable, maintainable, and scalable.

#### What is useReducer? 
- The `useReducer` hook is an alternative to `useState` for managing complex state logic in React.
- It is based on the reducer pattern used in JavaScript and other programming languages.
- `useReducer` takes a reducer function and an initial state as arguments and returns the current state and a dispatch function.
- The reducer function takes the current state and an action as arguments and returns the new state based on the action type.

#### Example of useReducer Hook

In this example, we will use the `useReducer` hook to manage the state of a list of videos. The reducer function will handle actions for adding, deleting, and updating videos.

**App.js**

```jsx
import { useReducer, useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';

function App() {
    console.log('render App');
    const [editableVideo, setEditableVideo] = useState(null);

    function videoReducer(videos, action) {
        switch (action.type) {
            case 'ADD':
                return [
                    ...videos,
                    { ...action.payload, id: videos.length + 1 }
                ];
            case 'DELETE':
                return videos.filter(video => video.id !== action.payload);
            case 'UPDATE':
                const index = videos.findIndex(v => v.id === action.payload.id);
                const newVideos = [...videos];
                newVideos.splice(index, 1, action.payload);
                setEditableVideo(null);
                return newVideos;
            default:
                return videos;
        }
    }

    const [videos, dispatch] = useReducer(videoReducer, videoDB);

    function editVideo(id) {
        setEditableVideo(videos.find(video => video.id === id));
    }

    return (
        <div className="App" onClick={() => console.log('App')}>
            <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
            <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>
        </div>
    );
}

export default App;
```

In this example:
- `App.js` uses the `useReducer` hook to manage the state of the videos.
- The `videoReducer` function handles actions for adding, deleting, and updating videos.
- The `dispatch` function is used to dispatch actions to the reducer.
- The `editVideo` function sets the video to be edited.

This example demonstrates how to use the `useReducer` hook for state management in a React application, providing a more structured approach to handling complex state logic.
