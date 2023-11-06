import Form from "./components/form"
import Header from "../../components/header"
import "./prereg.css"
import GoogleForm from "./components/form"
import { useEffect } from "react"
import SidebarNav from "../../components/SidebarNav/SidebarNav"

const GLogin = (props: any) => {

	return (
		<div className="pre-reg-page">
			<SidebarNav />
			{props.component}
		</div>

	)
}
GLogin.defaultProps = {
	component:<GoogleForm />
}
export default GLogin
