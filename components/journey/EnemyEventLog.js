import { useState } from "react";

const EnemyEventLog = ({ event, onActionClick }) => {
  const [actionTypeTriggered, setActionTypeTriggered] = useState(null);
  const [isOutcomeVisible, setIsOutcomeVisible] = useState(false);

  const handleActionClick = (actionType) => () => {
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
            className="mr-2 rounded bg-red-700 hover:bg-red-600 py-2 px-4"
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
      <p className="text-red-600 text-lg mb-3">{event.message}</p>

      <div className="flex">{renderEventActions()}</div>

      <div className="flex">{renderEventOutcomes()}</div>
    </div>
  );
};

export default EnemyEventLog;
