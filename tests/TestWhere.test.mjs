// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Zora from "@dusty-phillips/rescript-zora/src/Zora.mjs";
import * as Zora$1 from "zora";
import * as Table$Dexie from "../src/Table.mjs";
import * as Where$Dexie from "../src/Where.mjs";
import * as TestSetup$Dexie from "./TestSetup.mjs";

Zora$1.test("Where clauses", (function (t) {
        var dexie = TestSetup$Dexie.setup(undefined);
        return TestSetup$Dexie.p(TestSetup$Dexie.friendFixture(dexie), (function (friends) {
                      return TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(TestSetup$Dexie.p(Table$Dexie.where(friends, "name").equals("Chris").toArray(), (function (chris) {
                                                                                                t.equal(chris, [{
                                                                                                        id: 1,
                                                                                                        name: "Chris",
                                                                                                        color: "Red"
                                                                                                      }], "should be Chris");
                                                                                                return Table$Dexie.where(friends, "name").equalsIgnoreCase("chris").toArray();
                                                                                              })), (function (chris) {
                                                                                            t.equal(chris, [{
                                                                                                    id: 1,
                                                                                                    name: "Chris",
                                                                                                    color: "Red"
                                                                                                  }], "should be Chris");
                                                                                            return Table$Dexie.where(friends, "id").above(5).toArray();
                                                                                          })), (function (items) {
                                                                                        t.equal(items, [
                                                                                              {
                                                                                                id: 6,
                                                                                                name: "Rohan",
                                                                                                color: "Red"
                                                                                              },
                                                                                              {
                                                                                                id: 7,
                                                                                                name: "Natalia",
                                                                                                color: "Red"
                                                                                              },
                                                                                              {
                                                                                                id: 8,
                                                                                                name: "Padma",
                                                                                                color: "Purple"
                                                                                              }
                                                                                            ], "Should have the last three items");
                                                                                        return Table$Dexie.where(friends, "id").aboveOrEqual(6).toArray();
                                                                                      })), (function (items) {
                                                                                    t.equal(items, [
                                                                                          {
                                                                                            id: 6,
                                                                                            name: "Rohan",
                                                                                            color: "Red"
                                                                                          },
                                                                                          {
                                                                                            id: 7,
                                                                                            name: "Natalia",
                                                                                            color: "Red"
                                                                                          },
                                                                                          {
                                                                                            id: 8,
                                                                                            name: "Padma",
                                                                                            color: "Purple"
                                                                                          }
                                                                                        ], "Should have the last three items");
                                                                                    return Table$Dexie.where(friends, "id").below(3).toArray();
                                                                                  })), (function (items) {
                                                                                t.equal(items, [
                                                                                      {
                                                                                        id: 1,
                                                                                        name: "Chris",
                                                                                        color: "Red"
                                                                                      },
                                                                                      {
                                                                                        id: 2,
                                                                                        name: "Leroy",
                                                                                        color: "Blue"
                                                                                      }
                                                                                    ], "Should have the first two items");
                                                                                return Table$Dexie.where(friends, "id").belowOrEqual(2).toArray();
                                                                              })), (function (items) {
                                                                            t.equal(items, [
                                                                                  {
                                                                                    id: 1,
                                                                                    name: "Chris",
                                                                                    color: "Red"
                                                                                  },
                                                                                  {
                                                                                    id: 2,
                                                                                    name: "Leroy",
                                                                                    color: "Blue"
                                                                                  }
                                                                                ], "Should have the first two items");
                                                                            return Table$Dexie.where(friends, "name").anyOf([
                                                                                          "Leroy",
                                                                                          "Rohan"
                                                                                        ]).toArray();
                                                                          })), (function (items) {
                                                                        t.equal(items, [
                                                                              {
                                                                                id: 2,
                                                                                name: "Leroy",
                                                                                color: "Blue"
                                                                              },
                                                                              {
                                                                                id: 6,
                                                                                name: "Rohan",
                                                                                color: "Red"
                                                                              }
                                                                            ], "Should have the two selected items");
                                                                        return Table$Dexie.where(friends, "name").anyOfIgnoreCase([
                                                                                      "leRoy",
                                                                                      "roHan"
                                                                                    ]).toArray();
                                                                      })), (function (items) {
                                                                    t.equal(items, [
                                                                          {
                                                                            id: 2,
                                                                            name: "Leroy",
                                                                            color: "Blue"
                                                                          },
                                                                          {
                                                                            id: 6,
                                                                            name: "Rohan",
                                                                            color: "Red"
                                                                          }
                                                                        ], "Should have the two selected items");
                                                                    return Table$Dexie.where(friends, "name").notEqual("Rohan").toArray();
                                                                  })), (function (items) {
                                                                t.equal(items.length, 7, "should only contain 7 items");
                                                                return Table$Dexie.where(friends, "name").noneOf([
                                                                              "Rohan",
                                                                              "Chris",
                                                                              "Natalia"
                                                                            ]).toArray();
                                                              })), (function (items) {
                                                            t.equal(items.length, 5, "should only contain 5 items");
                                                            return Table$Dexie.where(friends, "name").startsWith("Le").toArray();
                                                          })), (function (items) {
                                                        t.equal(items, [{
                                                                id: 2,
                                                                name: "Leroy",
                                                                color: "Blue"
                                                              }], "Should start with Le");
                                                        return Table$Dexie.where(friends, "name").startsWithAnyOf([
                                                                      "Le",
                                                                      "Na"
                                                                    ]).toArray();
                                                      })), (function (items) {
                                                    t.equal(items, [
                                                          {
                                                            id: 2,
                                                            name: "Leroy",
                                                            color: "Blue"
                                                          },
                                                          {
                                                            id: 7,
                                                            name: "Natalia",
                                                            color: "Red"
                                                          }
                                                        ], "Should start with Le and Na");
                                                    return Table$Dexie.where(friends, "name").startsWithIgnoreCase("le").toArray();
                                                  })), (function (items) {
                                                t.equal(items, [{
                                                        id: 2,
                                                        name: "Leroy",
                                                        color: "Blue"
                                                      }], "Should start with Le");
                                                return Table$Dexie.where(friends, "name").startsWithAnyOfIgnoreCase([
                                                              "le",
                                                              "na"
                                                            ]).toArray();
                                              })), (function (items) {
                                            t.equal(items, [
                                                  {
                                                    id: 2,
                                                    name: "Leroy",
                                                    color: "Blue"
                                                  },
                                                  {
                                                    id: 7,
                                                    name: "Natalia",
                                                    color: "Red"
                                                  }
                                                ], "Should start with le and na");
                                            return Where$Dexie.inAnyRange(Table$Dexie.where(friends, "name"), undefined, [[
                                                            "Le",
                                                            "Op"
                                                          ]]).toArray();
                                          })), (function (items) {
                                        t.equal(items, [
                                              {
                                                id: 2,
                                                name: "Leroy",
                                                color: "Blue"
                                              },
                                              {
                                                id: 7,
                                                name: "Natalia",
                                                color: "Red"
                                              }
                                            ], "Should be in range");
                                        return Where$Dexie.inAnyRange(Table$Dexie.where(friends, "id"), {
                                                      includeLowers: false,
                                                      includeUppers: true
                                                    }, [
                                                      [
                                                        1,
                                                        4
                                                      ],
                                                      [
                                                        6,
                                                        7
                                                      ]
                                                    ]).toArray();
                                      })), (function (items) {
                                    console.log(items);
                                    t.equal(items, [
                                          {
                                            id: 2,
                                            name: "Leroy",
                                            color: "Blue"
                                          },
                                          {
                                            id: 3,
                                            name: "Jerome",
                                            color: "Purple"
                                          },
                                          {
                                            id: 4,
                                            name: "Betty",
                                            color: "Purple"
                                          },
                                          {
                                            id: 7,
                                            name: "Natalia",
                                            color: "Red"
                                          }
                                        ], "Should be in Range with options");
                                    return Zora.done(undefined);
                                  }));
                    }));
      }));

export {
  
}
/*  Not a pure module */
