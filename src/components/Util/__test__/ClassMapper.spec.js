// flow-disable

import { mapClasses } from "../ClassMapper";

describe("ClassMapper", () => {
  it("Maps classes that have the value of true", () => {
    const classes = {
      "class-a": true,
      "class-b": true
    };
    const mapped = mapClasses(classes);
    expect(mapped).toEqual("class-a class-b");
  });
  it("Does not map classes that have the value of false", () => {
    const classes = {
      "class-a": false,
      "class-b": false
    };
    const mapped = mapClasses(classes);
    expect(mapped.length === 0);
  });
});
