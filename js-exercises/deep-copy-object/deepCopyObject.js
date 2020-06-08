function deepCopyObject(myObj) {
  if (typeof myObj !== "object" || myObj === null) {
    return myObj;
  }
  let clonedObj = {};
  let keys = Object.getOwnPropertyNames(myObj);
  for (let key of keys) {
    clonedObj[key] = deepCopyObject(myObj[key]);
  }
  return clonedObj;
}

export { deepCopyObject };
