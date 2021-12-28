import  { ethers } from "ethers";
import sdk from './1-initialize-sdk';
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xEbA8D96B65645148FFbc53E4A15E5Bd5f67C8cB8");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "WorkoutDAO Membership",
            description: "A membership ticket for WorkoutDAO which is a DAO for reaching Fitness and Strenght goals",
            image: readFileSync("scripts/assets/workoutdao-membership.png"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,

        });
        console.log(`✅ Successfully deployed bundleDrop module, address: ${bundleDropModule.address}`);
        console.log(`✅ bundleDrop metadata: ${await bundleDropModule.getMetadata()}`);
    } catch (error) {
        console.error(`Failed to deploy bundleDrop module: ${error}`)
    }
})