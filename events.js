import { getRandomFrom } from "./utils";

const ASTEROIDS_ASSETS = ["asteroid_1.png", "asteroid_2.png", "asteroid_2.png"];
const DRY_PLANETS_ASSETS = ["dry_planet_1.png"];
const GAS_PLANETS_ASSETS = [
  "gas_planet_1.png",
  "gas_planet_2.png",
  "gas_planet_2.png",
];
const GREEN_PLANETS_ASSETS = ["green_planet_1.png", "green_planet_2.png"];
const ICE_PLANETS_ASSETS = ["ice_planet_1.png", "ice_planet_2.png"];
const ISLAND_PLANETS_ASSETS = ["island_planet_1.png"];
const LAVA_PLANETS_ASSETS = ["lava_planet_1.png"];
const STARS_ASSETS = ["star_1.png"];

const ASTEROID = { name: "Asteroid", asset: getRandomFrom(ASTEROIDS_ASSETS) };
const DRY_PLANET = {
  id: 0,
  name: "Dry Planet",
  asset: getRandomFrom(DRY_PLANETS_ASSETS),
};
const GAS_PLANET = {
  id: 1,
  name: "Gas Planet",
  asset: getRandomFrom(GAS_PLANETS_ASSETS),
};
const GREEN_PLANET = {
  id: 2,
  name: "Green Planet",
  asset: getRandomFrom(GREEN_PLANETS_ASSETS),
};
const ICE_PLANET = {
  id: 3,
  name: "Ice Planet",
  asset: getRandomFrom(ICE_PLANETS_ASSETS),
};
const ISLAND_PLANET = {
  id: 4,
  name: "Island Planet",
  asset: getRandomFrom(ISLAND_PLANETS_ASSETS),
};
const LAVA_PLANET = {
  id: 5,
  name: "Lava Planet",
  asset: getRandomFrom(LAVA_PLANETS_ASSETS),
};
const STAR = { name: "Star", asset: getRandomFrom(STARS_ASSETS) };
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
  eventType: null, // 0 space, 1 enemy, 2 nothing
  eventData: {},
  message: "",
  isEnemy: false,
  actions: [],
};

export const SPACE_EVENTS = [
  {
    ...event,
    message: "You've found one ${planetType}, would you like to name it?",
    eventType: 0,
    eventData: {
      spaceObject: getRandomFrom(PLANETS),
    },
    actions: [
      {
        type: 0,
        message: "Yes, its like my child",
      },
      {
        type: 1,
        message: "No",
      },
      {
        type: 2,
        message: "Setup Mining",
      },
    ],
    outcomes: [
      { type: 0, message: "Thats... a nice name i guess" },
      { type: 1, message: "Ok" },
    ],
  },
];

export const ENEMY_EVENTS = [
  {
    ...event,
    message: "The space cartel is requesting money for protection",
    eventType: 1,
    actions: [
      {
        type: 0,
        message: "Attack!",
      },
      {
        type: 1,
        message: "Flee",
      },
    ],
    outcomes: [
      { type: 0, message: "You made them pay you instead! (exp+, money+)" },
      { type: 1, message: "While scaping the cartel thugs hit you (health-)" },
    ],
  },
  {
    ...event,
    message: "Rogue Empire Gendarmerie are trying to board you!",
    eventType: 1,
    actions: [
      {
        type: 0,
        message: "Attack the traitors!",
      },
      {
        type: 1,
        message: "Run away",
      },
    ],
    outcomes: [
      { type: 0, message: "You manage to destroy them! (exp+, money+)" },
      { type: 1, message: "You managed to space undamaged" },
    ],
  },
  {
    ...event,
    message:
      "You found an abandoned spaceship, upon inspection you realize that its full some sort of zombie people",
    eventType: 1,
    actions: [
      {
        type: 0,
        message: "Aim to the head!",
      },
      {
        type: 1,
        message: "I don't like zombies!",
      },
    ],
    outcomes: [
      {
        type: 0,
        message: "You cleaned the ship and got loot! (exp+, money+, loot+)",
      },
      { type: 1, message: "They bite you a bit but you scaped (health-)" },
    ],
  },
];

export const NOTHING_EVENTS = [
  {
    ...event,
    message: "As you move deep in space you find nothing",
    eventType: 2,
  },
  {
    ...event,
    message: "Everyday you wish for a sunrise",
    eventType: 2,
  },
  {
    ...event,
    message: "You wonder if traveling in space was the best choice",
    eventType: 2,
  },
  {
    ...event,
    message: "Today is a good day",
    eventType: 2,
  },
  {
    ...event,
    message: "Is it day or night in space?",
    eventType: 2,
  },
  {
    ...event,
    message: "Hi, you know space is infinite? what's the point",
    eventType: 2,
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
