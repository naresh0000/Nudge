import Sidebar from "./components/Sidebar/Sidebar";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import HistoryPanel from "./components/HistoryPanel/HistoryPanel";

const App = () => {
  return (
    <div className="flex flex-row h-screen w-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Chat Window */}
      <ChatWindow />

      {/* History */}
      <HistoryPanel />
    </div>
  );
};

export default App;
