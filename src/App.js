import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Example1 = lazy(() => import("./views/example1"));

const appRoutes = () => (
  <Router>
    <Suspense fallback={"...Loading..."}>
      <Routes>
        <Route path="/" element={<Example1 />} />
      </Routes>
    </Suspense>
  </Router>
);

export default appRoutes;
