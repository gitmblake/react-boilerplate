// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/6a70dd082e6dd97218d76cffb56bf7540dc51368/object-assign/object-assign.d.ts
declare module "object-assign" {
  function objectAssign<T, U>(target: T, source: U): T & U;
  function objectAssign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
  function objectAssign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
  function objectAssign<T, U, V, W, Q>(target: T, source1: U, source2: V, source3: W, source4: Q): T & U & V & W & Q;
  function objectAssign<T, U, V, W, Q, R>(target: T, source1: U, source2: V, source3: W, source4: Q, source5: R): T & U & V & W & Q & R;
  function objectAssign(target: any, ...sources: any[]): any;
  namespace objectAssign { }
  export = objectAssign;
}
