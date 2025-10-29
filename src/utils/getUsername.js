import { parseArgs as parseArgsNode } from "node:util";

import { RESET, UNDERSCORE } from "../utils/colors.js";
import { INTRO, OUTRO_1, OUTRO_2, FALLBACK_USERNAME } from "../utils/const.js";

const options = { username: { type: "string" } };
const args = process.argv.slice(2);

export const getUsername = () => {
  try {
    const { values } = parseArgsNode({
      args,
      options,
    });

    return values.username || FALLBACK_USERNAME;
  } catch (error) {
    console.error(error.message);
  }
};

export const showIntroMessage = (username = FALLBACK_USERNAME) => console.log(`${INTRO}${UNDERSCORE}${username}${RESET}`);

export const showOutroMessage = (username = FALLBACK_USERNAME) => console.log(`${OUTRO_1}${UNDERSCORE}${username}${RESET}${OUTRO_2}`);
