import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event.search';

const AllEventsPage = () => {
	const router = useRouter();
	const events = getAllEvents();

	const findEventsHandler = (year, month) => {
		const searchPath = `/events/${year}/${month}`;

		router.push(searchPath);
	};

	return (
		<>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
};

export default AllEventsPage;
