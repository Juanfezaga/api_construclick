/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const findInArrayByField = (data, property, value) => data.filter(
  (element) => element && element[property] === value,
);

const findOneInArray = (data, property, value) => {
  const element = findInArrayByField(data, property, value);
  return element ? element[0] : null;
};

const removeDuplicates = (originalArray, prop) => {
  const newArray = [];
  const lookupObject = {};
  let i;
  for (i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
};

module.exports = {
  findOneInArray,
  removeDuplicates,
  findInArrayByField,
};
