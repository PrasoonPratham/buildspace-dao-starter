import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "<DROP_MODULE_ADDRESS>",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Leaf Village Headband",
                description: "This NFT will give you access to NarutoDAO!",
                image: readFileSync("scripts/assets/headband.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()