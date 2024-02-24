import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
function App() {
  // eslint-disable-next-line no-unused-vars
  const [explorerData, setExplorerData] = useState(explorer);

  return (
      <div className="mt-5 mx-5">
        <Folder explorer={explorerData} />
      </div>
  );
}

export default App;
