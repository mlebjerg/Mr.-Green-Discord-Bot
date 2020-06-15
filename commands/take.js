exports.run = async (client, message, value, args, level) => {
  // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("...");
  const amount = Number.parseInt(value);
  if (Number.isInteger(amount)) {
    let string = "";
    value.forEach((i) => {
      string = string + i + " ";
    });
    const oldBalance = client.balance.get(message.guild.id, "currentbalance");
    if (oldBalance - amount < 0) {
      msg.edit(
        "You are too poor to get that. **Get out of my shop you dirty bums!!**"
      );
    } else {
      client.balance.set(
        message.guild.id,
        oldBalance - amount,
        "currentbalance"
      );

      msg.edit(
        `Took ${string}\n${oldBalance}gp - ${amount}gp = **${client.balance.get(
          message.guild.id,
          "currentbalance"
        )}gp**`
      );
    }
  } else {
    msg.edit("Could not find an amount to add.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "take",
  category: "Banking",
  description: "Takes money from the players",
  usage: "take xxx",
};
