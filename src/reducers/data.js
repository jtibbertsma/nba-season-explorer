import { IMPORT_DATA } from '../constants/actions';
import Papa from 'papaparse';

const defaultState = {
  // An array of all teams in the data
  teamList: [],
  // An array of all dates
  dateList: [],
  // An array of the original data rows
  rows: [],
  // arrays of point data organized by date. Since we want to show points vs dates
  // on the chart, each item looks like this: 
  // {
  //   date: "10/26/16",
  //   "Miami Heat": 108,
  //   ...: ...
  // }
  all: [],
  home: [],
  away: [],
};

// Takes raw csv data and organizes into the form shown above
function processImportedData(rawData) {
  const teams = {};
  const all = [];
  const home = [];
  const away = [];

  const dateRegex = /\d+\/\d+\/\d+/;
  // Remove extraneous rows
  const data = Papa.parse(rawData)
    .data
    .filter(row => row.length > 0 && dateRegex.exec(row[0]));

  // Preprocess data: result is an object with date strings as keys and arrays of
  // rows as values
  const dates = {};
  for (let i = 0; i < data.length; ++i) {
    let item = data[i];
    let date = item[0];
    if (typeof dates[date] === 'undefined') {
      dates[date] = [];
    }
    dates[date].push(item);
  }

  // Ensure that dates are sorted
  const dateList = Object.keys(dates).sort();

  // For each date create an item for all, home, and away
  for (let i = 0; i < dateList.length; ++i) {
    let date = dateList[i];
    let rows = dates[date];
    let currentAll = { date };
    let currentHome = { date };
    let currentAway = { date };

    for (let j = 0; j < rows.length; ++j) {
      let row = rows[j];
      // Home
      currentAll[row[4]] = parseInt(row[5], 10);
      currentHome[row[4]] = parseInt(row[5], 10);
      // Away
      currentAll[row[2]] = parseInt(row[3], 10);
      currentAway[row[2]] = parseInt(row[3], 10);
      // Record teams
      teams[row[2]] = true;
      teams[row[4]] = true;
    }

    all.push(currentAll);
    home.push(currentHome);
    away.push(currentAway);
  }

  return {
    teamList: Object.keys(teams).sort(),
    dateList,
    rows: data,
    all,
    home,
    away
  };
}

export default function dataReducer(state = defaultState, action) {
  switch (action.type) {
    case IMPORT_DATA:
      return processImportedData(action.payload);

    default:
      return state;
  }
}
