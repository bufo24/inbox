const { expect } = require("chai");
const { ethers } = require("hardhat");

let inbox;

beforeEach(async () => {
  const Inbox = await ethers.getContractFactory("Inbox");
  inbox = await Inbox.deploy("Hello, world!");
});

describe("Inbox", function () {
  it("Deploy Inbox", async function () {
    expect(inbox).to.exist;
    // expect(await inbox.message()).to.be.a;
  });
  it("Get message", async function () {
    expect(await inbox.message()).to.equal("Hello, world!");
  });
  it("Change message", async function () {
    const setMessageTx = await inbox.setMessage("Bye, world!");
    expect(await inbox.message()).to.equal("Bye, world!");
  });
});
