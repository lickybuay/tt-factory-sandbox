# Releasing

This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and keeps a
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) `CHANGELOG.md`. The package is
`private`, so a release means a git tag and a GitHub release, not an npm publish.

## Steps

1. Make sure the default branch is up to date and clean, and that `npm test` passes.
2. Pick the new version (`X.Y.Z`): patch for fixes, minor for new features, major for breaking changes.
3. In `CHANGELOG.md`, rename `## [Unreleased]` to `## [X.Y.Z] - YYYY-MM-DD` and add a fresh,
   empty `## [Unreleased]` section above it.
4. Set `"version"` in `package.json` to `X.Y.Z`.
5. Commit the changes on a branch (for example `release/X.Y.Z`), open a pull request, and merge it.
6. Tag the merge commit on the default branch and push the tag:

   ```sh
   git switch main && git pull
   git tag -a vX.Y.Z -m "Release X.Y.Z"
   git push origin vX.Y.Z
   ```

7. Publish the release on GitHub from the tag (Releases > Draft a new release), pasting the
   `CHANGELOG.md` entry for `X.Y.Z` as the notes.
