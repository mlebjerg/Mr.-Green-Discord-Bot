exports.run = async (client, message, value, args, level) => {
  // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("...");
  const amount = Number.parseInt(value);
  client.balance.set(message.guild.id, amount, "currentbalance");
  msg.edit(
    `The balance is now ${client.balance.get(
      message.guild.id,
      "currentbalance"
    )}gp`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "setbalance",
  category: "Banking",
  description: "Sets the balance to what you want",
  usage: "setbalance xxx",
};
