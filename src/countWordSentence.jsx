import { useState } from "react";
import Swal from "sweetalert2";


export default function CountWorkSentenceUI() {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [sentence, setSentence] = useState(0);

  //text change
  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    // calc words
    const words = inputText.replace(/\s+/g, "");
    setWords(words.length);
    // calc sentence
    const sentence = inputText
      .trim()
      .split(/[.!?](\s|$)/)
      .filter((sentence) => sentence.trim().length > 0);

    setSentence(sentence.length);
  };

  //reset all count and input words
  const handleReset = () => {

    if(text.length === 0){
        Swal.fire("Please type Characters and try again!");
        return
    }
    if (setText("") | setWords(0) | setSentence(0) ) {
    console.log();
    
    
    }else{
        Swal.fire({
            title: "Deleted Succesfull",
            icon: "success",
            draggable: true
          });
    }
  };
  return (
    
    // container
    <div className=" flex flex-col gap-11 lg:flex lg:flex-row justify-center items-center h-[100vh] bg font-['Roboto']">
      <div className=" flex-col  lg:flex lg:flex-row gap-5">
        <div>
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Type your word and sencence"
            className="border-[1px] w-[300px]  h-40 pl-5 border-black overflow-scroll"
            name=""
            id=""
          ></textarea>
        </div>
        {/* word sencence container */}
        <div>
          <div className="w-[300px] h-40 bg-gray-300">
            <h2 className=" text-center text-2xl font-bold pt-2">Result</h2>
            {/* word */}
            <div className="flex gap-3 items-center justify-center">
              <div className="text-center font-bold">
                <p>Characters:</p>
                <span className=" text-center text-3xl">{words}</span>
              </div>
              {/* sentence */}
              <div className="text-center font-bold">
                <p>Sentence:</p>
                <span className="text-center text-3xl">{sentence}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={handleReset}
        className=" border border-white p-2 mx-4 bg-green-500 text-xl font-bold text-white"
      >
        Delete
      </button>
    </div>
  );
}
