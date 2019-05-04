module.exports = {
  preset: "react-native",
  coverageThreshold: {
    global: {
      statements: 90,
      statements: 90,
      statements: 90,
      statements: 90,
    },
  },
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/setup.js",
    "<rootDir>/node_modules"
  ],
  setupFilesAfterEnv: ["<rootDir>/__tests__/setup.js"],
};
