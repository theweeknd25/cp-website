/*
  Agastya Digital website lead endpoint

  1. Create a Google Sheet and copy its ID from the URL.
  2. Open Extensions > Apps Script, replace its contents with this file.
  3. Set SPREADSHEET_ID and deploy as Web App:
     Execute as: Me | Who has access: Anyone
  4. Paste the resulting /exec URL into src/config/company.ts.
*/
const SPREADSHEET_ID = "REPLACE_WITH_YOUR_SHEET_ID";
const SHEET_NAME = "Leads";
const HEADERS = [
  "submittedAt", "company", "source", "name", "phone", "email",
  "budget", "propertyType", "location", "message",
];

function doPost(event) {
  const data = event.parameter || {};
  const sheet = getLeadSheet_();
  sheet.appendRow(HEADERS.map((header) => data[header] || ""));
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getLeadSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}
