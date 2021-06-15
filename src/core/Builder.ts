
type IBuilder<T> = {
  [k in keyof T ]: (arg: any) => IBuilder<T>
} & { build(): T }


export function proxyBuilder<T>(): IBuilder<T> {
  const built: any = {};
  const builder = new Proxy({}, {
    get(target, prop, receiver) {
      if (prop === 'build') return () => built;
      return (x: any): any => {
        (built[prop] = x);
        return builder;
      }
    }
  });
  return builder as any;
}


