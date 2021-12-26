import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Demo Note Can Be deleted",
      date: "16/08/2021",
    },
  ]);

 const [reloadCheck,setReloadCheck]=useState(true)

 const[isEdit,setisEdit]=useState(false)



  function refreshPage() {
    window.location.reload(false);
  }


  const addNote = (text) => {
    const date = new Date();
    var newNote = {
      id: nanoid(),
      text: text,
      date: date.toDateString()+"  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),
    };
    
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const editNote = (id,text) => {
    const edittedNotes=notes;
    // console.log(edittedNotes)
    // console.log(id,"ID")
    // console.log(text,"TEXT")

  for(var i=0;i<edittedNotes.length;i++){
    if(edittedNotes[i].id===id){
      edittedNotes[i].text=text;
    }
  }

  setNotes(edittedNotes)
  localStorage.setItem("react_notes_data",JSON.stringify(notes));
  // console.log(notes)
  refreshPage()

 

  }

  // search hook
  const [searchtext, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
   
   if(!reloadCheck){
    //  console.log(reloadCheck,"reload")
      localStorage.setItem("toggle",darkMode)
      
   }
  },[darkMode])


  useEffect(() => {
  
    const saveNotes = JSON.parse(localStorage.getItem("react_notes_data"));

    if (saveNotes) {
      setNotes(saveNotes);
    }

    localStorage.getItem("toggle")==="false" || localStorage.getItem("toggle")===null?setDarkMode(false):setDarkMode(true)
    // console.log(localStorage.getItem("toggle"))
    setReloadCheck(!reloadCheck)
  }, []);

  useEffect(() => {
    localStorage.setItem("react_notes_data", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div id="base_container" className={`${darkMode && "dark-mode"} base_container`}>
        <div className="container">
          <Header handleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchtext.toLowerCase())
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            handleEditNote={editNote}
            setisEdit={setisEdit}
            isEdit={isEdit}
          />
        </div>
      </div>
    </>
  );
};

export default App;
