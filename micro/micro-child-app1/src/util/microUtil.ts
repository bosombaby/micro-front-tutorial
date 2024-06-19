// 判断是否为微前端环境
const isMicroApp = (window as any).__MICRO_APP_ENVIRONMENT__;
const urlConfigResolver = () => {
  if (isMicroApp) {
    console.log("当前处于微前端环境", location.origin);

    return location.origin;
  } else {
    console.log("当前独立运行", location.origin);
    return "";
  }
};

export { urlConfigResolver, isMicroApp };
