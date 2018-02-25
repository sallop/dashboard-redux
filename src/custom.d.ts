declare module '*.svg' {
  const content: string;
  export default content;
}

// https://github.com/TypeStrong/ts-loader#loading-other-resources-and-code-splitting
// Code Splitting and Loading Other Resources
// declare var require: {
//   <T>(path: string): T;
//   (paths: string[], callback: (...modules: any[]) => void): void;
//   ensure: (
//     paths: string[],
//     callback: (require: <T>(path: string) => T) => void
//   ) => void;
// }
//(140,13): Subsequent variable declarations must have the same type.  Variable 'require' must be of type '{ <T>(path: string): T; (paths: string[], callback: (...modules: any[]) => void): void; ensure: (...', but here has type 'NodeRequire'
