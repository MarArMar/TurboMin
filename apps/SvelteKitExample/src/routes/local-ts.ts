export const messageLoadedLocal: string =
  "Local typescript file  local-ts.ts with typescript loaded";

let shouldBeAConst = "Lint test"; // Lint working

export const currentURL = (): string => {
  return window.location.href; // Identified Window global
};

export const exampleDocument = () => {
  document.createTextNode("test"); // Identified Window global
};

type SomeProperties = {
  age: number;
  name: string;
};

export const propsValues: SomeProperties = {
  age: 4,
  name: "henry",
};
