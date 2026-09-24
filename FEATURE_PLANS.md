# Feature plans — YOU implement these (do not paste AI code into the repo)

Pick 1–2. Each is sized so a human can write it in one sitting and explain every line.

---

## Feature A: Keyboard shortcuts (recommended)

**Why:** Adds real interactivity; ~80–120 lines of JS + small CSS; easy to own.

**Behavior you decide:**
- `/` focuses the search input (when not already typing in a field)
- `Escape` closes Super Menu / map
- `1`–`9` open dock shortcut at that index (optional)
- `t` opens themes (optional)

**Where to put it:**
- Logic: inside existing `document.addEventListener("keydown", ...)` in `app.js` (~line 881)
- Optional help hint: a line in Super Menu → Tools or a title attribute on the search bar

**Implementation checklist (write the code yourself):**
1. Read the existing keydown handler — don't duplicate it.
2. Ignore events when `e.target` is `input` / `textarea` / `contentEditable` (except Escape).
3. Map keys → actions using existing functions (`openMenu`, `closeMenus`, `focus()` on `searchInput`).
4. `e.preventDefault()` only when you handle the key.
5. Test: `/` focuses search; Escape closes menu; typing in todos doesn't trigger shortcuts.

**Stretch (only if you want more ownership):**
- Show a small “Shortcuts: / search · Esc close” note in the Super Menu footer.

---

## Feature B: Bookmarks with folders (bigger, more ownership)

**Why:** Clearly human-scale CRUD; shows in Super Menu; replaces or sits next to shortcut manage list.

**Behavior:**
- Super Menu → new tab “Bookmarks”
- Folders: default “Reading” and “Work” (or user-created)
- Each bookmark: name, URL, folder
- Add / rename folder / delete bookmark
- Persist in `state` under a new key, e.g. `bookmarks: [{ id, name, url, folder }]`

**Where:**
- `index.html`: new `section.menu-section[data-section="bookmarks"]` + tab button
- `app.js`: `renderBookmarks()`, handlers in `bind()`, extend `defaultState` + `loadState`
- `styles.css`: reuse `.manage-list` / `.chip-btn` patterns

**Implementation checklist:**
1. Add `bookmarks` to `defaultState` and merge in `loadState` if missing.
2. Render folders as groups; bookmarks as rows with open + delete.
3. Add-bookmark form: name, URL, folder select.
4. Call `saveState()` after every mutation.
5. Wire tab in `switchTab` / menu tabs like existing sections.
6. Test add → reload → still there; delete → gone after reload.

---

## Feature C: Rewrite one existing module in your own style

**Good candidates (self-contained, medium size):**
- `renderTodos()` + todo form handlers (~40 lines)
- `renderFocus` / `startFocus` / `stopFocus` (pomodoro, ~40 lines)
- `tick()` clock + greeting (time-of-day logic)
- Theme dots `renderThemeDots()`

**How:**
1. Read the function until you can explain it without the file open.
2. Delete it and re-write from your understanding (not side-by-side copy).
3. Keep the same DOM ids so HTML doesn't break.
4. Manually test the feature end-to-end.

---

## Suggested plan to satisfy “majority human code”

| Action | Effect |
|--------|--------|
| Implement Feature A fully yourself | +~100 lines clearly yours |
| Implement Feature B fully yourself | +~150–200 lines clearly yours |
| Rewrite todos + focus + tick yourself | Replaces ~120 AI-assisted lines |
| Write README + AI disclosure yourself | Fixes README rejection |

Exact % depends on how judges measure — aim to **add and rewrite more than you leave untouched**, and be ready to talk through any file.

---

## What NOT to do

- Do not ask an AI to “rewrite everything so it looks human.”
- Do not paste generated code and claim you wrote it.
- Do not omit AI usage from the README.
