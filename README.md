
# Project Name

This project is built with React, Vite, and Express.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages when you push to the main branch.

1. Make sure your GitHub repository settings have GitHub Pages enabled and set to deploy from the `gh-pages` branch.
2. Push your changes to the `main` branch.
3. The GitHub Action will build the project and deploy it to the `gh-pages` branch.
4. Your site will be available at `https://yourusername.github.io/repository-name/`

### Custom Domain

If you want to use a custom domain:
1. Update the `CNAME` file in the `client/public` directory with your domain.
2. Configure your domain's DNS settings to point to GitHub Pages.
