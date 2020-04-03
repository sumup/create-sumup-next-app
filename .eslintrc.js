module.exports = require('@sumup/foundry/eslint')(
  {
    language: 'TypeScript',
    environments: ['Node'],
    frameworks: ['React', 'Emotion', 'Jest'],
    openSource: true,
  },
  {
    rules: {
      'no-process-exit': 'off',
    },
    parserOptions: {
      project: ['./tsconfig.eslint.json'],
    },
    overrides: [
      {
        files: ['files/**', '*.config.js'],
        rules: {
          'notice/notice': 'off',
          'import/no-unresolved': 'off',
          'node/no-missing-require': 'off',
          'node/no-unpublished-require': 'off',
          '@typescript-eslint/no-var-requires': 'off',
        },
      },
    ],
  },
);
