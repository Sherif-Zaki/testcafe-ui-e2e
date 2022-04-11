import dotenv from 'dotenv'

dotenv.config()

const config = {
  local: {
    baseUrl: "https://www.saucedemo.com/",
  },
  production: {
    baseUrl: "https://www.saucedemo.com/",
  },
}

// Resolve the test environment
const testEnv = process.env.TEST_ENV as keyof typeof config || ('local' as keyof typeof config)

// eslint-disable-next-line no-console
console.log(`Test will be run against ${config[testEnv].baseUrl}`)

export default config[testEnv]
