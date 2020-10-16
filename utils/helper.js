const commandHelper = (expression, callback) => {
  const orginCallback = (bot) =>
    // 由于需要获取上下文this，故这里使用普通形式的回调函数
    function (...args) {
      return callback.call(this, bot, ...args);
    };

  return {
    expression,
    callback: orginCallback,
  };
};

const eventHelper = (eventType, callback) => {
  const orginCallback = (bot) =>
    // 由于需要获取上下文this，故这里使用普通形式的回调函数
    function (...args) {
      return callback.call(this, bot, ...args);
    };

  return {
    eventType,
    callback: orginCallback,
  };
};

export { commandHelper, eventHelper };
