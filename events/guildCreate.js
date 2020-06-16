// This event executes when a new guild (server) is joined.

module.exports = (client, guild) => {
  client.logger.cmd(
    `[GUILD JOIN] ${guild.name} (${guild.id}) added the bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`
  );
  client.logger.cmd(`[Add Enmap to Guild] ID: ${guild.id}`);
  client.balance.set(guild.id, 0, "currentbalance");
};
