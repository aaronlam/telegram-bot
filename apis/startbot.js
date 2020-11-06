import config from "../config";

const {
  bot: { token, callback_url },
} = config;

export default function (bot, req, res) {
  bot.setWebHook(`${callback_url}/bot${token}`);

  return res.sendStatus(200);
}
