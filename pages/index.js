import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <h1 className="center home-h1">Event Tracker</h1>
      <h2 className="center home-h2">Featured Events</h2>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800, // 1800 seconds, i.e. every half hour.
  };
}

export default HomePage;
