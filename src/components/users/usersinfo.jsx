import React, { useEffect, useState } from "react"
import "./usersinfo.css"

const Userinfo = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="info">
       <div className="info-wrapper">
           {users.length > 0 && (
          <table>
             <h1>All Customers</h1>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Street</th>
              </tr>
             {users.map(user => (
               <tr className="title" key={user.id}> 
                  <td>{user.name}</td>
                  <td>{user.company.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.address.street}</td>
               </tr>
                ))}

          </table>
      )}
       </div>

    </div>

  );
}

export default Userinfo