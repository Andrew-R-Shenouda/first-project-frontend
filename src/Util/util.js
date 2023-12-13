const convertToDollarFormat = (number) => {
  if (number !== undefined && number !== null) {
    var newNumber = parseFloat(number);
    newNumber = newNumber.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return newNumber;
  }

  return number;
};

const convertToNumberFormat = (number) => {
  if (number !== undefined && number !== null) {
    var newNumber = parseFloat(number);
    newNumber = newNumber.toLocaleString("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return newNumber;
  }

  return number;
};

export { convertToDollarFormat, convertToNumberFormat };
