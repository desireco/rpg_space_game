import { useState } from "react";

const SpaceEventLog = ({ event, onActionClick }) => {
  const [actionTypeTriggered, setActionTypeTriggered] = useState(null);
  const [isOutcomeVisible, setIsOutcomeVisible] = useState(false);
  function getEventMessage() {
    const { name } = event.eventData.spaceObject;
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
            onClick={handleActionClick(action.type)}
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
    <div className="pb-4">
      <p className="text-lg mb-3">{getEventMessage()}</p>

      <div className="flex">{renderEventActions()}</div>

      <div className="flex">{renderEventOutcomes()}</div>
    </div>
  );
};

export default SpaceEventLog;
