import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect, util } from "chai";

import { ethers } from "hardhat";


describe("Storage contract", function () {

    async function deployStorageFixture() {
        const provider = ethers.getDefaultProvider(  )
        const [owner, addr1] = await ethers.getSigners();
  
        const Storage = await ethers.getContractFactory("Storage");
        const storage = await Storage.deploy();

        await storage.deployed();
        return { Storage, storage, owner, addr1 };
    }

    it("Should assign the owner to msg.sender of constructor.", async function () {
        const { storage, owner } = await loadFixture(deployStorageFixture);
        const storageOwner = storage.owner();
        expect(await storageOwner).to.equal(owner.address);
    });

    it("Should allow only owner to withdraw.", async function () {
    });

    it("Should recieve funds when paid.", async function () {
    });

    it("Should update balances when paid.", async function () {
    });

});
