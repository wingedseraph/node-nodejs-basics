import { BG_BLUE } from "../utils/colors.js";

const REGEX_USERNAME = "--username=";
const FALLBACK_USERNAME = "guest";
const INTRO = "Welcome to the File Manager, ";

const parseArgs = () => {
  try {
    const args = process.argv.slice(2);

    if (args.length === 0) {
      console.log(INTRO + BG_BLUE + FALLBACK_USERNAME);
      return;
    }

    for (const arg of args) {
      if (typeof arg === "string" && arg.startsWith(REGEX_USERNAME)) {
        console.log(INTRO + BG_BLUE + arg.replace(REGEX_USERNAME, ""));
      } else {
        console.log(INTRO + BG_BLUE + FALLBACK_USERNAME);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
};

parseArgs();
