import Head from "next/head";
import { useState } from "react";
import Particles from "react-tsparticles";
import EnemyEventLog from "../components/journey/EnemyEventLog";
import HUD from "../components/journey/HUD";
import SpaceEventLog from "../components/journey/SpaceEventLog";
import { EventTypes } from "../constants";

const JourneyPage = () => {
  const [currentEvent, setCurrentEvent] = useState(null);

  async function handleTravelClick() {
    try {
      const eventResponse = await fetch("/api/event");
      const response = await eventResponse.json();
      setCurrentEvent(response);
    } catch (error) {
      console.log("Error!: ", error);
    }
  }

  function renderEventAsset() {
    if (!currentEvent) {
      return null;
    }

    console.log("currentEvent: ", currentEvent);

    const { eventData } = currentEvent;

    switch (currentEvent.eventType) {
      case EventTypes.SpaceEvent:
        return (
          <img
            alt={eventData.name}
            src={`./space/${eventData.asset}`}
            className="h-32 w-32 transform md:scale-150"
          />
        );

      case EventTypes.EnemyEvent:
        return (
          <div className="flex flex-col">
            <div className="flex mb-4">
              <p className="mx-2 text-white">HP</p>

              <div className="shadow w-full bg-red-100 mr-2">
                <div className="bg-red-700 text-xs leading-none h-full w-4/4" />
              </div>
            </div>

            <img
              alt={eventData.asset}
              src={`./enemies/${eventData.asset}`}
              className="h-32 w-32 transform"
            />
          </div>
        );

      default:
        return null;
    }
  }

  function renderTravelEvent() {
    if (!currentEvent) {
      return null;
    }

    const { eventType, message } = currentEvent;

    switch (eventType) {
      case 0:
        return <SpaceEventLog event={currentEvent} />;

      case 1:
        return <EnemyEventLog event={currentEvent} />;

      case 2:
        return (
          <p className="pb-4 italic">
            <code>Travel Log: </code>
            {message}
          </p>
        );

      default:
        return null;
    }
  }

  return (
    <div>
      <Head>
        <title>Player Journey</title>
      </Head>

      <main className="flex flex-col h-screen">
        <Particles
          id="spaceStartParticles"
          options={{
            fullScreen: {
              enable: true,
            },
            fpsLimit: 60,
            particles: {
              groups: {
                z5000: {
                  number: {
                    value: 70,
                  },
                  zIndex: {
                    value: 5000,
                  },
                },
                z7500: {
                  number: {
                    value: 30,
                  },
                  zIndex: {
                    value: 75,
                  },
                },
                z2500: {
                  number: {
                    value: 50,
                  },
                  zIndex: {
                    value: 25,
                  },
                },
                z1000: {
                  number: {
                    value: 30,
                  },
                  zIndex: {
                    value: 10,
                  },
                },
              },
              number: {
                value: 200,
                density: {
                  enable: false,
                  value_area: 800,
                },
              },
              color: {
                value: "#fff",
                animation: {
                  enable: false,
                  speed: 20,
                  sync: true,
                },
              },
              shape: {
                type: "square",
              },
              opacity: {
                value: 1,
                random: false,
                animation: {
                  enable: false,
                  speed: 3,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 2,
              },
              links: {
                enable: false,
                distance: 100,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                angle: {
                  value: 10,
                  offset: 0,
                },
                enable: true,
                speed: 1,
                direction: "left",
                random: false,
                straight: true,
                outModes: {
                  default: "out",
                },
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              zIndex: {
                value: 5,
                opacityRate: 0.5,
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  links: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  quantity: 4,
                  groups: ["z5000", "z7500", "z2500", "z1000"],
                },
                remove: {
                  quantity: 2,
                },
              },
            },
            detectRetina: true,
            background: {
              color: "#1c1d2d",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
            emitters: {
              position: {
                y: 55,
                x: -30,
              },
              rate: {
                delay: 7,
                quantity: 1,
              },
              size: {
                width: 0,
                height: 0,
              },
            },
          }}
        />

        <div className="flex justify-between items-center h-full md:w-2/3 self-center">
          <div className="flex flex-col">
            <div className="flex">
              <p className="mx-2 text-white">HP:</p>

              <p>100</p>
            </div>

            <img
              alt="spaceship"
              src="./ship3.png"
              className="h-32 w-32 transform md:scale-150 ml-4"
            />
          </div>

          <div className="flex h-32 w-32 mr-20">{renderEventAsset()}</div>
        </div>

        <div className="flex bg-gray-900 flex-col-reverse md:flex-row">
          <HUD />

          <div className="flex flex-1 flex-col text-white p-4 justify-between">
            <div className="text-white">{renderTravelEvent()}</div>

            <button
              className="text-xl p-4 border-gray-400 bg-gray-900 border-2 rounded mt-8 hover:bg-gray-800"
              onClick={handleTravelClick}
            >
              Travel
            </button>
          </div>
        </div>
      </main>

      {/* <div className="absolute h-1/2 bottom-0 left-0 right-0 bg-pink-500">
        <div className="flex bg-white p-4 m-4 rounded h-full"></div>
      </div> */}
    </div>
  );
};

export default JourneyPage;
