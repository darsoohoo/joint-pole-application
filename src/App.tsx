import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyTable from './Components/Table'
import { Office365UsersService } from './generated/services/Office365UsersService';
import type { User } from './generated/models/Office365UsersModel';


import './App.css'

const profile = (await Office365UsersService.MyProfile_V2("id,displayName,jobTitle,id,userPrincipalName")).data;


function App() {



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to {profile.displayName} learn more
      </p>
      <div className="card">
        <MyTable />
      </div>

    </>
  )
}

export default App
