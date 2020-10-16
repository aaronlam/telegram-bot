const callback = (bot, msg) => {
  const {
    chat: { id, username },
  } = msg;

  bot.sendMessage(id, `Hello ${username}, welcome my world.`);
};

export default callback;
