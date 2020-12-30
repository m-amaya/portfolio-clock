const getTime = () => {
  const time = new Date();

  return {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };
};

export default getTime;
