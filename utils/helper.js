import config from "../config";

// api配置信息
const {
  api: { secret = "" },
} = config;

const apiHelper = (type, expression, callback, { checkToken = false } = {}) => {
  const originCallback = (bot) =>
    // 由于需要获取上下文this，故这里使用普通形式的回调函数
    function (...args) {
      if (checkToken) {
        // 校验token
        const [req, res] = args;
        const inSecret = req.get("X-Secret");

        if (inSecret !== secret) {
          return res.sendStatus(401);
        }
      }

      callback.call(this, bot, ...args);
    };

  return {
    type,
    expression,
    callback: originCallback,
  };
};

const commandHelper = (expression, callback) => {
  const originCallback = (bot) =>
    // 由于需要获取上下文this，故这里使用普通形式的回调函数
    function (...args) {
      return callback.call(this, bot, ...args);
    };

  return {
    expression,
    callback: originCallback,
  };
};

const eventHelper = (eventType, callback) => {
  const originCallback = (bot) =>
    // 由于需要获取上下文this，故这里使用普通形式的回调函数
    function (...args) {
      return callback.call(this, bot, ...args);
    };

  return {
    eventType,
    callback: originCallback,
  };
};

export { apiHelper, commandHelper, eventHelper };
