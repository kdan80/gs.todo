// jest.config.js
import type { Config } from '@jest/types';
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const customJestConfig: Config.InitialOptions = {
  
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

const config = createJestConfig(customJestConfig)

export default config;