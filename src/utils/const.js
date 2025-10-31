import { styleText } from "node:util";

export const MESSAGES = {
  INTRO: "Welcome to the File Manager, ",
  OUTRO_1: "\nThank you for using File Manager, ",
  OUTRO_2: ", goodbye!",
};

export const FALLBACK_USERNAME = "guest";

export const ERRORS = {
  OPERATION_FAILED: styleText("redBright", "Operation failed"),
  UNKNOWN_ERROR: styleText("redBright", ":: Something went wrong ::"),
  OS_ERROR: styleText("redBright", ":: No such method for OS >>"),
  NO_ARGS: styleText("redBright", ":: Arguments must be provided and must be strings ::"),
  SOURCE_DOESNT_EXIST: styleText("redBright", ":: Source does not exist ::"),
  DESTINATION_ALREADY_EXISTS: styleText("redBright", ":: Destination already exists ::"),
};
