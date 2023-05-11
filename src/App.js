import React, { useState } from "react";
import "./App.css";
import "./puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "./doraemon.png";
  
function App() {
    const [text, setText] = useState("Unpuzzle the pieces!!");
      
    const set = () => {
        setText("Congratulations!!");
    };
      
    return (
        <>
            <h2 className="tag">{text}</h2>
            <JigsawPuzzle
                imageSrc={img}
                rows={16}
                columns={16}
                onSolved={set}
                className="jigsaw-puzzle"
            />
        </>
    );
}
  
export default App;