import { getRandomFrom } from "./utils";

const ASTEROID = 0;
const DRY_PLANET = 1;
const GAS_PLANET = 2;
const GREEN_PLANET = 3;
const ICE_PLANET = 4;
const ISLAND_PLANET = 5;
const LAVA_PLANET = 6;
const STAR = 7;
const PLANETS = [
  ASTEROID,
  DRY_PLANET,
  GAS_PLANET,
  GREEN_PLANET,
  ICE_PLANET,
  ISLAND_PLANET,
  LAVA_PLANET,
  STAR,
];

const event = {
  eventId: "",
  eventType: null, // 0 space, 1 enemy, 2, nothing
  eventData: {},
  message: "",
  isEnemy: false,
  options: [],
};

export const SPACE_EVENTS = [
  {
    ...event,
    message: "You've found ${planetType}, would you like to name it?",
    eventType: 0,
    eventData: {
      planetType: getRandomFrom(PLANETS),
    },
    options: [
      {
        message: "Yes, its like my child",
        outcome: {
          message: "Thats... a nice name i guess",
        },
      },
      {
        message: "No",
      },
    ],
  },
];

export const ENEMY_EVENTS = [
  {
    ...event,
    message: "Space pirates! What would you do?",
  },
];

export const NOTHING_EVENTS = [
  {
    ...event,
    message: "As you move deep in space you found nothing",
  },
  {
    ...event,
    message: "Everyday you wish for a sunrise",
  },
  {
    ...event,
    message: "You wonder if traveling in space was the best choice",
  },
  {
    ...event,
    message: "Today is a good day",
  },
  {
    ...event,
    message: "Is it day or night in space?",
  },
  {
    ...event,
    message: "Hi",
  },
];

export default function getRandomEvent() {
  const eventsFromCategory = getRandomFrom([
    SPACE_EVENTS,
    ENEMY_EVENTS,
    NOTHING_EVENTS,
  ]);
  return getRandomFrom(eventsFromCategory);
}
