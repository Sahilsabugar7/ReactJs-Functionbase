import "./App.css";

import React, {useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const pageNo=0;
  const apiKeys= process.env.REACT_APP_NEWS_API;

  const [progress,setProgress]= useState(0);
  return (
    <div>
        <NavBar />
        <LoadingBar
        color='#004d66'
        progress={progress}
      />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setProgress}  apiKeys={apiKeys} key='genral' pagesize={pageNo} contry="in" category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={setProgress} apiKeys={apiKeys}key={'business'}pagesize={pageNo}  contry={"in"} category={"business"} />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={setProgress} apiKeys={apiKeys}key={'entertainment'}pagesize={pageNo}  contry={"in"} category={"entertainment"} />
            }
          />
          <Route
            exact
            path="/helth"
            element={<News setProgress={setProgress} apiKeys={apiKeys}key={'health'}pagesize={pageNo}  contry={"in"} category={"health"} />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={setProgress} apiKeys={apiKeys}key={'science'}pagesize={pageNo}  contry={"in"} category={"science"} />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={setProgress} apiKeys={apiKeys}key={'sports'}pagesize={pageNo}  contry={"in"} category={"sports"} />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News setProgress={setProgress} apiKeys={apiKeys}pagesize={pageNo}  key={'technology'} contry={"in"} category={"technology"} />
            }
          />
        </Routes>
     
    </div>
  );
}

export default App;


// import "./App.css";

// import React, { Component } from "react";
// import NavBar from "./components/NavBar";
// import News from "./components/News";
// import { Routes, Route } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
// export default class App extends Component {

//   pageNo=12;
//   apiKeys= process.env.REACT_APP_NEWS_API


//   state ={
//     progress:0
//   }

//   setProgress=(progress)=>{
//     this.setState({progress:progress})
//   }

//   render() {
//     return (
//       <div>
//         <NavBar />
//         <LoadingBar
//         color='#004d66'
//         progress={this.state.progress}
//       />
//         <Routes>
//           <Route
//             exact
//             path="/"
//             element={<News setProgress={this.setProgress}  apiKeys={this.apiKeys} key={'genral'} pagesize={this.pageNo} contry={"in"} category={"general"} />}
//           />
//           <Route
//             exact
//             path="/business"
//             element={<News setProgress={this.setProgress} apiKeys={this.apiKeys}key={'business'}pagesize={this.pageNo}  contry={"in"} category={"business"} />}
//           />
//           <Route
//             exact
//             path="/entertainment"
//             element={
//               <News setProgress={this.setProgress} apiKeys={this.apiKeys}key={'entertainment'}pagesize={this.pageNo}  contry={"in"} category={"entertainment"} />
//             }
//           />
//           <Route
//             exact
//             path="/helth"
//             element={<News setProgress={this.setProgress} apiKeys={this.apiKeys}key={'health'}pagesize={this.pageNo}  contry={"in"} category={"health"} />}
//           />
//           <Route
//             exact
//             path="/science"
//             element={<News setProgress={this.setProgress} apiKeys={this.apiKeys}key={'science'}pagesize={this.pageNo}  contry={"in"} category={"science"} />}
//           />
//           <Route
//             exact
//             path="/sports"
//             element={<News setProgress={this.setProgress} apiKeys={this.apiKeys}key={'sports'}pagesize={this.pageNo}  contry={"in"} category={"sports"} />}
//           />
//           <Route
//             exact
//             path="/technology"
//             element={
//               <News setProgress={this.setProgress} apiKeys={this.apiKeys}pagesize={this.pageNo}  key={'technology'} contry={"in"} category={"technology"} />
//             }
//           />
//         </Routes>
//       </div>
//     );
//   }
// }