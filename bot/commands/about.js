const callback = (bot, msg) => {
  const {
    chat: { id },
  } = msg;

  bot.sendMessage(id, "Hello, i am Wall-E.");
};

export default callback;
