// we are importing the sdk that we previously set up in the "1-initialize-sdk.js" file
import sdk from "./1-initialize-sdk.js";

// in order to deploy the new module we need our old friend the app module for one last time.
const appModule = sdk.getAppModule(
  "0xbDE5aeCa4DD6FcDF4cbA0A86c61f141c39Cb8d64",
);

try {
  // ast module we're deploying today!
  // the vote module allows you to create "proposals" that governance token holders can vote on on-chain.
  await appModule.deployVoteModule({
    // the name of the module, you will likely be deploying multiple votes over time, so it makes sense to add a # number to the name
    name: "CookieDAO Vote #1",
    // the module address of the governance token that will be used for voting (this is the same token that we deployed and minted earlier)
    votingTokenAddress: "0x608fE848119636ecdAF36e827617a2030cd6f449",

    // if you want to delay the start of the voting, you can increase this number.
    // we'll set it to 0 (meaning voting starts immediately)
    proposalStartWaitTimeInSeconds: 0,

    // how long the vote should run for in seconds
    // at the end of this time the vote will be closed and the results will executed on-chain
    // we'll set this to 24 hours (86400 seconds)
    proposalVotingTimeInSeconds: 24 * 60 * 60,
    // the *percentage* of the total token supply that needs to
    votingQuorumFraction: 1,
  });
} catch (err) {
  console.log("Failed to deploy vote module", err);
}
