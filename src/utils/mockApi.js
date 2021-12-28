export const userLogin = async ({ number }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number === "03365567718") {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
};
