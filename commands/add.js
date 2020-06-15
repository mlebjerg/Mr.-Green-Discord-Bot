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
    client.balance.set(message.guild.id, oldBalance + amount, "currentbalance");

    msg.edit(
      `Added ${string}\n${oldBalance}gp + ${amount}gp = **${client.balance.get(
        message.guild.id,
        "currentbalance"
      )}gp**`
    );
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
  name: "add",
  category: "Banking",
  description: "Adds money to the bank",
  usage: "add xxx",
};
