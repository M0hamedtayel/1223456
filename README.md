
# Mohamed Tayel Portfolio

This project is a personal portfolio website built with React, Vite, and Express.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Setup GitHub Repository

1. Create a new repository on GitHub
2. Initialize Git in this project if not already done:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/yourusername/repository-name.git
   git branch -M main
   git push -u origin main
   ```

### Enable GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The GitHub Action will build the project and deploy it automatically
5. Your site will be available at `https://yourusername.github.io/repository-name/`

### Custom Domain

If you want to use a custom domain:
1. The `CNAME` file in the `client/public` directory is already set up with your domain.
2. Configure your domain's DNS settings to point to GitHub Pages:
   - Add an A record pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - OR add a CNAME record pointing to `yourusername.github.io`
