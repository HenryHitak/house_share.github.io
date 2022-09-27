import {createContext, useContext} from 'react';
const userContext = createContext();

function ProfileInfo(props){
    const loggedUser = loggedUser;
    const user = useContext(userContext);
    return(
        <>
            <img src= "./img/profile_img/{loggeduser.profimg}"/>
            <h1>Hi, I'm {loggedUser.firstName}</h1>
            <div>
                {loggedUser.atype === 'student' ? <button type="button">Student</button>: loggedUser.atype === 'landlord' ? <button type="button">Landlord</button>: null}
            </div>
            <div>
                {loggedUser.badge1 === 'waiting'? <button type='button'>Waiting</button>: loggedUser.badge1 === 'submitted'? <button type='button'>Verified</button>: null}
                {loggedUser.badge2 === 'waiting'? <button type='button'>Waiting</button>: loggedUser.badge2 === 'submitted'? <button type='button'>Verified</button>: null}
            </div>
            <p>{loggedUser.profileContent}</p>
        </>
    )
} 
function Profile(props){
    const loggedUser = props.loggedUser;
    return(
        <>
             <userContext.Provider value={loggedUser}>
                <ProfileInfo/>
             </userContext.Provider>
         </>
    )
}
export default Profile;