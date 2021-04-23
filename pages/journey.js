import Head from "next/head";
import { useState } from "react";
import styles from "../styles/journey.module.css";

const JourneyPage = () => {
  const [events, setEvents] = useState([]);

  async function handleTravelClick() {
    try {
      const eventResponse = await fetch("http://localhost:3000/api/event");
      const response = await eventResponse.json();
      setEvents([...events, response]);
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
        {events.map((event) => (
          <p className="mb-2 italic">{event.message}</p>
        ))}
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

        <div className="flex flex-1 flex-col bg-gray-900 text-white p-4 justify-between">
          <div className="flex flex-col p-4 border-gray-400 border-2 rounded h-full">
            <p>
              <code>Ship:</code> Welcome back! i missed you
            </p>

            {renderTravelLogs()}
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
