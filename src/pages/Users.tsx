import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/shared/Loading";
import Errormsg from "../components/shared/Errormsg";
import Nodata from "../components/shared/Nodata";
import UserList from "../components/posts/UserList";
import { apiCall } from "../utils/Helper";

//const url = "https://dummyapi.io/data/v1/user?limit=10";

export const Users = () => {
  // const [usersData, setUsersData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [errMsg, setErrMsg] = useState(null);

  // const axiosgetdata = () => {
  //   axios.get(url, { headers: { "app-id": "62a2fb1413a915e7dcb7e9cd" } })
  //     .then((res) => {

  //       setIsLoading(false);
  //       setErrMsg(null);
  //       if (res.status === 200) {
  //         setUsersData(res.data.data);
  //       }
  //     })
  //     .catch((error) => {
  //       setErrMsg(error.message || "error found");
  //       console.log("error", error);
  //     });
  // };

  const getusers = async () => {
    const apiConfig:any={
      url:'https://dummyapi.io/data/v1/user?limit=10',
      method:'GET',
      Headers:{"app-id": "62a2fb1413a915e7dcb7e9cd" }
    };
    const response = await apiCall(apiConfig);
     
    console.log(response)

     }
  

  useEffect(() => {
   // setIsLoading(true);
    //axiosgetdata();
    getusers()
    
  }, []);


  // if (isLoading === true) {
  //   return <Loading />;
  // }
  //  else if (isLoading === false && errMsg !== null) {
  //   return (
  //     <div>
  //       <Errormsg />
  //     </div>
  //   );
  // }
  //  else if (isLoading === false && usersData.length === 0) {
  //   return (
  //     <div>
  //       <Nodata />
  //     </div>
  //   ); 
  // } 
  // else if (isLoading === false && usersData.length > 0) {
  //   return (
  //     <div>
  //       <UserList users={usersData} />
  //     </div>
  //  );
  // }


 const renderUsers = () => {

 }


  return (
  <div>

  </div>
  )
};
export default Users;
