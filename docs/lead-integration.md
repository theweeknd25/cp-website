# Google Sheets lead integration

The reusable form posts `application/x-www-form-urlencoded` data to the `googleAppsScriptUrl` in `src/config/company.ts`.

1. Create a Google Sheet.
2. In **Extensions → Apps Script**, paste `google-apps-script.gs` and replace `SPREADSHEET_ID`.
3. Deploy it as a **Web app** that executes as you and is available to anyone.
4. Copy the deployed URL ending in `/exec` to `googleAppsScriptUrl`.

The sheet receives: submittedAt, company, source, name, phone, email, budget, propertyType, location, and message.

`no-cors` is intentional: Apps Script redirects its response and typically does not expose CORS headers. It allows submission from GitHub Pages without a backend.
