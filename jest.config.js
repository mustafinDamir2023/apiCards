// jest.config.js
import { defaults } from 'jest-config';

export default {
  transform: {
    '^.+\.jsx?$': 'babel-jest', // Для преобразования файлов .js и .jsx
    '^.+\.ts$': 'ts-jest', // Если вы используете TypeScript
  },
  testEnvironment: 'jsdom', // Убедитесь, что тесты запускаются в окружении браузера
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'], // Расширения файлов, которые Jest будет обрабатывать
  ...defaults,
};
  