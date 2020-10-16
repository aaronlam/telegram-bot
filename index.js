// 配置信息
import config from "./config";
const {
  bot: { token, callback_url },
  api: { secret, depoly_port },
} = config;

// telegram bot
import bot from "./bot";
// telegram bot cron
import cron from "./cron";

// api相关依赖包
const express = require("express");
const bodyParser = require("body-parser");

// express配置
const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post(`/bot${token}`, (req, res) => {
  // 控制台输出request body
  console.log(req.body);
  bot.processUpdate(req.body);

  res.sendStatus(200);
});
app.post("/startbot", (req, res) => {
  const {
    body: { secret: inSecret = "" },
  } = req;

  if (inSecret === secret) {
    bot.setWebHook(`${callback_url}/bot${token}`);

    return res.sendStatus(200);
  }

  res.sendStatus(404);
});
app.post("/stopbot", (req, res) => {
  const {
    body: { secret: inSecret = "" },
  } = req;

  if (inSecret === secret) {
    bot.deleteWebHook();

    return res.sendStatus(200);
  }

  res.sendStatus(404);
});
app.listen(depoly_port, () => {
  console.log(`Express server is listening on ${depoly_port}`);
  // 初始化webhook
  bot.setWebHook(`${callback_url}/bot${token}`);
  // 初始化并启动定时任务
  cron(bot);
});
