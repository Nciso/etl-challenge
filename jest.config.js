module.exports = {
  roots: ['<rootDir>/src'],
  testMatch:['**/?(*.)+(spec|test).ts'],
  transform: {
      '^.+\\.tsx?$': 'ts-jest'
  },
  coverageThreshold: {
      global: {
          branches: 70,
          functions: 80,
          lines: 80,
          statements: 80
      }
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover']
}