import getRandomEvent from "../../events";

export default function handler(req, res) {
  const randomEvent = getRandomEvent();

  console.log("randomEvent: ", randomEvent);

  res.status(200).json({
    ...randomEvent,
    experienceEarned: 10,
    bitsEarned: 32,
    waitTime: 3,
    playerLevel: 1,
  });
}
