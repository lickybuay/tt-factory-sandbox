# Releasing

This package is private and not published to npm; a release is a version bump, a changelog entry and a Git tag.

1. Make sure `main` is up to date and clean:
   ```sh
   git switch main && git pull origin main
   ```
2. Run the tests (Node 20 or newer):
   ```sh
   npm test
   ```
3. Move the entries from the unreleased section of `CHANGELOG.md` under a new version heading with today's date.
4. Bump the version in `package.json` following semver, without creating a tag yet:
   ```sh
   npm version <patch|minor|major> --no-git-tag-version
   ```
5. Commit the changes on a branch and open a pull request; merge it once reviewed.
6. From the updated `main`, create an annotated tag and push it:
   ```sh
   git tag -a vX.Y.Z -m "vX.Y.Z"
   git push origin vX.Y.Z
   ```
7. Publish: create a GitHub release from the tag, using the changelog entry as the notes.
