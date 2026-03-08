# XingRin OSS Readiness Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the XingRin repository clearly permissive, internally consistent, and better presented for open-source program applications.

**Architecture:** This change is documentation- and metadata-driven. It standardizes licensing, removes contradictory repository messaging, adds baseline community files, and improves public positioning without changing runtime behavior.

**Tech Stack:** Markdown, GitHub repository metadata, standard MIT license text

---

### Task 1: Add repository planning artifacts

**Files:**
- Create: `docs/plans/2026-03-08-oss-readiness-design.md`
- Create: `docs/plans/2026-03-08-oss-readiness.md`

**Step 1:** Create the approved design document.
**Step 2:** Create the implementation plan.
**Step 3:** Verify both files render as plain markdown.

### Task 2: Replace the repository license

**Files:**
- Modify: `LICENSE`
- Check: `frontend/package.json`

**Step 1:** Replace GPL-3.0 text with MIT.
**Step 2:** Confirm any manifest-level license field is consistent.
**Step 3:** Search for stale GPL references.

### Task 3: Clean README licensing and positioning

**Files:**
- Modify: `README.md`

**Step 1:** Replace the stale license badge.
**Step 2:** Update the project positioning to emphasize open-source, authorized, defensive use.
**Step 3:** Refresh the maintenance/rewrite wording so it reads like active open-source stewardship.
**Step 4:** Keep feature content intact while removing contradictory or high-risk phrasing where possible.

### Task 4: Add baseline community and security docs

**Files:**
- Create: `SECURITY.md`
- Create: `CONTRIBUTING.md`
- Create: `CODE_OF_CONDUCT.md`

**Step 1:** Add vulnerability reporting instructions.
**Step 2:** Add contribution workflow and licensing expectations.
**Step 3:** Add a standard code of conduct.

### Task 5: Validate repository consistency

**Files:**
- Check: `README.md`
- Check: `LICENSE`
- Check: `SECURITY.md`
- Check: `CONTRIBUTING.md`
- Check: `CODE_OF_CONDUCT.md`

**Step 1:** Search for `PolyForm`, `Noncommercial`, and stale GPL references.
**Step 2:** Confirm new docs are linked or discoverable.
**Step 3:** Review final public-facing text for clarity.

### Task 6: Update GitHub metadata if beneficial

**Files:**
- External: GitHub repository settings via `gh api`

**Step 1:** Update repository description if the current description is too tool-centric or ambiguous.
**Step 2:** Keep topics aligned with authorized security and asset management.
**Step 3:** Verify metadata reflects the README positioning.
