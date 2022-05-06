export interface LoadFunction<T, R = unknown> {
  execute: (params?: R) => Promise<T>;
}
