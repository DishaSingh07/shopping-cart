import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SuprSendInbox from "@suprsend/react-inbox";
import "react-toastify/dist/ReactToastify.css"; // needed for toast notifications,

const App = () => {
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
        workspaceKey={process.env.REACT_APP_SUPRSEND_WORKSPACE_KEY}
        subscriberId={process.env.REACT_APP_SUPRSEND_SUBSCRIBER_ID}
        distinctId={process.env.REACT_APP_SUPRSEND_DISTINCT_ID}
      />
    </div>
  );
};

export default App;
