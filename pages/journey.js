import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import EnemyEventLog from "../components/journey/EnemyEventLog";
import SpaceEventLog from "../components/journey/SpaceEventLog";
import { EventTypes } from "../constants";
import styles from "../styles/journey.module.css";

const JourneyPage = () => {
  const [currentEvent, setCurrentEvent] = useState(null);
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
      const eventResponse = await fetch("/api/event");
      const response = await eventResponse.json();
      setEvents((events) => [...events, response]);
      setCurrentEvent(response);
    } catch (error) {
      console.log("Error!: ", error);
    }
  }

  function renderEventAction() {
    return (
      <div className="flex flex-col p-2 border-t-2 border-gray-400">
        <p className="mb-3">Enemy!</p>

        <p className="mb-3">
          The space cartel is requesting money for protection
        </p>

        <div className="flex flex-col">
          <div className="mb-3">
            <button className="mr-2 rounded bg-red-700 hover:bg-red-600 py-2 px-4">
              Attack!
            </button>

            <button className="mr-2 rounded bg-red-700 hover:bg-red-600 py-2 px-4">
              Run away
            </button>

            <button className="mr-2 rounded bg-red-700 hover:bg-red-600 py-2 px-4">
              Talk
            </button>
          </div>

          <div className="flex">
            <div className="mr-3 flex flex-col items-center">
              <p>Attack Damage</p>
              <p>80</p>
            </div>

            <div className="mr-3 flex flex-col items-center">
              <p>Dmg Received</p>
              <p>200</p>
            </div>

            <div className="mr-3 flex flex-col items-center">
              <p>Exp gained</p>
              <p>143</p>
            </div>
          </div>

          <div className="mr-3 flex flex-col">
            <p>Loot</p>

            <div className="flex">
              <p className="mr-2 border border-gray-400 p-1 cursor-pointer">
                50 gold
              </p>

              <p className="mr-2 border border-gray-400 p-1 cursor-pointer">
                2 Battery
              </p>

              <p className="mr-2 border border-gray-400 p-1 cursor-pointer">
                1 Plutonium
              </p>

              <p className="mr-2 border border-gray-400 p-1 cursor-pointer">
                1 craft recipe
              </p>
            </div>
          </div>
        </div>
      </div>
    );
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

  function renderSpaceBody() {
    if (currentEvent && currentEvent.eventType === EventTypes.SpaceEvent) {
      console.log("currentEvent: ", currentEvent);
      return (
        <img
          alt={currentEvent.eventData.spaceObject.name}
          src={`./space/${currentEvent.eventData.spaceObject.asset}`}
          className="h-32 w-32 transform scale-150 mx-auto self-top mt-20"
        />
      );
    }
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
          <div className="flex flex-col w-full justify-between">
            <div className="flex self-start h-32 w-32">{renderSpaceBody()}</div>

            <img
              alt="spaceship"
              src="./ship3.png"
              className="h-32 w-32 transform -rotate-90 scale-150 mx-auto self-center"
            />

            <div className="w-full self-end flex flex-col">
              <div className="flex justify-evenly my-2">
                <div className="flex flex-1">
                  <p className="mx-2">Health</p>

                  <div className="shadow w-full bg-red-100 mr-2">
                    <div className="bg-red-700 text-xs leading-none h-full w-3/4" />
                  </div>
                </div>

                <div className="flex flex-1">
                  <p className="mr-2">Exp.</p>

                  <div className="shadow w-full bg-purple-100 mr-2">
                    <div className="bg-purple-800 text-xs leading-none h-full w-1/4" />
                  </div>
                </div>
              </div>

              <div className="border-b-2 border-gray-200 border-solid">
                <ul className="flex cursor-pointer">
                  <li className="py-2 px-6 bg-white text-black mr-0.5 w-full">
                    Attributes
                  </li>
                  <li className="py-2 px-6 bg-gray-400 text-gray-500 mr-0.5 w-full">
                    Ship
                  </li>
                  <li className="py-2 px-6 bg-gray-400 text-gray-500 mr-0.5 w-full">
                    Storage
                  </li>
                  <li className="py-2 px-6 bg-gray-400 rounded-t-md text-gray-500 mr-0.5 w-full">
                    Craft
                  </li>
                </ul>
              </div>

              <div className="flex flex-1">
                <div className="flex flex-col flex-1 bg-white text-black p-2">
                  <p className="text-gray-900 mb-3">Ship attributes</p>

                  <div className="flex">
                    <div className="flex flex-col mr-4">
                      <p className="text-black mb-1">Attack</p>
                      <p className="text-black mb-1">Defense</p>
                      <p className="text-black mb-1">Speed</p>
                      <p className="text-black mb-1">A.I.</p>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex mb-1">
                        <p>0</p>

                        <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                          +
                        </button>

                        <button className="h-6 w-6 bg-yellow-500 rounded-full">
                          i
                        </button>
                      </div>

                      <div className="flex mb-1">
                        <p>0</p>

                        <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                          +
                        </button>

                        <button className="h-6 w-6 bg-yellow-500 rounded-full">
                          i
                        </button>
                      </div>

                      <div className="flex mb-1">
                        <p>0</p>

                        <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                          +
                        </button>

                        <button className="h-6 w-6 bg-yellow-500 rounded-full">
                          i
                        </button>
                      </div>

                      <div className="flex mb-1">
                        <p>0</p>

                        <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                          +
                        </button>

                        <button className="h-6 w-6 bg-yellow-500 rounded-full">
                          i
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 bg-white text-black p-2">
                  <p className="text-gray-900 mb-3">Your attributes</p>

                  <div className="flex">
                    <div className="flex flex-col mr-4">
                      <p className="text-black mb-1">Intelligence</p>
                      <p className="text-black mb-1">Social</p>
                      <p className="text-black mb-1">Repair(?)</p>
                      <p className="text-black mb-1">Fortune(luck)</p>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex mb-1">
                        <p>-10</p>

                        <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                          +
                        </button>

                        <button className="h-6 w-6 bg-yellow-500 rounded-full">
                          i
                        </button>
                      </div>

                      <div className="flex mb-1">
                        <p>0</p>

                        <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                          +
                        </button>

                        <button className="h-6 w-6 bg-yellow-500 rounded-full">
                          i
                        </button>
                      </div>

                      <div className="flex mb-1">
                        <p>0</p>

                        <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                          +
                        </button>

                        <button className="h-6 w-6 bg-yellow-500 rounded-full">
                          i
                        </button>
                      </div>

                      <div className="flex mb-1">
                        <p>0</p>

                        <button className="h-6 w-10 bg-blue-600 mx-2 rounded text-white">
                          +
                        </button>

                        <button className="h-6 w-6 bg-yellow-500 rounded-full">
                          i
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col bg-gray-900 text-white p-4 justify-between h-screen">
          <div className="flex flex-col border-gray-400 border-2 rounded h-full">
            <div className="flex flex-col p-2 flex-1">
              <p>
                <code>Ship:</code> Welcome back! i missed you
              </p>

              <div className="flex flex-col ">
                {renderTravelLogs()}
              </div>

              <div ref={eventLogBottomAnchorRef} />
            </div>

            {renderEventAction()}
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
