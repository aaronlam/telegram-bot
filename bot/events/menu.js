const callback = (bot, msg) => {
  const {
    chat: { id },
    text,
  } = msg;

  if (text.indexOf("button8") === 0) {
    bot.sendMessage(id, "i love you...");
  }
};

export default callback;
