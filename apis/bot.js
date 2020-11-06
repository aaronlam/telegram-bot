export default function (bot, req, res) {
  // 控制台输出request body
  console.log(req.body);
  bot.processUpdate(req.body);

  res.sendStatus(200);
}
