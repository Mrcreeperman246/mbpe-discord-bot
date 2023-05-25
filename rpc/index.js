const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Playing MBPE",
        state: "Version 3.7",
        startTimestamp: new Date(),
        largeImageKey: "icon",
        largeImageText: "MBPE Logo",
        smallImageKey: "smallicon",
        smallImageText: "Active",
        //buttons : [{label : "Invite bot" , url : "https://discord.com/api/oauth2/authorize?client_id=724010383672868886&permissions=8&scope=bot"},{label : "Visit bot site",url : "https://minebloxpe.weebly.com/"}]
    });

    console.log("RCP is now active on account: Creeper#6662");
});

rpc.login({
    clientId: "792591082781016064"
});