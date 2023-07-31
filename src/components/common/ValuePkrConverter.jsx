const ValuePkrConverter = (value) => {
  if (value >= "10000000") {
    return `${(value / 10000000).toFixed(1)} Crore`;
  } else if (value >= "100000") {
    return `${(value / 100000).toFixed(1)} Lakh`;
  } else if (value >= "1000") {
    return `${(value / 1000).toFixed(1)} Thousand`;
  }
};

export default ValuePkrConverter;
