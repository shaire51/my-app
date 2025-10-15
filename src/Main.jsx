import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  //                                         __----~~~~~~~~~~~------___
  //                                   .  .   ~~//====......          __--~ ~~
  //                   -.            \_|//     |||\\  ~~~~~~::::... /~
  //                ___-==_       _-~o~  \/    |||  \\            _/~~-
  //        __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
  //    _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
  //  .~       .~       |   \\ -_    /  /-   /   ||      \   /
  // /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
  // |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
  //          '         ~-|      /|    |-~\~~       __--~~
  //                      |-~~-_/ |    |   ~\_   _-~            /\
  //                           /  \     \__   \/~                \__
  //                       _--~ _/ | .-~~____--~-/                  ~~==.
  //                      ((->/~   '.|||' -_|    ~~-/ ,              . _||
  //                                 -_     ~\      ~~---l__i__i__i--~~_/
  //                                 _-~-__   ~)  \--______________--~~
  //                               //.-~~~-~_--~- |-------~~~~~~~~
  //                                      //.-~~~--\
  //                               神獸保佑，程式碼沒Bug!
);
