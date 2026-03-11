const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/\s/g, "") // remove all whitespace
      .split("")
      .sort()
      .join("");

  return normalize(str1) === normalize(str2);
};

console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("hello", "world")); // false
