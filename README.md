# TradeWithBrady

A premium trading journal and market-dashboard website focused on swing trading, long-term investing, disciplined execution, risk management, and continuous improvement.

The application is built with React and Vite and includes a neon animated bull, glassmorphism cards, market-style widgets, animated charts, a trading-process section, journal entries, an asset-allocation visualization, and responsive layouts for desktop, tablet, and mobile.

## Live website

After GitHub Pages deployment is enabled, the production website is available at:

```text
https://tradewithbrady.github.io
```

## Technology stack

- React
- Vite
- Tailwind CSS
- Motion for React
- GSAP
- GitHub Actions
- GitHub Pages

## Prerequisites

Install the following before running the project locally:

1. **Git**
2. **Node.js 20 or later**
3. **npm**, which is included with Node.js

Verify the installations:

```bash
git --version
node --version
npm --version
```

The GitHub Actions deployment workflow currently uses Node.js 22, so Node.js 22 LTS is recommended for the closest match to production.

## Run the application locally

### 1. Clone the repository

```bash
git clone https://github.com/TradeWithBrady/TradeWithBrady.github.io.git
```

### 2. Open the project directory

```bash
cd TradeWithBrady.github.io
```

### 3. Install dependencies

```bash
npm install
```

This installs React, Vite, Tailwind CSS, Motion, GSAP, and the other packages listed in `package.json`.

### 4. Start the development server

```bash
npm run dev
```

Vite will display a local URL, typically:

```text
http://localhost:5173
```

Open that URL in a browser.

### 5. Stop the development server

In the terminal running Vite, press:

```text
Ctrl + C
```

## Create a production build locally

Run:

```bash
npm run build
```

Vite creates the optimized production files in the `dist` directory.

## Preview the production build

After building the project, run:

```bash
npm run preview
```

Vite will display a preview URL, commonly:

```text
http://localhost:4173
```

This command previews the production build locally before deployment.

## Available npm commands

| Command | Purpose |
|---|---|
| `npm run dev` | Starts the Vite development server with hot reload |
| `npm run build` | Creates an optimized production build in `dist` |
| `npm run preview` | Serves the production build locally for verification |

## Project structure

```text
TradeWithBrady.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The exact files inside `src/components` may evolve as new dashboard, journal, chart, and animation features are added.

## Make and test changes locally

1. Start the local development server:

   ```bash
   npm run dev
   ```

2. Edit files in `src`.
3. Save the changes.
4. Vite automatically refreshes the browser.
5. Before committing, verify the production build:

   ```bash
   npm run build
   ```

6. Optionally preview the production output:

   ```bash
   npm run preview
   ```

## Commit and push changes

Check the changed files:

```bash
git status
```

Stage the changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Describe the website update"
```

Push to the main branch:

```bash
git push origin main
```

A push to `main` automatically starts the GitHub Actions deployment workflow.

## GitHub Pages deployment

The repository includes this workflow:

```text
.github/workflows/deploy.yml
```

The workflow performs the following steps:

1. Checks out the repository.
2. Installs Node.js.
3. Installs npm dependencies.
4. Runs the Vite production build.
5. Uploads the `dist` directory as a GitHub Pages artifact.
6. Deploys the artifact to GitHub Pages.

### Enable GitHub Pages for the first time

1. Open the repository on GitHub.
2. Select **Settings**.
3. Select **Pages** from the left menu.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab.
6. Confirm that the **Deploy TradeWithBrady** workflow completes successfully.

Once deployment finishes, open:

```text
https://tradewithbrady.github.io
```

## Troubleshooting

### `npm: command not found`

Install Node.js from the official Node.js website, close the terminal, reopen it, and verify:

```bash
node --version
npm --version
```

### Dependency installation errors

Remove the local dependencies and reinstall them:

```bash
rm -rf node_modules
rm -f package-lock.json
npm install
```

On Windows PowerShell, use:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

### Port 5173 is already in use

Run Vite on a different port:

```bash
npm run dev -- --port 5174
```

### The website shows an older version

- Wait for the GitHub Actions deployment to finish.
- Check the repository's **Actions** tab for errors.
- Refresh the browser with a hard reload:
  - macOS: `Command + Shift + R`
  - Windows: `Ctrl + Shift + R`

### GitHub Pages shows a 404 page

Confirm that:

- The repository is public.
- GitHub Pages uses **GitHub Actions** as its source.
- The deployment workflow completed successfully.
- The repository name remains `TradeWithBrady.github.io`.

## Content disclaimer

The website is for educational and informational purposes only. It does not provide financial, investment, tax, or legal advice. Trading and investing involve risk, including the possible loss of principal.

## Repository

```text
https://github.com/TradeWithBrady/TradeWithBrady.github.io
```
