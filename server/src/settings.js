import dotenv from 'dotenv';
dotenv.config();

const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;

export default {
  testEnvironmentVariable
};
