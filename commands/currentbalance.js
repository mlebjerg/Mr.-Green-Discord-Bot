exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("...");
  msg.edit(
    `Your balance is **${client.balance.get(
      message.guild.id,
      "currentbalance"
    )}gp**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "currentbalance",
  category: "Banking",
  description: "Shows the current balance",
  usage: "currentbalance",
};
