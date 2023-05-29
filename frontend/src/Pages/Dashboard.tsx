import { useEffect, useState } from 'react'

const Dashboard = () => {

  // const [name, setName] = useState();
  
  // useEffect(() => {
  //   (
  //     async () => {
  //       const response = await fetch('http://localhost:8000/api/user',{
  //         headers: {
  //           'Content-type' : 'application/json',
  //           'Authentication': '',
  //           'Accept' : 'application/json'
  //         },

  //       });

  //       const content = await response.json();

  //       setName(content.name);



  //     }
  //   )()
  // })
  return (
    <div>
      {/* {name ? 'hi' + name : "you are not login"} */} Dashboard
    </div>
  )
}

export default Dashboard
