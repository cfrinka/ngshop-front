const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [    
    ...getJestProjects(),
    '<rootDir>/apps/ngshop',
    '<rootDir>/apps/admin',
    '<rootDir>/libs/ui',
    '<rootDir>/libs/orders',
    '<rootDir>/libs/products',
    '<rootDir>/libs/users'
  ]
};
