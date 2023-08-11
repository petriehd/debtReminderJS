import express from 'express';
import bodyParser from 'body-parser';
import { getExportData } from './data'
import { FilterData } from './filter';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.post('/filter', (req, res) => {
  const owePeriod = req.body.option;
  const min = req.body.min;
  const max = req.body.max;
  const branch = req.body.branch;
  const exclude = 'Anetta';

  const data = getExportData('./src/data/test.csv');
  FilterData(data, branch, owePeriod, min, max, exclude);


  res.send('Form submitted successfully');
});