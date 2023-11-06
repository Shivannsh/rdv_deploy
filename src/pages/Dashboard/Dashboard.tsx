import React, { useEffect, ChangeEvent, FormEvent, useState } from 'react'
import './Dashboard.css'
import SidebarNav from '../../components/SidebarNav/SidebarNav'
import axios from 'axios'
import { API_BASE, checkJWT, getJWT, logout } from '../../utils/api'
import { log } from 'console'
import BookedPasses from './components/bookedPasses'
import EntryPasses from './components/EnteryPasses'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap'
import header from '../gallery/header'
import { useNavigate } from 'react-router'


const getInstaUsername = (link: string) => {
    if (!link) {
        return "null"
    }
    if (link.includes("instagram.com/")) {
        link = link.split("instagram.com/")[1]
    }
    if (link.includes("/")) {
        link = link.split("/")[0]
    }
    if (link.includes("?")) {
        link = link.split("?")[0]
    }
    return link
}
const getLinkUsername = (link: string) => {
    if (!link) {
        return "null"
    }
    if (link.includes("linkedin.com/in/")) {
        link = link.split("linkedin.com/in/")[1]
    }
    if (link.includes("/")) {
        link = link.split("/")[0]
    }
    if (link.includes("?")) {
        link = link.split("?")[0]
    }
    return link
}
const indianStatesAndUTs = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi/U.T./Other", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

