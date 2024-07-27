import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SuprSendInbox from "@suprsend/react-inbox";
import "react-toastify/dist/ReactToastify.css"; // needed for toast notifications
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const workspaceKey = process.env.REACT_APP_SUPRSEND_WORKSPACE_KEY;
  const distinctId = uuidv4(); // Generate a unique identifier
  const subscriberId = uuidv4(); // Generate a unique identifier

  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <SuprSendInbox
        workspaceKey={workspaceKey}
        subscriberId={subscriberId}
        distinctId={distinctId}
      />
    </div>
  );
};

export default App;
