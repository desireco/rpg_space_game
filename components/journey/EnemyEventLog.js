import { useState } from "react";

const EnemyEventLog = ({ event }) => {
  const [actionTypeTriggered, setActionTypeTriggered] = useState(null);
  const [isOutcomeVisible, setIsOutcomeVisible] = useState(false);

  const handleAttack = (actionType) => () => {
    // display RPG style based attack dialog
  };

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

      <code>Enemy HP: {event.eventData.enemyHp}</code>

      <div className="flex">
        <button
          className="mr-2 rounded bg-red-700 hover:bg-red-600 py-2 px-4"
          onClick={handleAttack}
        >
          {event.eventButton ? event.eventButton : "Attack!"}
        </button>
      </div>

      <div className="flex">{renderEventOutcomes()}</div>
    </div>
  );
};

export default EnemyEventLog;
