import { useEffect } from "react";

const TravelLogs = () => {
  useEffect(() => {
    if (events) {
      scrollToBottomLog();
    }
  }, [events]);

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

  function scrollToBottomLog() {
    eventLogBottomAnchorRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex flex-col border-gray-400 border-2 rounded h-full">
      <div className="flex flex-col p-2 flex-1">
        <p>
          <code>Ship:</code> Welcome back! i missed you
        </p>

        <div className="flex flex-col ">{renderTravelLogs()}</div>

        <div ref={eventLogBottomAnchorRef} />
      </div>

      {renderEventAction()}
    </div>
  );
};

export default TravelLogs;
