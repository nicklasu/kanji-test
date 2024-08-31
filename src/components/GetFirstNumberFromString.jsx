// Get the first number from a string and return it
const GetFirstNumberFromString = (string) => {
  const match = string.match(/\d+/);

  const firstNumber = match ? match[0] : null;

  return firstNumber;
}

export default GetFirstNumberFromString;