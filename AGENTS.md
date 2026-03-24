# Repository Guidelines

## Project Structure & Module Organization

This repository is a minimal static site for GitHub Pages.

- `index.html`: the full landing page, including HTML, inline CSS, and inline JavaScript.
- `CNAME`: custom domain configuration for GitHub Pages deployment.
- `README.md`: minimal repository description.

There are currently no separate asset, test, or build directories. If you add assets later, prefer `assets/` with clear subfolders such as `assets/images/` and `assets/icons/`.

## Build, Test, and Development Commands

No build step is required. The page can be developed and verified locally with a simple static server.

- `python3 -m http.server 8000`
  Starts a local server from the repository root.
- `open http://localhost:8000`
  Opens the site in a browser on macOS.
- `git diff -- index.html`
  Reviews changes before commit.

Because the site is self-contained, validate behavior directly in the browser after edits, especially layout, animation, and mobile responsiveness.

## Coding Style & Naming Conventions

Use 4-space indentation in `index.html` to match the existing file. Keep the page self-contained unless a clear split into `css/` or `js/` improves maintainability.

- Use descriptive lowercase CSS class names such as `menu-shell` or `hero-title`.
- Keep JavaScript functions small and focused, for example `bindMenu()` or `handleResize()`.
- Preserve the current visual language: dark background, restrained cyan accents, and minimal typography.

No formatter or linter is configured, so keep edits tidy and consistent by hand.

## Design & Content Constraints

These rules are default repository conventions and should be treated as mandatory unless the task explicitly says otherwise.

- All pages and changes must support both desktop and mobile layouts.
- Do not change existing site copy unless the instruction clearly asks for copywriting, translation, or text edits.
- Do not add filler copy or decorative pseudo-information without real purpose. Avoid meaningless labels, fake metrics, or placeholder modules unless they are explicitly requested and clearly marked as temporary.
- Keep the overall design direction aligned with this brand: technological, minimal, visually striking, and thought-provoking.
- Interactive entrances must remain minimal and spacious. Avoid cluttered entry cards, excessive helper text, or overdesigned controls that weaken a simple, confident landing composition.
- Interfaces should be as self-evident as possible. Avoid explanatory UI copy unless it is necessary for comprehension, and prefer direct visual cues over labels that explain the obvious.
- Keep layout and typography deliberate: spacing, alignment, and line length should feel balanced, and text must not wrap in ways that break phrasing or reading rhythm.

When proposing UI changes, prefer strong contrast, clean spacing, and focused motion over decorative complexity.

## Testing Guidelines

There is no automated test suite yet. Manual verification is required.

- Check desktop and mobile layouts in the browser.
- Confirm animations render without console errors.
- Re-test time display, menu interactions, and resize behavior after UI changes.
- Verify that unchanged copy remains intact unless text edits were explicitly requested.

If you introduce automated tests, document the command here and keep the setup lightweight.

## Commit & Pull Request Guidelines

Recent commits use short, direct messages such as `fix bj time` and `change fav`. Prefer concise, imperative commit messages like `add menu entry` or `refine hero animation`.

Pull requests should include:

- a short summary of the change
- before/after screenshots for visual updates
- notes about manual testing performed
- linked issue or context when applicable

## Deployment Notes

This repository is intended for GitHub Pages. Do not remove or overwrite `CNAME` unless the domain configuration is intentionally changing.
