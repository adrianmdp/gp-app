const usePathParser = () => {
  const toArray = (value: string): string[] => {
    let splitPath = value.split("/").filter((elem) => elem !== "");
    splitPath.shift();
    return splitPath;
  };

  const toString = (value: string[]): string => {
    return value ? `/${value.join("/")}` : "";
  };

  return { toArray, toString };
};

export { usePathParser };
