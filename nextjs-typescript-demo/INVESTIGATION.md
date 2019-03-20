# 👮 Unresolved Non-Relative Module Import

<!-- Describe your error/issue here -->
`web-deprecated` from luna repository can't compile because of unresolved non-relative module import. Actually, typescript compiler can find the ambient module (non-relative module) successfully, but the build process still failed.

## ⏲ Chronology

1. Let's recreate the project again using raw nextjs setup. I use `lts/dubnium` for the node version. I will add `next-typescript`, `next-css`, `semantic-ui`, `babel-plugin-module-resolver`, `next-compose-plugins`.

## 🕵 Suspect/Root Cause

<!-- Describe the suspect/root cause -->

- Probably webpack issue or babel issue, since typescript recognizes the ambient module.

## 🏁 Possible Solution

<!-- Describe possible solution for this issue -->

## ℹ️ Investigation Status

Current investigation status is **~~DONE~~/IN PROGRESS/~~CANCELLED/ON DRAFT~~**.

## 👩 Author

This investigation is led by **Jeffry Angtoni**.