interface College {
    college_id: string;
    college_name: string;
}
function Dashboard() {
    const navigate = useNavigate()
    if (!checkJWT()) {
        navigate('/')
    }
    const [ProfileData, setUserData] = useState({
        id: 10,
        rdv_id: "",
        name: "",
        user_category: "",
        email: "",
        mobile_number: "",
        college_id: "",
        profile_photo: "",
        isVerified: "",
        is_ca: "",
        ca_id: "",
        instagram_link: "",
        linkedin_link: "",
        college_name: "",
        college_city: "",
        rank: "",
        points: ""
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showC, setShowC] = useState(false);
    const handleCloseC = () => setShowC(false);
    const handleShowC = () => setShowC(true);

    const [isOther, setIsOther] = useState(false)

    const [cities, setCities] = useState([]);
    const [colleges, setColleges] = useState<College[]>([]);

    const [formData, setFormData] = useState({
        manual_set: isOther,
        college_id: "",
        state: "",
        city: "",
        college_name: ""
    });

    const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "college_id") {
            const selectedCollege = colleges.find((college) => college.college_id === value);
            setIsOther(selectedCollege?.college_name === "Other")
            setFormData((prevData) => ({
                ...prevData,
                manual_set: selectedCollege?.college_name === "Other",
                college_name: "",
                [name]: value,
            }));
        } else {
            setIsOther(false)
            setFormData((prevData) => ({
                ...prevData,
                manual_set: false,
                college_name: "",
                [name]: value,
            }));
        }
    };
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        const selectedCollege = colleges.find((college) => college.college_id === value);
        setIsOther(selectedCollege?.college_name === "Other")
        setFormData((prevData) => ({
            ...prevData,
            manual_set: selectedCollege?.college_name === "Other",
            college_name: "",
            [name]: value,
        }));
    }

    useEffect(() => {
        const fetchCities = async () => {
            if (formData.state) {
                try {
                    const response = await axios.get(
                        `${API_BASE}/users/fetch_colleges/?state=${formData.state}`
                    );
                    const data = response.data
                    data.sort()
                    setCities(response.data);
                } catch (error) {
                    console.error("Error fetching cities:", error);
                }
            }
        };
        setCities([])
        setColleges([])
        setFormData({ ...formData, "city": "", "college_id": "" })
        fetchCities();
    }, [formData.state]);


    useEffect(() => {
        const fetchColleges = async () => {
            if (formData.state && formData.city) {
                try {
                    const response = await axios.get(
                        `${API_BASE}/users/fetch_colleges/?state=${formData.state}&city=${formData.city}`
                    );
                    let data = response.data
                    setColleges(data);
                } catch (error) {
                    console.error("Error fetching colleges:", error);
                }
            }
        };
        setColleges([])
        setFormData({ ...formData, "college_id": "" })
        fetchColleges();
    }, [formData.city]);

    React.useEffect(() => { document.title = "Dashboard | RDV" }, []);
    useEffect(() => {
        const jwtToken = getJWT();

        const headers = {
            'Authorization': `Bearer ${jwtToken}`
        };

        axios.get(`${API_BASE}/users/profile/`, { headers })
            .then(response => {
                const responseData = { ...response.data };
                setUserData(responseData)


            })
            .catch(error => {
                if (error.response.status === 401) {
                    logout()
                    navigate("/")
                }
                console.error("Error", error);
            });
    }, []);
    const [selectedFiles, setSelectedFiles] = useState(null);
    const handleFileChange = (e: any) => {
        setSelectedFiles(e.target.files[0]);
        //   console.log(selectedFiles);
    };
    const handleUpload = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(selectedFiles)
        if (!selectedFiles) {
            return;
        }

        const formdata = new FormData();
        formdata.append("profile_photo", selectedFiles);

        axios.post(`${API_BASE}/users/update_pfp/`, formdata, {
            headers: {
                Authorization: `Bearer ${getJWT()}`,
                //   'Content-Type': 'multipart/form-data', 
            },
        })
            .then(response => {
                alert("Profile Photo updated successfully! ")
                window.location.reload();

            })
            .catch(error => {
                console.error(error)
            });

    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const headers = {
            "Authorization": `Bearer ${getJWT()}`,
            'Content-Type': 'application/json'
        }
        // Update this api for changing college
        await axios
            .post(`${API_BASE}/users/update_college_name/`, formData, { headers })
            .then((response) => {
                if (!response.status) {
                    throw new Error("Network response was not ok");
                }
                console.log(response.data);
                if (response.status === 200) {
                    alert("College updated successfully.")
                    window.location.reload()
                }
                return response.data;
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    const handleBtnClick = () => {
        console.log(formData);
    }
    return (
        <>
            <SidebarNav />
            <section className="Me-Body" style={{ width: '100%', minHeight: "100vh" }}>
                <div className="BG_Div"> <div className='Profile_Body'>
                    <div className='Profile_Photo_Div' >
                        <div style={ProfileData.profile_photo ? {} : { border: "1px solid white" }}><img src={ProfileData.profile_photo} style={{ width: "100%", height: "100%" }} alt="ProfilePhoto" /></div>
                        <h2>{ProfileData.name}</h2>
                        <button type="submit" className='Dashboard_Update_Button' onClick={handleShow}>Update Profile Photo</button>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton style={{ backgroundColor: "#3b3b3b", color: "#EFC36A" }}>
                                <Modal.Title>UPDATE YOUR PROFILE PICTURE</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ backgroundColor: "#0a0058" }}>
                                <form method="POST" onSubmit={handleUpload} id="college-update-form" style={{ display: "flex", flexDirection: "column", maxWidth: "350px", margin: "auto" }} >
                                    <input type="file" multiple accept="image/*" className='CollagenameInput' onChange={handleFileChange} required style={{ color: "#efc36a", background: "transparent" }} />
                                    <button type='submit' className='my-4 Dashboard_Update_Button' disabled={!selectedFiles}>Upload</button>
                                </form>
                            </Modal.Body>
                            {/* <Modal.Footer style={{ backgroundColor: "#3b3b3b", color: "white" }}>
                                <button className='Dashboard_Update_Button' onClick={handleClose}>
                                    Close
                                </button>
                            </Modal.Footer> */}
                        </Modal>
                        {/* <button className='btn btn-primary' >Update Profile Photo</button> */}
                    </div>
                    <div className='Profile_Info_Div'>
                        <div className='General_Info'>
                            <h2 style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><span>Profile:</span>
                                <button type="submit" className='Dashboard_Update_Button' onClick={handleShowC}>Update College</button>
                                <Modal
                                    show={showC}
                                    onHide={handleCloseC}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton style={{ backgroundColor: "#3b3b3b", color: "#EFC36A" }}>
                                        <Modal.Title>UPDATE YOUR COLLEGE</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body style={{ backgroundColor: "#0a0058" }}>
                                        <form method="POST" id="college-update-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "350px", margin: "auto" }} >

                                            <select
                                                name="state"
                                                className='CollagenameInput'
                                                value={formData.state}
                                                onChange={handleDropdownChange}
                                                required
                                                style={{ backgroundColor: "transparent", color: "#EFC36A" }}
                                            >
                                                <option value="" selected disabled>Select State</option>
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
                                                disabled={cities.length === 0}
                                                className='CollagenameInput'
                                                style={{ background: "transparent", color: "#EFC36A" }}
                                            >
                                                <option value="" selected>Select City</option>
                                                {cities.map((city, index) => (
                                                    <option key={index} value={city}>
                                                        {city}
                                                    </option>
                                                ))}
                                            </select>
                                            <div style={{ width: '100%' }}>

                                                <select
                                                    name="college_id"
                                                    value={formData.college_id}
                                                    onChange={handleDropdownChange}
                                                    required
                                                    disabled
                                                    style={{ background: "transparent", border: 0, margin: 0, color: "#EFC36A", width: "100%", WebkitAppearance: "none" }}
                                                >
                                                    <option value="" selected>College Name</option>
                                                    {colleges.map(({ college_id, college_name }, index) => (
                                                        <option key={index} value={college_id}>
                                                            {college_name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <input
                                                    style={{ background: 'transparent', width: "100%", outline: 0 }}
                                                    list='colleges'
                                                    name='college_id'
                                                    disabled={colleges.length === 0}
                                                    onChange={handleInputChange}
                                                    className='CollagenameInput'
                                                    value={formData.college_id} />
                                                <datalist id='colleges'>
                                                    <option value="" selected>Select College</option>
                                                    {colleges.map(({ college_id, college_name }, index) => (
                                                        <option key={index} value={college_id} onSelect={() => { console.log(college_name) }} onClick={() => { console.log(college_name) }}>
                                                            {college_name}
                                                        </option>
                                                    ))}
                                                </datalist>
                                            </div>
                                            {isOther ? <input type="text" className='CollagenameInput' onChange={(e: any) => { setFormData({ ...formData, "college_name": e.target.value }) }} value={formData.college_name} name="college_name" id="college_name" placeholder='College Name' required /> : <></>}
                                            {colleges.length !== 0 && !isOther && <span style={{ color: "#EFC36A" }}>If you can't find your college, select Other and then manually enter name</span>}
                                            <button
                                                type="submit"
                                                onClick={handleBtnClick}
                                                disabled={!formData.college_id || formData.manual_set && (!formData.college_name)}
                                                className='my-4 Dashboard_Update_Button'
                                            >Update</button>

                                        </form>
                                    </Modal.Body>
                                    {/* <Modal.Footer style={{ backgroundColor: "#3b3b3b", color: "white" }}>
                                        <button className='Dashboard_Update_Button' onClick={handleCloseC}>
                                            Close
                                        </button>
                                    </Modal.Footer> */}
                                </Modal>
                            </h2>
                            <hr />
                            <div className='Info_Data'>
                                <p><strong>RDV ID:</strong> {ProfileData.rdv_id}</p>
                                <p><strong>College:</strong> {ProfileData.college_name}</p>
                                <p><strong>Mobile:</strong> {ProfileData.mobile_number}</p>
                                <p><strong>Email:</strong> {ProfileData.email}</p>
                            </div>
                        </div>
                        {/* <div className='Socal_Connections'>
                            <h2>Social Media connections</h2>
                            <hr />
                            <div className='Info_Data'>
                                <p><strong>Instagram:</strong> <a href={ProfileData.instagram_link} style={{ textDecoration: "none", color: "unset" }}>{getInstaUsername(ProfileData.instagram_link)}</a></p>
                                <p><strong>LinkedIn:</strong> <a href={ProfileData.linkedin_link} style={{ textDecoration: "none", color: "unset" }}>{getLinkUsername(ProfileData.linkedin_link)}</a></p>
                            </div>
                        </div> */}
                    </div>
                </div></div>

            </section>
            <div className='py-4' style={{ backgroundColor: '#0a001b' }}>
                <EntryPasses />
                <BookedPasses />
            </div>

        </>
    )
}

export default Dashboard