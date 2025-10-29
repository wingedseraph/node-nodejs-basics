import { styleText } from "node:util";

export const MESSAGES = {
  INTRO: "Welcome to the File Manager, ",
  OUTRO_1: "\nThank you for using File Manager, ",
  OUTRO_2: ", goodbye!",
};

export const FALLBACK_USERNAME = "guest";

export const ERRORS = {
  OPERATION_FAILED: styleText("redBright", "Operation failed"),
  SOURCE_DOESNT_EXISTS: styleText("redBright", ":: Source doesnt exists ::"),
  DESTINATION_DOESNT_EXISTS: styleText("redBright", ":: Destination already exists ::"),
};
