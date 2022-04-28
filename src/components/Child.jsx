import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { VideoContext } from "../apis/VideoContext";

const Child = () => {
  let { showLogin, setShowLogin } = useContext(VideoContext);
  if (!showLogin) {
    return null;
  }
  return ReactDOM.createPortal(
    <div
      className="w-[100%] h-[90vh] flex justify-center items-center inset-0 fixed"
      onClick={() => {
        setShowLogin(false);
      }}
    >
      <div
        className="bg-[#0a0728] w-[400px] text-white font-mono h-[250px] text-center rounded-[10px] p-[10px]"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <h2>Login</h2>
        <form>
          <div className="flex flex-col items-center gap-y-5">
            <input
              type="text"
              placeholder="username"
              className="w-[300px] rounded-md text-center border border-[white] bg-transparent mt-5 py-2"
            />
            <input
              type="password"
              placeholder="password"
              className="w-[300px] rounded-md text-center border border-[white] bg-transparent mt-5 py-2"
            />
          </div>
          <button
            className="mt-5 border p-2 rounded-xl px-5 login_button"
            onClick={e => {
              e.preventDefault();
            }}
          >
            login
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("childRoot")
  );
};
export default Child;
