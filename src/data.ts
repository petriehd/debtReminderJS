import fs, { readFile, readFileSync } from 'fs'
import { csvExportData } from './interfaces';

export function getExportData(filePath: string){

  const data = fs.readFileSync(filePath, 'utf-8');
  const lines  = data.split('\n');
  return lines.map((line) => line.split(','));
}

function finalDataFormatCheck() {

};