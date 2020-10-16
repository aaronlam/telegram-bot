import cron from "node-cron";

import news from "./news";

const tasks = [
  {
    expression: "00 00 * * *",
    callback: news,
  },
];

const init = (bot) => {
  console.log("cron task start");

  // 注册定时任务
  tasks.map((item) => {
    cron.schedule(item["expression"], function (...args) {
      return item["callback"].call(this, bot, ...args);
    });
  });
};

export default init;
