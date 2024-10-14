
export default  function User ({user}){
    const {
       avatar_url,
        bio,
         following,
          followers,
          location,
           public_repos,
           name,
            login, 
            created_at
    }  = user;
    
   
    const createdDate = new Date(created_at);
   
   return (
       <div className="user">
       <div>
           <img src= {avatar_url} className="avtar" alt="User"></img>
       </div>
       <div>
           <div className="name-container">
           <a href={`https://github.com/${login}`}> {name || login }</a>
           <p>
                User Joined on {" "}
                {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us",{
               month :"short",
   
           })} ${createdDate.getFullYear()}`}
           </p>
       </div>
       <div className="profile-info">
       <div>
               <p>Bio</p>
               <p>{bio}</p>
           </div>
           <div>
               <p>Public Repos</p>
               <p>{public_repos}</p>
           </div>
           <div>
               <p>Following</p>
               <p>{following}</p>
           </div>
           <div>
               <p>Followers</p>
               <p>{followers}</p>
           </div>
           <div>
               <p>Location</p>
               <p>{location}</p>
           </div>
   </div>
   </div>
   </div>
   );
       }
   