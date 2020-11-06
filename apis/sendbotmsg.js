export default function (bot, req, res) {
  const {
    body: { id = "", msg },
  } = req;

  if (id === "") {
    return res.sendStatus(404);
  }

  bot.sendMessage(id, msg);
  res.sendStatus(200);
}
