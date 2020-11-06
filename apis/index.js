import config from "../config";
import { apiHelper } from "../utils/helper";

import helloCallback from "./hello";
import botCallback from "./bot";
import startbotCallback from "./startbot";
import stopbotCallback from "./stopbot";
import sendbotmsgCallback from "./sendbotmsg";

const {
  bot: { token },
} = config;

const helloApi = apiHelper("get", "/", helloCallback);
const botApi = apiHelper("post", `/bot${token}`, botCallback);
const startbotApi = apiHelper("post", "/startbot", startbotCallback, {
  checkToken: true,
});
const stopbotApi = apiHelper("post", "/stopbot", stopbotCallback, {
  checkToken: true,
});
const sendbotmsg = apiHelper("post", "/sendbotmsg", sendbotmsgCallback, {
  checkToken: true,
});

export default [helloApi, botApi, startbotApi, stopbotApi, sendbotmsg];
