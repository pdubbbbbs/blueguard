# Cloudflare Pages Deployment Guide

This document explains how to deploy the BlueGuard website to Cloudflare Pages at www.bluetoothdefense.com.

## Automatic Deployment Setup

The project is configured for automatic deployment to Cloudflare Pages using GitHub Actions. Every push to the `main` branch will trigger a new deployment.

## Prerequisites

1. **Cloudflare Account** with Pages enabled
2. **GitHub Repository** for this project
3. **Cloudflare API Token** with appropriate permissions
4. **Cloudflare Account ID**

## Step 1: Get Your Cloudflare Account ID

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to any zone (domain) or the Workers & Pages section
3. On the right sidebar, find the **API** section
4. Copy your **Account ID**

## Step 2: Generate Cloudflare API Token

1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Under **Custom Token**, click **Get started**
4. Configure the token:
   - **Token name**: `BlueGuard Pages Deploy`
   - **Permissions**:
     - Account → Cloudflare Pages → Edit
   - **Account Resources**: Include → Your account
5. Click **Continue to summary** → **Create Token**
6. **Copy the token immediately** (you won't be able to see it again)

## Step 3: Create Cloudflare Pages Project

1. In the Cloudflare Dashboard, go to **Workers & Pages**
2. Click **Create application** → **Pages** tab
3. Click **Connect to Git** or **Direct Upload**
4. If using Git:
   - Connect your GitHub account
   - Select the `bluetoothdefense` repository
   - Configure build settings:
     - **Build command**: `pnpm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `/`
5. If using Direct Upload (for manual deployments):
   - Create a project named `bluetoothdefense`
   - You can upload builds manually or use the GitHub Action

## Step 4: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add two secrets:

   **Secret 1:**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: Your Cloudflare Account ID from Step 1

   **Secret 2:**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: Your API Token from Step 2

## Step 5: Configure Custom Domain

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter `www.bluetoothdefense.com`
4. Cloudflare will provide DNS records to add
5. In your domain's DNS settings (if hosted on Cloudflare):
   - Add a CNAME record: `www` → `bluetoothdefense.pages.dev`
6. If the apex domain (bluetoothdefense.com) should redirect to www:
   - Add a CNAME record: `@` → `bluetoothdefense.pages.dev`
   - Or set up a redirect rule in Cloudflare

## Step 6: Push to Deploy

Once everything is configured:

1. Commit your changes to the repository
2. Push to the `main` branch:
   ```bash
   git add .
   git commit -m "Deploy BlueGuard website"
   git push origin main
   ```
3. GitHub Actions will automatically:
   - Build the project
   - Deploy to Cloudflare Pages
   - The site will be live at your custom domain

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

3. Build and deploy:
   ```bash
   pnpm run build
   npx wrangler pages deploy dist --project-name=bluetoothdefense
   ```

## Environment Variables

The following environment variables are already configured in your Manus project:
- `CLOUDFLARE_API_KEY`: Your Cloudflare API key
- `GAMMA_API_KEY`: Your Gamma presentation API key

For production deployment, you may need to add these to your Cloudflare Pages project settings if your application uses them at runtime.

## Build Configuration

The project uses:
- **Framework**: React + TypeScript
- **Build tool**: Vite
- **Package manager**: pnpm
- **Build command**: `pnpm run build`
- **Output directory**: `dist`

## Troubleshooting

### Build Fails
- Check that all dependencies are installed
- Verify Node.js version is 18 or higher
- Review build logs in GitHub Actions or Cloudflare dashboard

### Deployment Fails
- Verify API token has correct permissions
- Check that Account ID is correct
- Ensure project name matches in workflow file

### Custom Domain Not Working
- Verify DNS records are correctly configured
- Allow up to 24 hours for DNS propagation
- Check SSL/TLS settings in Cloudflare (should be "Full" or "Full (strict)")

## Support

For issues with:
- **Cloudflare Pages**: [Cloudflare Community](https://community.cloudflare.com/)
- **GitHub Actions**: [GitHub Docs](https://docs.github.com/en/actions)
- **This project**: Contact the development team

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
