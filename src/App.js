import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import {atomDate} from "../src/recoiljs/atoms"
import { useRecoilValue } from 'recoil';
import {selectorDate} from "../src/recoiljs/selectAtoms"
import FixedHeader from "./components/FixedHeader";
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
const App = () => {
  const dateString = new Date();
  const validDate=dateString.toString().split(" ").splice(0,5).join(" ")
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Demo Note Can Be deleted",
      date: validDate,
    },
  ]);

 const [reloadCheck,setReloadCheck]=useState(true)
 const getAtomDate=useRecoilValue(selectorDate)

  function refreshPage() {
   
  }


  const addNote = (text) => {
    const date = new Date();
    const validDate=date.toString().split(" ").splice(0,5).join(" ")
    // console.log(validDate)
    var newNote = {
      id: nanoid(),
      text: text,
      date: validDate,
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

  for(var i=0;i<edittedNotes.length;i++){
    if(edittedNotes[i].id===id){
      edittedNotes[i].text=text;
    }
  }

  setNotes(edittedNotes)
  localStorage.setItem("react_notes_data",JSON.stringify(notes));
  setLocalStorageValues(JSON.parse(localStorage.getItem("react_notes_data")))
  // console.log(notes)
  refreshPage()
  }

  var searchDate=useRecoilValue(selectorDate);

  // search hook
  const [searchtext, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
   
   if(!reloadCheck){
    //  console.log(reloadCheck,"reload")
      localStorage.setItem("toggle",darkMode)
      
   }
  },[darkMode])

  const [localStorageValues,setLocalStorageValues]=useState(JSON.parse(localStorage.getItem("react_notes_data")))

  useEffect(() => {
  
    const saveNotes = localStorageValues;

    if (saveNotes) {
      setNotes(saveNotes);
    }

    localStorage.getItem("toggle")==="false" || localStorage.getItem("toggle")===null?setDarkMode(false):setDarkMode(true)
    // console.log(localStorage.getItem("toggle"))
    setReloadCheck(!reloadCheck)
  }, [localStorageValues]);

  useEffect(() => {
    localStorage.setItem("react_notes_data", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div id="base_container" className={`${darkMode && "dark-mode"} base_container`}>
        <div className="container">
          <FixedHeader>
          <Header handleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          </FixedHeader>
          <NotesList
            notes={notes.filter((note) =>
              {
                return searchDate==="dd-mm-yyyy" || searchDate===''? note.text.toLowerCase().includes(searchtext.toLowerCase()):(note.date.toLowerCase().includes(searchDate.toLowerCase()) && note.text.toLowerCase().includes(searchtext.toLowerCase()))
              }
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            handleEditNote={editNote}
            currentDate={atomDate}
          />
        </div>
      </div>
    </>
  );
};

export default App;
