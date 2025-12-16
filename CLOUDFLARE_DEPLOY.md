# Deploying to Cloudflare Pages

This guide explains how to deploy the LLMBasedOS Token site to Cloudflare Pages.

## Option 1: Via Cloudflare Dashboard (Recommended)

### Prerequisites
- Cloudflare account
- GitHub repository with your code

### Steps

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create Application** → **Pages**
   - Click **Connect to Git**
   - Select your repository

3. **Configure Build Settings**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Root directory: (leave empty)
   Node version: 20
   ```

   **Important**: The build command now automatically cleans cache files to avoid the 25MB limit.

4. **Environment Variables (Optional)**
   Add these if you want custom RPC endpoints:
   ```
   NEXT_PUBLIC_BASE_RPC_1=https://mainnet.base.org
   NEXT_PUBLIC_BASE_RPC_2=https://base.publicnode.com
   NEXT_PUBLIC_BASE_RPC_3=your-custom-rpc
   ```

5. **Deploy**
   - Click **Save and Deploy**
   - Wait for the build to complete (2-3 minutes)
   - Your site will be live at `https://<project-name>.pages.dev`

## Option 2: Via Wrangler CLI

### Prerequisites
```bash
npm install -g wrangler
wrangler login
```

### Deploy
```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy .next --project-name=llmbasedos-token
```

## Option 3: Static Export (Full Compatibility)

If you encounter issues with the standard deployment, you can use static export:

1. **Update next.config.ts**
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   npx wrangler pages deploy out --project-name=llmbasedos-token
   ```

   Note: With static export, the OpenGraph image generation won't work dynamically. You'll need to create a static OG image.

## Important Notes

### What Works on Cloudflare Pages
✅ Static pages
✅ Client-side data fetching (OnchainStatsCard)
✅ API Routes (if using Next.js runtime)
✅ Image optimization (with Cloudflare Images)
✅ SEO metadata
✅ Edge runtime functions

### Limitations
⚠️ Server-side rendering requires Edge runtime
⚠️ Some Node.js APIs may not be available
⚠️ OpenGraph image generation needs Edge runtime or static export

### Current Site Compatibility
Your current site should work perfectly on Cloudflare Pages because:
- Most pages are statically generated
- On-chain data fetching happens client-side
- No server-side dependencies (all reads use viem client-side)

## Custom Domain

After deployment:
1. Go to your Pages project settings
2. Click **Custom domains**
3. Add your domain (e.g., `llmbasedos.com`)
4. Follow DNS configuration instructions
5. SSL certificate is automatic

## Troubleshooting

### Build Fails
- Check Node.js version is set to 18+
- Verify all dependencies are installed
- Check build logs for specific errors

### Runtime Errors
- Ensure all environment variables are set
- Check that RPC endpoints are accessible from Cloudflare's network
- Verify no Node.js-specific APIs are used in client code

### Performance Issues
- Enable Cloudflare's caching in the dashboard
- Use Cloudflare Analytics to monitor performance
- Consider using Cloudflare's Edge Cache API for API responses

## Monitoring

Once deployed, monitor your site:
- **Analytics**: Cloudflare Dashboard → Your Project → Analytics
- **Logs**: Real-time function logs in the dashboard
- **Performance**: Web Vitals tracking built-in

## Deployment Preview

Cloudflare Pages automatically creates preview deployments for:
- Every pull request
- Every branch push

Preview URLs format: `https://<branch>.<project-name>.pages.dev`

## CI/CD

Cloudflare Pages automatically deploys on every push to your main branch. No additional CI/CD configuration needed!

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare Community](https://community.cloudflare.com/)

---

**Quick Start**: Push to GitHub, connect to Cloudflare Pages, deploy in 3 clicks! 🚀
