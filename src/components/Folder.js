import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false)
  console.log(explorer);
  if (explorer.isFolder){
    return (
      <div>
        <div className="flex justify-between items-center w-[50%] mb-2 border">
          <span
            className="w-[50%] cursor-pointer"
            onClick={() => setExpand(!expand)}
          >
            📁 {explorer.name}
          </span>
          <div className="">
            <button className="bg-yellow-300 px-2 mr-2">folder</button>
            <button className="bg-[#ccc] px-2">file</button>
          </div>
        </div>
        {expand && (
          <div className="pl-4">
            {explorer.items.map((item, index) => (
              <Folder explorer={item} key={index} />
            ))}
          </div>
        )}
      </div>
    );
  }else{
    return <span className="flex flex-col pl-1 mb-2">📄{explorer.name}</span>;
  }
    
};

export default Folder;
