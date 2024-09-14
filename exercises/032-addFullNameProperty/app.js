function addFullNameProperty(obj) {
  let newObj = { ...obj }; 
  newObj.fullName = newObj.firstName + " " + newObj.lastName;
  return newObj;
}