import SideBar from "./SideBar"

import Chat from "./Chat"



const AuthenticatedApp = () => {
  

  
  
  return (
    <div className='grid grid-cols-[350px_1fr]' >
        <SideBar />
        <Chat/>
    </div>
  )
}
export default AuthenticatedApp