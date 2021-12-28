import React from 'react';
import './styles.css';


export default function Cards(props) {

   return (
      <div className="body">
         { props.toggler.showInfo ?
                <h4 className="info">Please Click on "Get Users".</h4> :
         props.toggler.loader ?
            <>
               <div className="loader">
                  <i className="fas fa-cog fa-spin"></i>
                  <p>Almost there ...</p>
               </div>
            </>
            :
            <div className="cards-container">
                  {props.users.map((user) => (
                        <div key={user.id} className="profile">
                           <img src={user.avatar} alt='img' className="avatar"/>
                           <p>User ID: {user.id}</p>
                           <h4 className="name">{user.first_name} {user.last_name} </h4>
                           <p className="email">{user.email}</p>
                        </div>
                  ))}
            </div>
         }
      </div>
   )
}