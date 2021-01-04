import { getByTestId } from "@testing-library/dom";

import createLeaderBoardTable from "../helpers/leaderBoardTable";

describe("LeaderBoardTable Creation ", () => {
  beforeEach(() => {
    let div;
    jest.spyOn(document, "querySelector").mockImplementation((selector) => {
      switch (selector) {
        case "#results":
          div = document.createElement("div");
          div.setAttribute("id", "results");
          div.dataset["testid"] = "results";
          return div;
        default:
          break;
      }
    });
    jest.spyOn(document, "getElementById").mockImplementation((selector) => {
      switch (selector) {
        case "results":
          return div;
        default:
          break;
      }
    });
  });
  const apiData = [
    { user: "Maryjane", score: "30" },
    { user: "Daniel", score: "100" },
    { user: "Steve", score: "0" },
    { user: "Shola", score: "300" },
    { user: "Joe", score: "10" },
    { user: "jane", score: "30" },
    { user: "Mary", score: "50" },
    { user: "Dariel", score: "70" },
    { user: "Afole", score: "0" },
    { user: "Kay", score: "80" },
    { user: "Bisi", score: "40" },
  ];

  it("should create a table element", () => {
    createLeaderBoardTable(apiData);
    const container = document.getElementById("results");
    expect(container).toMatchSnapshot();
  });
  // it('should convert the score property to a number', () => {
  //   expect(typeof returnValue[0].score).not.toBe('string');
  //   expect(typeof returnValue[0].score).toBe('number');
  // });
  // it('should return a sorted array of objects in descending order of scores', () => {
  //   expect(returnValue).toStrictEqual(sortedData);
  // });
});
