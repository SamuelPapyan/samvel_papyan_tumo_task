import React from 'react';
import{
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import StudentsList from "./components/StudentsList";
import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/EditStudent";
import SearchResult from "./components/SearchResult";
import "./App.css";
import ConnectionError from "./components/ConnectionError";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
        <div className="App container">
          <Router>
              <Routes>
                  <Route exact path="/" element={<StudentsList/>}/>
                   <Route path="/create" element={<CreateStudent/>}/>
                  <Route path="/edit/:id" element={<EditStudent/>}/>
                  <Route path="/search" element={<SearchResult/>}/>
                  <Route path="/error" element={<ConnectionError/>}/>
              </Routes> 
          </Router>
        </div>
    );
  }
}

export default App;
