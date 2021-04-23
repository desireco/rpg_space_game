import getRandomEvent from "../../events";

export default function handler(req, res) {
  res.status(200).json(getRandomEvent());
}
