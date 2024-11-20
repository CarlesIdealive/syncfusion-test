const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

// Generate environment.ts file based on the environment variables
const targetPath = `./src/environments/environment.development.ts`;
const envFileContent = `
export const environment = {
  production: false,
  syncFusionLicense: "${process.env['SYNCFUSION_LICENSE']}",
};
`;

//Crea el directorio
mkdirSync('./src/environments', { recursive: true  });
writeFileSync(targetPath, envFileContent);
