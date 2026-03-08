# XingRin OSS Readiness Design

**Background**

XingRin is an actively maintained open-source attack surface management and authorized security automation project. The repository currently has a standards issue: the root `LICENSE` file is GPL-3.0, while the public README still advertises `PolyForm NC`. This mismatch creates ambiguity for contributors, users, and external programs that evaluate open-source eligibility.

**Goal**

Make the repository clearly and consistently open source, reduce adoption friction, and improve its presentation for open-source program applications such as Codex for OSS.

**Non-Goals**

- No product feature changes
- No backend or frontend behavior changes
- No infrastructure refactors
- No legal customizations beyond selecting a standard OSI-style license

## Approach Options

### Option 1: Keep GPL-3.0 and clean inconsistencies

Pros:
- Lowest legal change risk
- No relicensing concern if additional contributors exist
- Still qualifies as a standard open-source license

Cons:
- Higher downstream adoption friction
- Less aligned with the stated goal of lowering usage barriers

### Option 2: Relicense to MIT and clean inconsistencies **(Recommended)**

Pros:
- Lowest friction for users, contributors, and evaluators
- Simple, familiar, and unambiguous
- Best fit for “make OSS status obvious and permissive” goal

Cons:
- Removes copyleft protection
- Requires confidence that relicensing authority is clear

### Option 3: Relicense to Apache-2.0 and clean inconsistencies

Pros:
- Permissive like MIT
- Includes explicit patent grant language
- Friendly for organizations evaluating adoption

Cons:
- Slightly more complex than MIT
- Provides little extra benefit for this repository’s immediate application goal

## Chosen Design

Adopt `MIT` as the single repository license and perform a full consistency cleanup.

## Scope of Changes

1. Replace the root `LICENSE` with MIT.
2. Update README license badge and legal wording.
3. Add clear “authorized/defensive use only” wording without adding non-open-source usage restrictions.
4. Add `SECURITY.md` with reporting guidance.
5. Add `CONTRIBUTING.md` with contribution process and relicensing note.
6. Add `CODE_OF_CONDUCT.md` using a standard community format.
7. Tighten README positioning for open-source maintenance and legitimate security workflows.
8. Update repository metadata files that expose license information.

## Risks and Mitigations

- **Risk: accidental contradiction between permissive license and usage policy**  
  Mitigation: keep “authorized use only” as project policy and ethics guidance, not as extra legal restrictions beyond MIT.

- **Risk: relicensing history ambiguity**  
  Mitigation: note contribution licensing expectations in `CONTRIBUTING.md`; rely on maintainer confirmation that substantive contributions are solely owned.

- **Risk: repository still looks ambiguous to reviewers**  
  Mitigation: align badge, license file, README language, and community docs in one pass.

## Validation

- Search repository for legacy license strings such as `PolyForm`, `Noncommercial`, and stale GPL wording references.
- Confirm all newly added markdown files are present and coherent.
- Optionally update GitHub repository metadata (description/topics/homepage) to better match the cleaned positioning.
