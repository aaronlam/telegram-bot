const callback = (bot, msg) => {
  const {
    chat: { id, username },
  } = msg;

  bot.sendMessage(id, "Plase select...", {
    reply_markup: {
      keyboard: [
        ["button1", "button2"],
        ["button3", "button4"],
        ["button5", "button6"],
        ["button7", "button8"],
      ],
    },
  });
};

export default callback;
