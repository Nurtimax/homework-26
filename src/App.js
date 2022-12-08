import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/new-quotes" element={<NewQuote />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
          <Route
            path="/quotes/:quoteId"
            element={
              <div className="centered">
                <Link to="comments">Load comments</Link>
              </div>
            }
          />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
