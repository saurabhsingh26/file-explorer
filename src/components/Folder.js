import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleButtonClick = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };
  
  const onAddFolder = (e, explorer) => {
    if (e.keyCode === 13 && e.target.value) {
      if(showInput.isFolder){
        explorer.items.unshift({
        id: new Date().getTime(),
        name: e.target.value,
        isFolder: true,
        items: [],
      });
      }else{
        explorer.items.push({
        id: new Date().getTime(),
        name: e.target.value,
        isFolder: false,
        items: [],
      });
      }
      
      setShowInput({ ...showInput, visible: false });
    }
  };
  
  if (explorer.isFolder) {
    return (
      <div className="w-[95%]">
        <div
          className="cursor-pointer flex justify-between items-center mb-2 border hover:bg-[#F2F2F2]"
          onClick={() => setExpand(!expand)}
        >
          <span className="w-[50%]">📁 {explorer.name}</span>
          <div className="flex justify-between items-center gap-1">
            {/* <button
              className="bg-yellow-300 px-2 mr-2"
              onClick={(e) => handleButtonClick(e, true)}
            > */}

            {/* </button> */}
            {/* <button
              className="bg-[#ccc] px-2"
              onClick={(e) => handleButtonClick(e, false)}
            >
              file
            </button> */}

            <img
              src="https://cdn-icons-png.flaticon.com/128/8834/8834889.png"
              alt="folder"
              className="w-6 h-6"
              onClick={(e) => handleButtonClick(e, true)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/4210/4210025.png"
              alt="file"
              className="w-6 h-6"
              onClick={(e) => handleButtonClick(e, false)}
            />
          </div>
        </div>
        {showInput.visible && (
          <div className="ml-4 mb-2">
            <span>{showInput.isFolder ? "📁" : "📄"}</span>
            <input
              className="outline-none border"
              type="text"
              autoFocus
              onKeyDown={(e) => onAddFolder(e, explorer)}
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
    return <span className="flex flex-col pl-1 mb-2">📄 {explorer.name}</span>;
  }
};

export default Folder;
