import Form from "./components/form"
import Header from "../../components/header"
import "./prereg.css"
import React from "react";
import SidebarNav from "../../components/SidebarNav/SidebarNav"
<style>
	@import url('https://fonts.googleapis.com/css2?family=Quincy&display=swap');
</style>

const PreReg = (props: any) => {
	React.useEffect(() => { document.title = "SignUp | RDV" }, []);
	return (
		<div className="pre-reg-page">
			<SidebarNav />
			{props.component}
		</div>

	)
}
PreReg.defaultProps = {
	component: <Form />
}
export default PreReg