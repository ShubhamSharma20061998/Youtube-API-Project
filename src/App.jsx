import React, { lazy, Suspense } from "react";
import VideoProvider from "./apis/VideoContext";
import Child from "./components/Child";
import Header from "./components/header/Header";
import VideoMain from "./components/videos/VideoMain";
// let VideoMain = lazy(() => {
//   import("./components/videos/VideoMain");
// });
// let Header = lazy(() => {
//   import("./components/header/Header");
// });

const App = () => {
  return (
    <VideoProvider>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Header />
      <VideoMain />
      <Child/>
      {/* </Suspense> */}
    </VideoProvider>
  );
};

export default App;
