
import { getHeaders, setJWT } from "../../../utils/api";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

import { CSSProperties } from "react";
import "./form.css";
import { API_BASE } from "../../../utils/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form = () => {

	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mobile_number: "",
		password: "",
		cpassword: "",
		college_id: "",
		state: "",
		city: "",
	});

  
	const [isButtonHovered, setIsButtonHovered] = useState(false);
	const [matchPassword, setMatchPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);



	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
    // console.log(value)
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
    // console.log(formData);
    
	};


  


  const headers =  { 
    'Content-Type': 'application/json'
  }



	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

    if (isSubmitting) {
      return; 
    }

    setIsSubmitting(true); 

    const postData = {
      name: formData.name, 
      email: formData.email , 
      mobile_number: formData.mobile_number , 
      college_id : "34350", 
      password : formData.password
    }

    
    
		await axios
			.post(`${API_BASE}/users/preregister/`, postData, {headers} )
			.then((response) => {
        
				if (!response.status) {
					throw new Error("Network response was not ok");
				}
				if (response.status===200){
					setJWT(response.data.token)
					// console.log(response.data);
					navigate('/verification')
				}
        
				return response.data;
			})
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
        // console.log(formData)
        if(error.response.status === 400){
          alert("Already Registered With the Specified Mobile Number or E-mail.")
        }
				console.error("Error:", error);
        
			}
      );
    setIsSubmitting(false);
	};

  const indianStatesAndUTs = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi/U.T./Other", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

  interface College {
    college_id: string; 
    college_name: string; 
  }

  const buttonStyle: CSSProperties = {
    textAlign: "center",
    alignSelf: "center",
    marginTop: "1rem",
    width: "45%",
    color: "#EFC36A",
    fontSize: "28px",
    transition: "background-color 0.3s ease-in-out",
  };
  
  const buttonHoverStyle: CSSProperties = {
    color: "#af7500",
  };

//   const [cities, setCities] = useState([]);
//   const [colleges, setColleges] = useState<College[]>([]);
//   const [selectedCollegeName, setSelectedCollegeName] = useState("");


// //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

//   const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.target;
    
//     if (name === "college_id") {
//       const selectedCollege = colleges.find((college) => college.college_id === value);
//       setSelectedCollegeName(selectedCollege ? selectedCollege.college_name : "");
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };
  

  // useEffect(() => {
  //   const fetchCities = async () => {
  //     if (formData.state) {
  //       try {
  //         const response = await axios.get(
  //           `${API_BASE}/users/fetch_colleges/?state=${formData.state}`
  //         );
  //         setCities(response.data);
  //       } catch (error) {
  //         console.error("Error fetching cities:", error);
  //       }
  //     }
  //   };

  //   fetchCities();
  // }, [formData.state]);

  
  // useEffect(() => {
  //   const fetchColleges = async () => {
  //     if (formData.state && formData.city) {
  //       try {
  //         const response = await axios.get(
  //           `${API_BASE}/users/fetch_colleges/?state=${formData.state}&city=${formData.city}`
  //         );
  //         setColleges(response.data);
  //       } catch (error) {
  //         console.error("Error fetching colleges:", error);
  //       }
  //     }
  //   };

  //   fetchColleges();
  // }, [formData.state, formData.city]);


  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   await axios
  //     .post(`${API_BASE}/users/preregister/`, formData, getHeaders() as any)
  //     .then((response) => {
  //       if (!response.status) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.data;
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

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
      <form
        method={"post"}
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          width: "90%",
          margin: "1rem auto",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <h1 style={{ alignSelf: "center", }}>Sign Up</h1>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="mobile_number"
          type="text"
          pattern="[0-9]{10}" 
          title="Ten digits code" 
          placeholder="Phone Number"
          value={formData.mobile_number}
          onChange={handleChange}
          required
        />
        {/* <select
          name="state"
          value={formData.state}
          onChange={handleDropdownChange}
          required
          style={{backgroundColor:"transparent", color:"#EFC36A"}}
        >
          <option value="">State</option>
          {indianStatesAndUTs.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          name="city"
          value={formData.city}
          onChange={handleDropdownChange}
          required
          style={{background:"transparent", color:"#EFC36A"}}
        >
          <option value="">City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          name="college_id"
          value={formData.college_id}
          onChange={handleDropdownChange}
          required
          style={{background:"transparent", color:"#EFC36A"}}
        >
        <option value="">College ID</option>
          {colleges.map(({college_id, college_name}, index) => (
            <option key={index} value={college_id}>
              {college_name}
            </option>
          ))}
        </select> */}
        <input
          name="college_id"
          type="text"
          placeholder="College Name"
          value={formData.college_id}
          onChange={handleChange}
          required
        />
        <input
					name="password"
					type="password"
					placeholder="Password"
					value={formData.password}
					onChange={(e) => { handleChange(e); if (formData.cpassword !== "") { setMatchPassword(formData.cpassword === e.target.value) } }}
					required
				/>
				<input
					name="cpassword"
					type="password"
					placeholder="Confirm Password"
					value={formData.cpassword}
					onChange={(e) => { handleChange(e); setMatchPassword(formData.password === e.target.value)}}
					required
				/>
				{!matchPassword && formData.cpassword !== "" ? <text style={{color:'red'}}>Password does not match</text> : <></>}

				<button
					type="submit"
					onMouseEnter={() => setIsButtonHovered(true)}
					onMouseLeave={() => setIsButtonHovered(false)}
					disabled={!matchPassword}
					style={{
						borderRadius: "4.15px",
						border: "0.83px solid #FFCC76",
						backgroundColor: isButtonHovered ? "#04006d" : "#111935E5",
						alignSelf: "center",
						marginTop: "1rem",
						width: "45%",
						color: "#EFC36A",
						fontSize: "25px",
            paddingLeft:"0",
            paddingRight:"0",
						cursor: matchPassword ? "pointer" : "not-allowed",
						transition: "background-color 0.3s ease-in-out",
					}}
				>
					{isSubmitting ? "Submitting..." : "Register"}
				</button> 
      </form>
    </div>
  );
};

export default Form;