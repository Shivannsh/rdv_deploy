import SidebarNav from "../../components/SidebarNav/SidebarNav"
import Header from "../../components/header"
import ForgotPassForm from "./components/forgotpassform"
import "./loginpage.css"
<style>
	@import url('https://fonts.googleapis.com/css2?family=Quincy&display=swap');
</style>

const ForgotPass = () => {
	return (
		<div className="reg-page">
			<SidebarNav />
			<ForgotPassForm />
		</div>
	)
}

export default ForgotPass;