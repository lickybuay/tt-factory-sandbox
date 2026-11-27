# Releasing

This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and keeps a
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) style `CHANGELOG.md`.

## Steps

1. Make sure `main` is up to date and clean:
   `git switch main && git pull origin main && git status`
2. Run the tests: `npm test`. Do not release on a failing run.
3. Pick the new version (`MAJOR.MINOR.PATCH`) based on the changes under `[Unreleased]`.
4. Update `CHANGELOG.md`: rename `## [Unreleased]` to `## [X.Y.Z] - YYYY-MM-DD` and add a new,
   empty `## [Unreleased]` section above it.
5. Set `version` in `package.json` to `X.Y.Z`.
6. Commit the two files on a branch and merge it through a pull request:
   `Release vX.Y.Z`.
7. After the merge, tag the merge commit on `main` and push the tag:
   `git tag -a vX.Y.Z -m "vX.Y.Z" && git push origin vX.Y.Z`
8. Publish a release for the tag on GitHub (Releases > Draft a new release), using the
   `CHANGELOG.md` entry for `X.Y.Z` as the notes.

## Notes

- `package.json` is marked `"private": true`, so nothing is published to npm.
