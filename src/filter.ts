import { 
  Branch,
  csvExportData,
  Column
} from './interfaces'

export function FilterData(data: csvExportData, branch: Branch, owePeriod: number, balMin: number, balMax: number, exclude: string) {
  // Remove headers
  data.splice(0,1);

  let oweColumn : Column;
  if (owePeriod === 0) oweColumn = Column.owe30;
  else if (owePeriod === 1) oweColumn = Column.owe60;
  else if (owePeriod === 1) oweColumn = Column.owe90;

  const output = data.filter((line) => {
    line[Column.branch] === branch &&
    parseInt(line[oweColumn]) >= balMin && parseInt(line[oweColumn]) <= balMax &&
    !exclude.includes(line[Column.firstName])
  });

  console.log(output);

}