/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const [owner = "", repoName = ""] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isUserPage = repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const basePath = isGitHubActions && !isUserPage ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
