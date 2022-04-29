// type T1 = {name: string};
// type T2 = {age: number};
type T1 = string;
type T2 = number;
type K2<T> = T extends {a: (x: infer U) => void, b: (x: infer U) => void} ? U : never;
interface Props {
  a: (x: T1) => void;
  b: (x: T2) => void;
}
type k3 = K2<Props>