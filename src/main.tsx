import React from "react";
import ReactDOM from "react-dom/client";
import { StarRating } from "./StarRating";
// import App from './App.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
      defaultRating={4}
    />
    <StarRating maxRating={5} size={24} color="blue" className="test" />
  </React.StrictMode>
);
