import React, {useState} from 'react';
import axios from 'axios';
import './App.css';


import Cards from './MyComponents/Cards';
import Footer from './MyComponents/Footer';


function App() {
   const [users, setUsers] = useState({ data: [] })
   const [toggler, setToggler] = useState({loader: false, showInfo: true})


   function fetchUsers() {
      setToggler({loader: true, showInfo: false});

      setTimeout(async () => {
         try {
            await axios
               .get("https://reqres.in/api/users?page=1")
               .then((res) => {
                  console.log(res)
                  setUsers(res.data);
                  setToggler({loader: false});
               });
         } catch (e) {
            console.log(e)
         }
      }, 2000)
   }


   return (
      <>
         <header>
            <nav className="navbar navbar-light">
               <div className="container-fluid">
                  <span className="navbar-brand">LetsGrowMore</span>
                  <button className="btn btn-outline-success" onClick={fetchUsers}>Get Users</button>
               </div>
            </nav>
         </header>

         <Cards toggler={toggler} users={users.data} />
         <Footer />
      </>
   )
}

export default App;
