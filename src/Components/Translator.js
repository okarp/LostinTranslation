import React, { useState } from "react";
import '../styles/Translator.css'

function Translator() {
  //state for form input
  const [formInputValue, setFormInputValue] = useState("")
  //array for translation characters. Maps 1:1 to image paths (e.g. for input b we want b.png)
  const [imagePaths, setImagePaths] = useState([])    
  console.log(imagePaths)
  
  //handling form submission
  const handleSubmit = () => {  
    //if local stoarge has no translations add current one
    //translations are saved as a string, each translation is seperated with ';' 
    if (localStorage.getItem('translates') === null){
      localStorage.setItem('translates', formInputValue);
    //else get the translations and add a new one
    }else{
      let translates = localStorage.getItem('translates')
      //split translations into an array
      let translateArray = translates.split(";")
      //max history of translations is 10. Remove the oldest one if history is full.
      if (translateArray.length > 9){
          translateArray.shift();
          translates = translateArray.join(";")        
      }   
      //add new translation, use ';' as seperator
      translates += ";" + formInputValue
      localStorage.setItem('translates', translates);
  }
    //set the value of displayed translation images
    setImagePaths(formInputValue.split(""))     
}


//for each character in imagePaths array construct a <img>, use the character as path value, e.g.
//character b maps to 'resources/signimgs/b.png'
const listImages = imagePaths.map((imagePath, i) =>  
    <img key={i} src={'../resources/signimgs/' + imagePath + '.png'} alt={imagePath}></img>
);

  return (       
    <div className="Translator"> 
    <div id="textbox">      
      <span id="textelement2">By pressing 'translate' the translation input will be translated and saved to your user account.<br/> Visit the profile section to see your last 10 queries</span>
      </div>
      <div id="formDiv">
      <form id="translateForm">                 
          <input type="text" value={formInputValue} onChange={e => (setFormInputValue(e.target.value))} />        
          <div id="buttonDiv"><button type="button" id="button" onClick={handleSubmit}>Translate</button></div>
      </form>
      </div>      
     
        {imagePaths.length > 0 &&       
           <div id="translationBox">
             <div><span id="textelement2">Translation for '{imagePaths}'</span></div>
             <div>{listImages}</div>            
           </div>  
      }               
    </div> 
  );
}

export default Translator;
