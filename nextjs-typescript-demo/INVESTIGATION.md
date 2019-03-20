# 👮 Unresolved Non-Relative Module Import

<!-- Describe your error/issue here -->
`web-deprecated` from luna repository can't compile because of unresolved non-relative module import. Actually, typescript compiler can find the ambient module (non-relative module) successfully, but the build process still failed.

## ⏲ Chronology

1. Let's recreate the project again using raw nextjs setup. I use `lts/dubnium` for the node version. I will add `next-typescript`, `next-css`, `semantic-ui`, `babel-plugin-module-resolver`, `next-compose-plugins`, `next-redux-wrapper`, and `redux-*`.
2. I create simple CARS (Constant, Action, Reducer, and Selector) items with Layout component. Currently without semantic ui style, just plain style.
3. I add layout container and component with its connectedProps. I also provide button to trigger dispatch action.
4. **Boom**. Error appears.

```bash
Failed to compile.

./src/Reducers/Layout/index.ts
Module not found: Can't resolve '@RootType' in '/home/jeffryangtoni/Sources/GitHub/reproduce/nextjs-typescript-demo/src/Reduc
ers/Layout'
```

After applying solution no. 1 and 2.

```bash
Failed to compile.

./src/Reducers/Layout/index.ts
Module not found: Can't resolve '../../@types/@RootType' in '/home/jeffryangtoni/Sources/GitHub/reproduce/nextjs-typescript-d
emo/src/Reducers/Layout'
```

## 🕵 Suspect/Root Cause

<!-- Describe the suspect/root cause -->

- ~~Probably webpack issue or babel issue, since typescript recognizes the ambient module.~~
- ~~Probably `babel-plugin-module-resolver` issue.~~
- `d.ts` file is only for helping compiler's type definition (not for consumption).

## 🏁 Possible Solution

<!-- Describe possible solution for this issue -->

1. ~~Add typescript extension into `babel-plugin-module-resolver` path mapping.~~
2. ~~Add `@RootType` into `babel-plugin-module-resolver` path mapping.~~
3. ~~Add `*` path mapping to `tsconfig.json`.~~
4. Move `@RootType` outside `@types` folder and register `@RootType` inside `.babelrc` and `tsconfig.json`.

## ℹ️ Investigation Status

Current investigation status is **DONE/~~IN PROGRESS/CANCELLED/ON DRAFT~~**.

## 👩 Author

This investigation is led by **Jeffry Angtoni**.
