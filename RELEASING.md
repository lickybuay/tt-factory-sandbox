# Releasing

Releases follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and are recorded in
[CHANGELOG.md](CHANGELOG.md). The package is marked `"private": true`, so a release is a git tag
plus a GitHub release; nothing is published to npm.

## Steps

1. **Start from an up-to-date `main` with passing tests.**

   ```sh
   git switch main
   git pull origin main
   npm test
   ```

2. **Pick the version.** Read the `[Unreleased]` section of `CHANGELOG.md`: breaking changes
   bump the major version, additions bump the minor version, fixes alone bump the patch version.

3. **Update the version and the changelog** on a branch, and merge it through a pull request.

   - Set `"version"` in `package.json` to the new version. `npm version <x.y.z> --no-git-tag-version`
     does this without creating a commit or a tag.
   - In `CHANGELOG.md`, rename `## [Unreleased]` to `## [x.y.z] - YYYY-MM-DD` (today's date) and
     add a fresh, empty `## [Unreleased]` section above it.

4. **Tag the merge commit on `main`** with an annotated tag named `v` plus the version.

   ```sh
   git switch main
   git pull origin main
   git tag -a vX.Y.Z -m "vX.Y.Z"
   git push origin vX.Y.Z
   ```

5. **Publish the GitHub release** from the tag, using that version's changelog section as the notes.
   With the [GitHub CLI](https://cli.github.com/):

   ```sh
   gh release create vX.Y.Z --title "vX.Y.Z" --notes "<the vX.Y.Z section of CHANGELOG.md>"
   ```

   Or on GitHub: **Releases → Draft a new release**, choose the tag, paste the notes, and publish.

## If something goes wrong

If a tag points at the wrong commit and the release is not yet published, delete it
(`git tag -d vX.Y.Z` and `git push origin :refs/tags/vX.Y.Z`) and tag again. Once a release is
published, do not move its tag: fix forward with a new patch version.
