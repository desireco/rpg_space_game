import { useState } from "react";
import { doNothing } from "../../utils";

const SpaceEventLog = ({ event, onActionClick }) => {
  const [actionTypeTriggered, setActionTypeTriggered] = useState(null);
  const [isOutcomeVisible, setIsOutcomeVisible] = useState(false);
  function getEventMessage() {
    const { name } = event.eventData;
    return event.message.replace("${planetType}", name);
  }

  const handleActionClick = (actionType) => () => {
    if (actionType === 2) {
      // coming soon
    }
    setActionTypeTriggered(actionType);
    setIsOutcomeVisible(true);
    onActionClick();
  };

  function renderEventActions() {
    if (event.actions) {
      return event.actions.map((action) => {
        return (
          <button
            key={String(action.type)}
            className="mr-2 rounded bg-green-700 hover:bg-green-600 py-2 px-4"
            onClick={doNothing()}
          >
            {action.message}
          </button>
        );
      });
    }

    return null;
  }

  function renderEventOutcomes() {
    if (isOutcomeVisible) {
      const outcome = event.outcomes.find((outcome) => {
        return outcome.type === actionTypeTriggered;
      });

      return <p>{outcome.message}</p>;
    }

    return null;
  }

  return (
    <div className="flex flex-col">
      <p className="text-lg mb-3">{getEventMessage()}</p>

      <p>
        Resources:{" "}
        <code>
          {event.eventData.resources
            ? event.eventData.resources.join(", ")
            : "not found"}
        </code>
      </p>

      <div className="flex flex-col mb-4">
        <p>
          Weather:{" "}
          {event.eventData.weather
            ? `${event.eventData.weather}c`
            : "Not detected"}
        </p>

        <p>
          Intelligent life: {event.eventData.intelligent ? "Yes" : "Not found"}
        </p>

        <p>Enemies: {event.eventData.enemies ? "Yes" : "No"}</p>
      </div>

      <div className="flex">{renderEventActions()}</div>

      <div className="flex">{renderEventOutcomes()}</div>
    </div>
  );
};

export default SpaceEventLog;
