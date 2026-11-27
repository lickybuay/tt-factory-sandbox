# Releasing

1. Make sure `main` is up to date and CI/tests pass: `npm test`.
2. Update `CHANGELOG.md` with the changes for the new version.
3. Bump `version` in `package.json` (semantic versioning).
4. Commit the changes (e.g. `Release vX.Y.Z`) and merge via pull request.
5. Tag the merge commit on `main`: `git tag -a vX.Y.Z -m "vX.Y.Z"`.
6. Push the tag: `git push origin vX.Y.Z`.
7. Publish a release from the tag on GitHub (Releases > Draft a new release), pasting the changelog entry as notes.
