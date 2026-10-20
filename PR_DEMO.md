# Pull request demo

This document demonstrates the relationship between the two public repositories:

- Main repository: [Janff/test](https://github.com/Janff/test)
- Fork repository: [loffinhyde/test](https://github.com/loffinhyde/test)

## Current comparison

The main repository is the canonical source and its default branch is `master`.
The fork currently points to an earlier `testpr` snapshot and has no commits
that are unique to the fork.

Compare the repositories:

- [Compare Janff/test:master with loffinhyde/test:master](https://github.com/Janff/test/compare/master...loffinhyde:master)
- [Fork branches](https://github.com/loffinhyde/test/branches)

GitHub requires an inbound pull request to contain at least one commit that is
not already on the base branch. The fork is a public, read-only repository for
the current account, so this demo does not attempt to publish a new fork branch.

## Inbound pull request flow

1. In `loffinhyde/test`, create a focused branch from `master`.
2. Commit the change and push that branch.
3. Open `https://github.com/Janff/test/compare/master...loffinhyde:new-branch`.
4. On the comparison page, choose the fork branch as **head** and `master` as
   **base**.
5. Confirm **base repository:** `Janff/test`, **head repository:**
   `loffinhyde/test`, then select **Create pull request**.
6. Review the diff, request changes if needed, and merge only after approval.

If the comparison reports `No commits between`, the selected fork branch does
not contain a new commit. The comparison page is still useful for learning how
GitHub identifies the repositories and their common history.

## Outbound and same-repository pull requests

A branch in `Janff/test` can target `master` in the same repository. For a fork,
the base is normally the upstream repository and the head is the fork branch.
The canonical repository remains `Janff/test` in both cases.

## Demo checklist

- [ ] The comparison page identifies both repositories.
- [ ] The same-commit case is understood as **No commits between**.
- [ ] A future fork branch adds at least one commit before a PR is opened.
- [ ] The PR description names the intended base and head branches.
- [ ] The demo PR is reviewed before it is merged.