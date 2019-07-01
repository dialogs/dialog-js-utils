/*
 * Copyright 2018 Dialog LLC <info@dlg.im>
 */

import { mapNotNull } from "../mapNotNull";

describe("mapNotNull", () => {
  it("should correctly filter values", () => {
    expect(mapNotNull([1, null, 2], val => val)).toEqual([1, 2]);
  });
});
