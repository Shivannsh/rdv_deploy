import event from '../../../assets/img/events/headerbg.png';
import { useState } from 'react';
import Flagships from './components/flagships';
// import Clubs from './components/clubs';
// import Boards from './components/boards';
// import Marketing from './components/marketing';
import './hero.css';
<style>
	@import url('https://fonts.googleapis.com/css2?family=Quincy&display=swap');
</style>

const Herocm = () => {
	const [activeTab, setActiveTab] = useState('flagships');

	const handleToggle = (tab: string) => {
		setActiveTab(tab);
	};

	const renderActiveTab = () => {
		switch (activeTab) {
			case 'flagships':
				return <Flagships />;
	// 		case 'clubs':
	// 			return <Clubs />;
	// 		case 'boards':
	// 			return <Boards />;
	// 		case 'marketing':
	// 			return <Marketing />;
			default:
				return <Flagships />;
		}
	};

	return (
		<div className='hero-cm my-5'>
			<div className='img-container'>
				<img src={event} alt='event' className='w-100 text-center my-5 min-vh-10' />
			</div>
			<div className='btn-group-toggle d-flex flex-row justify-content-center flex-wrap'>
				<button
					className={`btn mx-2 mx-md-5 toggle-button px-3 px-md-4 my-2 ${
						activeTab === 'flagships' ? 'active' : ''
					}`}
					style={{
						backgroundColor: activeTab === 'flagships' ? '#EFC36A' : '',
						color: activeTab === 'flagships' ? '#08133A' : '#EFC36A',
					}}
					onClick={() => handleToggle('flagships')}
					>
          				Flagships
        		</button>
				<button
					className={`btn mx-2 mx-md-5 toggle-button px-3 px-md-4 my-2 ${
						activeTab === 'clubs' ? 'active' : ''
					}`}
					style={{
						backgroundColor: activeTab === 'clubs' ? '#EFC36A' : '',
						color: activeTab === 'clubs' ? '#08133A' : '#EFC36A',
					}}
					onClick={() => handleToggle('clubs')}
					>
					Clubs
				</button>
				<button
					className={`btn mx-2 mx-md-5 toggle-button px-3 px-md-4 my-2 ${
						activeTab === 'boards' ? 'active' : ''
					}`}
					style={{
						backgroundColor: activeTab === 'boards' ? '#EFC36A' : '',
						color: activeTab === 'boards' ? '#08133A' : '#EFC36A',
					}}
					onClick={() => handleToggle('boards')}
        		>
          			Boards
        		</button>
        		<button
					className={`btn mx-2 mx-md-5 toggle-button px-3 px-md-4 my-2 ${
						activeTab === 'marketing' ? 'active' : ''
					}`}
					style={{
						backgroundColor: activeTab === 'marketing' ? '#EFC36A' : '',
						color: activeTab === 'marketing' ? '#08133A' : '#EFC36A',
					}}
					onClick={() => handleToggle('marketing')}
				>
          			Marketing
        		</button>
			</div>
			{renderActiveTab()}
		</div>
	);
};

export default Herocm;