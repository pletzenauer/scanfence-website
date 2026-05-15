# Deploy

scanfence.com is a static Astro site built from a headless WordPress backend
and deployed to flokinet shared hosting via FTPS.

```
WP (cms.scanfence.com) ──REST──▶ GitHub Actions ──FTPS──▶ flokinet
                                  npm run build           /home/ywxmbssz/scanfence-frontend/
                                                          └── served at scanfence.com
```

## Architecture

- **WP backend** — `cms.scanfence.com/wp-admin`, REST at `cms.scanfence.com/wp-json/wp/v2`. Files at `/home/ywxmbssz/scanfence.com/`. `wp-config.php` defines `WP_SITEURL=https://cms.scanfence.com` and `WP_HOME=https://scanfence.com` so admin lives on the CMS subdomain while content URLs and canonicals stay on the public domain.
- **Astro frontend** — built by GitHub Actions, deployed via FTPS to `/home/ywxmbssz/scanfence-frontend/` (the cPanel docroot for `scanfence.com`).
- **Legacy URL redirects** — `public/.htaccess` ships with the build and 301-redirects old WP date URLs (`/yyyy/mm/dd/<slug>/`) to the new Astro paths (`/blog/<slug>/`).

## Required GitHub secrets

Set under repo Settings → Secrets and variables → Actions:

| Secret | Value |
|---|---|
| `WP_API_URL` | `https://cms.scanfence.com/wp-json/wp/v2` |
| `FTP_HOST` | `nl1.flokinet.is` |
| `FTP_USER` | `gh_deploy@alphawebsol.com` |
| `FTP_PASSWORD` | (the password emitted at FTP account creation; rotate via cPanel → FTP Accounts → Change Password) |

## Triggers

- **Push to `main`** — auto-builds and deploys.
- **`workflow_dispatch`** — manual trigger from the Actions tab, or via `gh workflow run "Build & deploy scanfence.com"`.
- **WP `save_post` webhook** — drop the snippet below in `wp-content/mu-plugins/rebuild-trigger.php` on `cms.scanfence.com`. Requires a fine-scoped GitHub PAT with `actions:write` on this repo, stored as a WP option (e.g., via `wp option add gh_token "<pat>"`).

```php
<?php
add_action('transition_post_status', function ($new, $old, $post) {
    if ($new !== 'publish' && $old !== 'publish') return;
    if (wp_is_post_revision($post->ID)) return;
    $token = get_option('gh_token');
    if (!$token) return;
    wp_remote_post(
        'https://api.github.com/repos/pletzenauer/scanfence-website/actions/workflows/deploy.yml/dispatches',
        [
            'headers' => [
                'Authorization' => "Bearer $token",
                'Accept'        => 'application/vnd.github+json',
                'User-Agent'    => 'scanfence-wp-webhook',
            ],
            'body'    => wp_json_encode(['ref' => 'main']),
            'timeout' => 5,
            'blocking'=> false,
        ]
    );
}, 10, 3);
```

## Local build

```sh
WP_API_URL=https://cms.scanfence.com/wp-json/wp/v2 npm ci && npm run build
```

Output lands in `dist/` (~85 pages, ~1.2 MB).

## Manual emergency deploy

If GitHub Actions is down and you need to push a fix:

```sh
WP_API_URL=https://cms.scanfence.com/wp-json/wp/v2 npm run build
cd dist
curl -k --ssl-reqd --ftp-pasv \
  --user 'gh_deploy@alphawebsol.com:<password>' \
  -T <file> ftp://nl1.flokinet.is/<remote-path>
```

…or `lftp -e "mirror -R --delete ./ /" -u gh_deploy@alphawebsol.com,<password> ftps://nl1.flokinet.is`.

## Rollback

1. cPanel → Domains → scanfence.com → Manage → docroot back to `scanfence.com`.
2. Remove the two `define()` lines from `/home/ywxmbssz/scanfence.com/wp-config.php`.
3. phpMyAdmin: restore `permalink_structure` to `/%year%/%monthnum%/%day%/%postname%/` and delete `rewrite_rules`.
4. Worst case: Softaculous → Restore the `pre-headless-cutover-2026-05-14` snapshot.
