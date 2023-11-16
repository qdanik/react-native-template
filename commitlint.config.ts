import type { UserConfig } from '@commitlint/types';

const typeEnum = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'];

const scopeEnum = ['added', 'fixed', 'changed', 'removed', 'deprecated'];

// Template: <type>(<scope>): <subject>
// Examples: 
// fix(fixed): fix bug
// feat(added): add feature
// chore(changed): change config
// style(removed): remove style
// docs(deprecated): deprecate doc
// refactor: refactor code
// test: add test
const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', typeEnum],
    'subject-empty': [0, 'always'],
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', scopeEnum],
    'header-max-length': [2, 'always', 512],
  },
};

module.exports = Configuration;
