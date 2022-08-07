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
import { ToastContainer, toast } from 'material-react-toastify';
const App = () => {

 useEffect(() =>{
//   document.onkeydown = (e) => {
//     if (e.ctrlKey && e.key === 's') {
//       e.preventDefault();
//       console.log('CTRL + S');
//       var focused_element = null;
// if (
//     document.hasFocus() &&
//     document.activeElement !== document.body &&
//     document.activeElement !== document.documentElement
// ) {
//     focused_element = document.activeElement.tagName;

//    let element=document.getElementsByTagName(focused_element).nextSibling;
//     console.log(element)


// }
//     }
//   }
 },[])

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

  const addNote = (text) => {
    const date = new Date();
    const validDate=date.toString().split(" ").splice(0,5).join(" ")

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
    notify("Note Deleted Successfully !......","delete")
  };

  const editNote = (id,text,isClicked) => {
    const edittedNotes=notes;

  for(var i=0;i<edittedNotes.length;i++){
    if(edittedNotes[i].id===id){
      edittedNotes[i].text=text;
    }
  }

  setNotes(edittedNotes)
  localStorage.setItem("react_notes_data",JSON.stringify(notes));
  setLocalStorageValues(JSON.parse(localStorage.getItem("react_notes_data")))

  if(isClicked) 
  {
    notify("Note Saved Successfully !......","save")
  }
  
}

  var searchDate=useRecoilValue(selectorDate);

  // search hook
  const [searchtext, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
   
   if(!reloadCheck){
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
    setReloadCheck(!reloadCheck)
  }, [localStorageValues]);

  useEffect(() => {
    localStorage.setItem("react_notes_data", JSON.stringify(notes));
  }, [notes]);


  const notify=(text,type)=>{
    if(type==="save"){
        toast.success(text,{
        position:"bottom-right"
    })
    }
    else if(type==="delete"){
        toast.error(text,{
            position:"bottom-right"
        })
    }
    
}


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
          <ToastContainer draggable autoClose={1000}/>
        </div>
      </div>
    </>
  );
};

export default App;
