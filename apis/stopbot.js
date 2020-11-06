
export default function (bot, req, res) {
  bot.deleteWebHook();

  return res.sendStatus(200);
}
