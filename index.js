// 配置信息
import config from "./config";

// telegram bot
import bot from "./bot";
// telegram bot cron
import cron from "./cron";
// apis
import apis from "./apis";

const {
  bot: { token, callback_url },
  api: { depoly_port },
} = config;

// api相关依赖包
const express = require("express");
const bodyParser = require("body-parser");

// express配置
const app = express();
app.use(bodyParser.json());

// 绑定api
if (apis) {
  apis.map((api) => {
    const { type, expression, callback } = api;
    app[type](expression, callback(bot));
  });
}

app.listen(depoly_port, () => {
  console.log(`Express server is listening on ${depoly_port}`);
  // 初始化webhook
  bot.setWebHook(`${callback_url}/bot${token}`);
  // 初始化并启动定时任务
  cron(bot);
});
