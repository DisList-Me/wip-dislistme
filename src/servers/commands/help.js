const Discord=require("discord.js")
const {MessageButton} = require("discord-buttons")
const { registerFont, createCanvas } = require('canvas');
const serverData = require("../../database/models/servers/server.js");

exports.run=async (client, message, args) => {
  const Embed=new Discord.MessageEmbed();
  Embed.setTitle("Server List Help");
  Embed.addField("**__Bump__**", " [__**me.bump**__] - Bumps your server in the list", false)
  Embed.addField("**__Link__**", " [__**me.link**__] - Sends link of server", false)
  Embed.addField("**__User Profile__**", "[__**me.profile**__] - Shows your dislist.me profile", false)
  Embed.addField("**__Vote__**", "[__**me.vote**__] - Votes your server on dislist.me like a bump ", false)
  await message.channel.send(Embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
};

exports.help = {
  name: "help",
  description: "shows commands",
  usage: "me.help"
};