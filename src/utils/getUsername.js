import { parseArgs as parseArgsNode } from "node:util";
import { styleText } from "node:util";

import { MESSAGES, FALLBACK_USERNAME } from "../utils/const.js";

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

export const showIntroMessage = (username = FALLBACK_USERNAME) => console.log(MESSAGES.INTRO + styleText("underline", username));

export const showOutroMessage = (username = FALLBACK_USERNAME) =>
  console.log(MESSAGES.OUTRO_1 + styleText("underline", username) + MESSAGES.OUTRO_2);
