# Releasing

How to tag and publish a release of tt-factory-sandbox. Versions follow
[Semantic Versioning](https://semver.org/spec/v2.0.0.html) and the changelog follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

The package is `"private": true` in `package.json`, so it is not published to npm; a release is a
git tag plus a GitHub Release.

## Steps

1. **Start from an up-to-date `main` with passing tests.**

   ```sh
   git switch main
   git pull origin main
   npm test
   ```

2. **Pick the version.** From the entries under `## [Unreleased]` in `CHANGELOG.md`: a breaking
   change bumps the major, an addition bumps the minor, fixes only bump the patch.

3. **Update the changelog.** Rename `## [Unreleased]` to `## [X.Y.Z] - YYYY-MM-DD` (today's date)
   and add a new, empty `## [Unreleased]` section above it.

4. **Bump the version in `package.json`** without letting npm commit or tag:

   ```sh
   npm version X.Y.Z --no-git-tag-version
   ```

5. **Open a pull request** with the changelog and `package.json` changes, titled
   `Release vX.Y.Z`, and merge it into `main` once checks pass.

6. **Tag the merge commit** with an annotated tag and push the tag:

   ```sh
   git switch main
   git pull origin main
   git tag -a vX.Y.Z -m "vX.Y.Z"
   git push origin vX.Y.Z
   ```

7. **Publish the GitHub Release** from the tag, using the version's changelog section as the notes:

   ```sh
   gh release create vX.Y.Z --title "vX.Y.Z" --notes "<changelog section for X.Y.Z>"
   ```

   Or use **Releases → Draft a new release** on GitHub and pick the `vX.Y.Z` tag.

## If something goes wrong

- Tag pushed but the release is wrong: fix it on `main` and release the next patch version. Do not
  move or re-push an existing tag.
