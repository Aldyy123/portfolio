import { db } from "./db";
const viewPortfolio = () => {
  return new Promise((resolve, reject) => {
    db.collection("portfolio")
      .get()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
};

const filterPortfolio = (dataFilter) => {
  return new Promise((resolve, reject) => {
    db.collection("portfolio")
      .where("stack", 'array-contains', dataFilter)
      .get()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
};

export { viewPortfolio, filterPortfolio };
