const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

// Generate environment.ts file based on the environment variables
const targetPath = `./src/environments`;
const envFileContent_Development = `
export const environment = {
  production: false,
  syncFusionLicense: "${process.env['SYNCFUSION_LICENSE']}",
};
`;
const envFileContent = `
export const environment = {
  production: true  ,
  syncFusionLicense: "",
};
`;


//Crea el directorio
mkdirSync('./src/environments', { recursive: true  });
writeFileSync(`${targetPath}/environment.development.ts`, envFileContent_Development);
writeFileSync(`${targetPath}/environment.ts`, envFileContent);
