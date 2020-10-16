// 配置信息
import config from "./config";
const {
  bot: { token, socks_host, socks_port },
} = config;

// bot命令
import commands from "./commands";
// bot事件
import events from "./events";

// telegram bot相关依赖包
const TelegramBot = require("node-telegram-bot-api");
const Agent = require("socks5-https-client/lib/Agent");

// teltegram bot配置
const bot = new TelegramBot(token, {
  //polling: true,
  request: {
    // 设置代理，国内访问不了telgram api
    agentClass: Agent,
    agentOptions: {
      socksHost: socks_host,
      socksPort: socks_port,
    },
  },
});

// 绑定command
if (commands) {
  commands.map((item) => {
    bot.onText(item["expression"], item["callback"](bot));
  });
}

// 绑定evnet
if (events) {
  events.map((item) => {
    bot.on(item["eventType"], item["callback"](bot));
  });
}

// 捕获异常并打印
process.on("uncaughtException", function (error) {
  console.log("\x1b[31m", "Exception: ", error, "\x1b[0m");
});
process.on("unhandledRejection", function (error) {
  console.log("\x1b[31m", "Error: ", error.message, "\x1b[0m");
});

export default bot;
