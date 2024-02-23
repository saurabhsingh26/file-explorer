import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  console.log(explorer);
  const handleButtonClick = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };
  const onAddFolder = (e) => {
    if(e.keyCode === 13 && e.target.value){

      
      setShowInput({...showInput, visible: false});
    }
  }
  if (explorer.isFolder) {
    return (
      <div>
        <div
          className=" cursor-pointer flex justify-between items-center w-[50%] mb-2 border"
          onClick={() => setExpand(!expand)}
        >
          <span className="w-[50%]">📁 {explorer.name}</span>
          <div className="">
            <button
              className="bg-yellow-300 px-2 mr-2"
              onClick={(e) => handleButtonClick(e, true)}
            >
              folder
            </button>
            <button
              className="bg-[#ccc] px-2"
              onClick={(e) => handleButtonClick(e, false)}
            >
              file
            </button>
          </div>
        </div>
        {showInput.visible && (
          <div className="ml-4 mb-2">
            <span>{showInput.isFolder ? "📁" : "📄"}</span>
            <input
              className="outline-none border"
              type="text"
              autoFocus
              onKeyDown={onAddFolder}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
            />
          </div>
        )}
        {expand && (
          <div className="pl-4">
            {explorer.items.map((item, index) => (
              <Folder explorer={item} key={index} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <span className="flex flex-col pl-1 mb-2">📄{explorer.name}</span>;
  }
};

export default Folder;
