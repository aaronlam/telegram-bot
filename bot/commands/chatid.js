export default function (bot, msg) {
  const {
    chat: { id, username },
  } = msg;

  bot.sendMessage(id, `Hello ${username}, your chat id is: ${id}`);
}
