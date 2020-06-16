exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("...");
  let balance = client.balance.get(message.guild.id, "currentbalance");

  if (balance === null || balance === undefined) {
    balance = 0;
    client.balance.set(message.guild.id, balance, "currentbalance");
  }
  msg.edit(`Your balance is **${balance}gp**`);
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
