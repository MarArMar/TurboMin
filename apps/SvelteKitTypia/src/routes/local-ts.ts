export const messageLoadedLocal: string =
  "Local typescript file  local-ts.ts with typescript loaded";

const shouldBeAConst = "Lint test"; // Working

export const currentURL = (): string => {
  return window.location.href; // Identified Window global
};

export const exampleDocument = () => {
  document.createTextNode("test"); // Identified Window global
};
