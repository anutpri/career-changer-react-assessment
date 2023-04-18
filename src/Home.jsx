import { useEffect, useState } from "react"


const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [sector, setSector] = useState(['React-Assessment']);
  const [showAdmin, setShowAdmin] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [position, setPosition] = useState();

  useEffect(() => {
    
    const storedData = JSON.parse(localStorage.getItem('employees'));
    if (storedData) {
      setEmployees(storedData);
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleClickAdmin = () => {
    setShowAdmin(true);
    setSector('Home-Admin Sector')
  }

  const handleClickUser = () => {
    setShowAdmin(false);
    setSector('Home-User Sector')
  }

  const handleAddUser = () => {
    
    const newEmployee = {
      id: employees.length + 1,
      firstName,
      lastName,
      position
    };
    setEmployees([...employees, newEmployee]);
    setFirstName('');
    setLastName('');
    setPosition('');
    inputName.value = '';
    inputLastName.value = '';
    inputPosition.value = '';

    
  };

  const handleDeleteUser = id => {
    const updatedUsers = employees.filter(employees => employees.id !== id);
    setEmployees(updatedUsers);
  };

  return (
    <div id='bg'>
      <ul>
            <li><a href={'/'}>Home</a></li>
            <li><a href={'/Owner'}>Owner</a></li>
      </ul>
      <hr/>
        <h1 id='head1'>Generation Thailand <br></br> {sector} </h1> 
        <div id='But'>
        <button id='ButUser' onClick={handleClickUser}>User Home Sector</button>
        <button id='ButAdmin' onClick={handleClickAdmin}>Admin Home Sector</button>
        </div>
        {showAdmin ? (<Admin employees={employees} 
            handleAddUser={handleAddUser} 
            handleDeleteUser={handleDeleteUser} 
            setFirstName={setFirstName} 
            setLastName={setLastName} 
            setPosition={setPosition}/>) 
        :(<User employees={employees} handleDeleteUser={handleDeleteUser} />)}
      
    </div>
  )
}

const Admin = ({ employees, handleAddUser, handleDeleteUser, setFirstName, setLastName, setPosition }) => {
  return (
<>
    <br></br>
    <label id='label1'>Create User Here</label>
    
            <div className="input">
              <input id="inputName" type="text" value={employees.firstName} placeholder='Name' onChange={e => setFirstName(e.target.value)} />
              <input id="inputLastName" type="text" value={employees.lastName} placeholder='Last Name' onChange={e => setLastName(e.target.value)} />
              <input id="inputPosition" type="text" value={employees.position} placeholder='Position' onChange={e => setPosition(e.target.value)} />
              <button id="save" onClick={handleAddUser}>Save</button>
      
              
            </div>
    
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
        {employees.map(user => (
        <tr key={user.id}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.position}</td>
        <td><button id='delete' onClick={() => handleDeleteUser(user.id)}>Delete</button></td>
        </tr>
        ))}
        </tbody>
    </table>
    </>
  
  )
}

  const User = ({employees}) => {
    return (
        <>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Last name</th>
            <th>Position</th>
        </tr>
        </thead>
        
        <tbody>
        {employees.map(user => (
        <tr key={user.id}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.position}</td>
        
        </tr>
        ))}
        </tbody>
    </table>
        </>

    )
}




export default Home
