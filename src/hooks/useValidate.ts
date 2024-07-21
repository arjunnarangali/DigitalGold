const pattern = {
  number: /^\d*(\.\d*)?$/,
};

type PatternKeys = keyof typeof pattern;

const useValidate = () => {
  const validate = (type: PatternKeys, input: string): boolean => {
    return pattern[type].test(input);
  };
  return {
    validate,
    pattern,
  };
};

export default useValidate;
