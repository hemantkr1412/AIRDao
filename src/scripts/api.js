const API_URL = "https://xenplay.xyz/api/v1/event/";



const API = () =>{
    const getEvent = async () => {
      await fetch(API_URL + "event/")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const responseData = data.results;
          console.log(responseData);
          
          return responseData;

        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };


return {
  getEvent,
};

}

export default API;


