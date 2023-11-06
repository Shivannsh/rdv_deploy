import './pronite.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import GroupPro from './components/group';
import Heropr from './components/hero';
import Titlepr from './components/title';

import SidebarNav from '../../components/SidebarNav/SidebarNav';
import CardPro from './components/cards';
import GalleryPro from './components/gallery';
import Rules from './components/Rules';
import heroPro from './components/heroPro';

const Pronite = () => {
	return (
		<>
			
			<SidebarNav />
			<Heropr />
			<GroupPro />
			<Rules />

		</>
	);
};

export default Pronite;