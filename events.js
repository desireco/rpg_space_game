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

// Enemy assets

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
  resources: ["tin", "copper", "iron", "silver", "gold", "oil"],
  weather: "25",
  intelligent: true,
  enemies: true,
};
const ICE_PLANET = {
  id: 3,
  name: "Ice Planet",
  asset: getRandomFrom(ICE_PLANETS_ASSETS),
  resources: ["tin", "copper", "iron", "silver"],
  weather: "-15",
  intelligent: true,
  enemies: true,
};
const ISLAND_PLANET = {
  id: 4,
  name: "Island Planet",
  asset: getRandomFrom(ISLAND_PLANETS_ASSETS),
  resources: ["tin", "copper", "iron", "silver", "wood"],
  weather: "45",
  intelligent: false,
  enemies: true,
};
const LAVA_PLANET = {
  id: 5,
  name: "Lava Planet",
  asset: getRandomFrom(LAVA_PLANETS_ASSETS),
  resources: ["red diamonds"],
  weather: "100",
  intelligent: false,
  enemies: true,
};
const STAR = {
  name: "Star",
  asset: getRandomFrom(STARS_ASSETS),
  resources: [],
  weather: "1000",
  intelligent: false,
  enemies: false,
};
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
  actions: [],
};

export const SPACE_EVENTS = [
  {
    ...event,
    message: "You've found one ${planetType}.",
    eventType: 0,
    eventData: getRandomFrom(PLANETS),
    actions: [
      {
        type: 0,
        message: "Name it",
      },
      {
        type: 1,
        message: "Touch down",
      },
    ],
  },
];

export const ENEMY_EVENTS = [
  {
    ...event,
    message: "You encounter Aurun Drakueli from the Druekuelis",
    eventType: 1,
    eventData: {
      enemyId: 1,
      enemyHp: 100,
      asset: "aurun_drakueli.gif",
    },
  },
  {
    ...event,
    message: "A Demonic Essence has appeared!",
    eventType: 1,
    eventData: {
      enemyId: 2,
      enemyHp: 300,
      asset: "demonic_essence.gif",
    },
    eventButton: "Kill it",
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
