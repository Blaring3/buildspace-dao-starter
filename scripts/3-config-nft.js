import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xF0e54eC15e85b697a2F36c47580e62940E22555B");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Anal Members Lebron",
        description: "This NFT will give you access to my housse and my wife!",
        image: readFileSync("./Verb.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();