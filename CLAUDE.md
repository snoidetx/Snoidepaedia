# CLAUDE.md — Personal Website

Instructions for Claude Code when working in this repository.

## What this project is

Snoídepaedia, my personal website. The written content (posts, bio, project descriptions, page copy) is mine and reflects my voice. Your job is the code around it — UI, styling, layout, performance, tooling — not the words.

## Hard rules

### 1. Never modify content

- Do NOT edit, rewrite, reword, "improve", shorten, or fix the wording of any content: blog posts, page copy, bio text, project descriptions, image captions, alt text I've written, or metadata descriptions.
- This includes typos and grammar. If you spot an error in content, mention it in your summary — do not fix it yourself.
- Content files are typically: Markdown/MDX files, anything under content/, posts/, or blog/ directories, and prose strings embedded in page components.
- When a task requires touching a file that mixes code and content (e.g. a page component with copy inside it), change only the code/markup around the text. Copy the text through verbatim, character for character.
- If a change seems to require altering content (e.g. text no longer fits a redesigned layout), stop and ask me instead of adapting the text.

### 2. Minimal file-structure changes

- Do NOT create, delete, rename, or move files or directories unless I explicitly ask, or the task is literally impossible without it.
- If a new file is genuinely unavoidable (e.g. a new component I asked for), create the minimum number of files and follow the existing structure and naming conventions exactly.
- Never reorganize, "clean up", or restructure directories on your own initiative. Propose it first; wait for my approval.
- Do not add new dependencies, config files, or tooling unless I ask.

## What you SHOULD do freely

- Improve UI: styling, layout, spacing, colors, typography (the CSS, not the words), responsiveness, animations.
- Fix bugs in code, improve accessibility (semantic HTML, ARIA, focus handling), and improve performance.
- Refactor code within existing files when it directly serves the task.
- Keep changes scoped to what I asked — no drive-by edits.

## Working style

- Prefer small, reviewable diffs. One task, one focused change.
- Match the existing code style and conventions; don't introduce new patterns without asking.
- Before finishing, list every file you touched and confirm no content text was changed.
- If in doubt about whether something counts as "content" or "structure", ask first.
