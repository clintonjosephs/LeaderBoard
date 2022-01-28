const validateInputs = (user, scores) => {
  if (user.trim().length === 0 || user.trim().length > 15 || user.trim().length < 3) {
    return [false, 'Username should have between 3 - 15 characters'];
  } if (scores.length > 4) {
    return [false, 'Scores should not be greater than 9999'];
  }
  return [true, 'input valid'];
};

export default validateInputs;