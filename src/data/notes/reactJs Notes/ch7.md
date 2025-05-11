### Ch 7 - CRUD operations, useEffect hook

#### What is useEffect?
- The `useEffect` hook is used to perform side effects in functional components.
- Side effects include data fetching, subscriptions, DOM manipulations, and more.
- It runs after every render by default and can be controlled using dependencies.
- The cleanup function returned by `useEffect` is used to clean up side effects.

#### Example of CRUD Operations with useEffect

In this example, we will create a simple React application that performs CRUD (Create, Read, Update, Delete) operations on a list of videos. Each video will have a title and description, and we will use a form to add new videos and edit existing ones. The data will be managed using the `useState` and `useEffect` hooks.

**App.js**

```jsx
import { useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';

function App() {
    console.log('render App');

    const [videos, setVideos] = useState(videoDB);
    const [editableVideo, setEditableVideo] = useState(null);

    function addVideos(video) {
        setVideos([
            ...videos,
            { ...video, id: videos.length + 1 }
        ]);
    }

    function deleteVideo(id) {
        setVideos(videos.filter(video => video.id !== id));
    }

    function editVideo(id) {
        setEditableVideo(videos.find(video => video.id === id));
    }

    function updateVideo(video) {
        const index = videos.findIndex(v => v.id === video.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, video);
        setVideos(newVideos);
    }

    return (
        <div className="App" onClick={() => console.log('App')}>
            <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
            <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
        </div>
    );
}

export default App;
```

**AddVideo.js**

```jsx
import React, { useState, useEffect } from 'react';

function AddVideo({ addVideos, updateVideo, editableVideo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (editableVideo) {
            setTitle(editableVideo.title);
            setDescription(editableVideo.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [editableVideo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editableVideo) {
            updateVideo({ ...editableVideo, title, description });
        } else {
            addVideos({ title, description });
        }
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter video title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter video description"
                required
            />
            <button type="submit">{editableVideo ? 'Update Video' : 'Add Video'}</button>
        </form>
    );
}

export default AddVideo;
```

**VideoList.js**

```jsx
import React from 'react';

function VideoList({ videos, deleteVideo, editVideo }) {
    return (
        <div>
            {videos.map(video => (
                <div key={video.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <button onClick={() => editVideo(video.id)}>Edit</button>
                    <button onClick={() => deleteVideo(video.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default VideoList;
```

In this example:
- `App.js` manages the state of the videos and handles CRUD operations.
- `AddVideo.js` handles the form for adding and editing videos, using `useEffect` to update the form when editing a video.
- `VideoList.js` displays the list of videos with edit and delete options.

This example demonstrates how to use `useState` and `useEffect` hooks to manage state and side effects in a React application, performing CRUD operations on a list of videos.
