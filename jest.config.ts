import type { Config } from "@jest/types";

const config = async (): Promise<Config.InitialOptions> => ({
  verbose: true,
  preset: "ts-jest",
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/jest/folderToBeIgnore", "build"],
  coveragePathIgnorePatterns: [".(test|spec).(js|ts)", ".json", ".d.ts"],
  collectCoverageFrom: ["<rootDir>/src/**/*", "!<rootDir>/src/types/*"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {},
});

export default config;
