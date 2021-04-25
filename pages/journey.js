import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import EnemyEventLog from "../components/journey/EnemyEventLog";
import SpaceEventLog from "../components/journey/SpaceEventLog";
import styles from "../styles/journey.module.css";

const JourneyPage = () => {
  const [events, setEvents] = useState([]);
  const eventLogBottomAnchorRef = useRef(null);

  useEffect(() => {
    if (events) {
      scrollToBottomLog();
    }
  }, [events]);

  function scrollToBottomLog() {
    eventLogBottomAnchorRef.current.scrollIntoView({ behavior: "smooth" });
  }

  async function handleTravelClick() {
    try {
      const eventResponse = await fetch("http://localhost:3000/api/event");
      const response = await eventResponse.json();
      setEvents((events) => [...events, response]);
    } catch (error) {
      console.log("Error!: ", error);
    }
  }

  function renderTravelLogs() {
    if (!events) {
      return null;
    }

    return (
      <>
        {events.map((event) => {
          const { eventType } = event;

          switch (eventType) {
            case 0:
              return (
                <SpaceEventLog
                  event={event}
                  onActionClick={scrollToBottomLog}
                />
              );
            case 1:
              return (
                <EnemyEventLog
                  event={event}
                  onActionClick={scrollToBottomLog}
                />
              );

            case 2:
              return (
                <p className="pb-4 italic">
                  <code>Travel Log: </code>
                  {event.message}
                </p>
              );

            default:
              return null;
          }
        })}
      </>
    );
  }

  return (
    <div>
      <Head>
        <title>Player Journey</title>
      </Head>

      <main className="flex flex-col md:flex-row">
        <div className={styles.background}>
          <div className={styles.star} />
          <div className={styles.star2} />
          <div className={styles.star3} />

          <img
            alt="spaceship"
            src="./ship3.png"
            className="h-32 w-32 transform -rotate-90 scale-150 mx-auto self-end mb-20"
          />
        </div>

        <div className="flex flex-1 flex-col bg-gray-900 text-white p-4 justify-between h-screen">
          <div className="flex flex-col p-4 border-gray-400 border-2 rounded h-full overflow-scroll">
            <p>
              <code>Ship:</code> Welcome back! i missed you
            </p>

            {renderTravelLogs()}

            <div ref={eventLogBottomAnchorRef} />
          </div>
          <button
            className="text-xl p-4 border-gray-400 bg-gray-900 border-2 rounded mt-8 hover:bg-gray-800"
            onClick={handleTravelClick}
          >
            Travel
          </button>
        </div>
      </main>
    </div>
  );
};

export default JourneyPage;
