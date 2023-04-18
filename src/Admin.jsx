// import { useContext } from "react"
// import { Context } from "./UserContext"
import { useEffect, useState } from "react"
import Layout from './Layout';
import NavBody from './NavBody';

const Admin = () => {
    
    return (
        <Layout>
        <h1>Generation Thailand <br></br> Home-Admin Sector</h1> 
        <NavBody />
        
        <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Last name</th>
        <th>Position</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
  </Layout>
    )
}

export default Admin