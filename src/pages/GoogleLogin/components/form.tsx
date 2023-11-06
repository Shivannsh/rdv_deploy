
import "./form.css";
import React from "react";
const SCOPES = "https://www.googleapis.com/auth/drive";

const GoogleForm = () => {
  // const navigate = useNavigate();
  // React.useEffect(logoutGuard(useNavigate()), []);
	// React.useEffect(()=>{document.title = "User Login"}, []);
  // const [user, setUse] = useState({});
  // const [tokenClient, setTokenClient] = useState({});
  // const [isButtonHovered, setIsButtonHovered] = useState(false);

  // function handleCallbackResponse(response:any){
  //   console.log(response.credential);
  //   var userObject = jwt_decode(response.credential)
  //   console.log(userObject);
    
  // }
  // function createDriveFile() {
  //   tokenClient.requestAccessToken();
    
  // }
  

  // useEffect(()=>{
  //   /* global google */

  //   const google = window.google ;
  //   google.accounts.id.initialize({
  //     client_id : clientID,
  //     callback: handleCallbackResponse
      
  //   })

  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv3"),
  //     {theme: "outline", size :"large"}
  //   );
  //     setTokenClient(
  //   google.accounts.oauth2.initTokenClient({
  //     client_id : clientID,
  //     scope: SCOPES,
  //     callback: (tokenResponse :any) => {
  //       console.log(tokenResponse)
  //       let data = JSON.stringify({
  //         "access_token":  `${tokenResponse.access_token}`
  //       });
  //       fetch(`${API_BASE}/users/google-auth/`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: data,
  //         mode: 'cors',
  //       }).then(async (res) => {
  //         if (res.status === 200) {
  //           const response = await res.json();
  //           console.log(response);
            
  //           setJWT(response['access']);
  //           setRef(response['refresh']);
  //           navigate('/dashboard');
  //         }
  //         else {
  //           alert('Oops! Some error occurred. Please wait while the developers work to fix it :)');
  //         }
  //       });
  //     }
  //   }));

  //   // google.accounts.id.prompt();
  // }, [])
    
  return (

    <div
      className="reg-form"
      style={{

        backgroundColor: "transparent",
        color: "#EFC36A",
        borderRadius: "12px",
        border: "0.83px solid #FFCC76",

      }}
    >
      <div style={{
        display: "flex",
        width: "80%",
        margin: "1rem auto",
        flexDirection: "column",
        gap: "0.75rem",
      }}>
        <h1
          style={{
            alignSelf: "center",
            textAlign: "center"
          }}
        >
          Login

        </h1>

        {/* <GoogleOAuthProvider  clientId={clientID}>
        <GoogleLogin

          onSuccess={onSuccess}
          onError={() => {
            console.log('Login Failed');
          }}
        />
  </GoogleOAuthProvider> */}

          {/* <button
					type="submit"
					onMouseEnter={() => setIsButtonHovered(true)}
					onMouseLeave={() => setIsButtonHovered(false)}
					onClick={createDriveFile}
					style={{
						borderRadius: "4.15px",
						border: "0.83px solid #FFCC76",
						backgroundColor: isButtonHovered ? "#04006d" : "#111935E5",
						alignSelf: "center",
						marginTop: "1rem",
						width: "80%",
						color: "#EFC36A",
						fontSize: "25px",
            paddingLeft:"0",
            paddingRight:"0",

						transition: "background-color 0.3s ease-in-out",
					}}
				>
					Google Login
				</button>  */}
          </div>
      </div>

  );
};

export default GoogleForm;
