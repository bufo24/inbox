const { describe, expect, test } = require("@jest/globals");
const { ethers } = require("hardhat");

let inbox;
beforeEach(async () => {
  const Inbox = await ethers.getContractFactory("Inbox");
  inbox = await Inbox.deploy("Hello, world!");
});

describe("Inbox", () => {
  test("Deploy Inbox", async () => {
    expect(inbox).toBeDefined();
    // expect(await inbox.message()).to.be.a;
  });
  test("Get message", async () => {
    expect(await inbox.message()).toBe("Hello, world!");
  });
  test("Change message", async () => {
    const setMessageTx = await inbox.setMessage("Bye, world!");
    expect(await inbox.message()).toBe("Bye, world!");
  });
});
