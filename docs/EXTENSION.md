# Extension
To make sure typings are correct we use an extension strategy.
For this reason if you need your custom spies you need to use our framework to specify and identify them

### Custom Method
(this example is taken from jasmine-ts-auto-mock)

To extend a method you need to: 
1) set your spy function (jasmine.createSpy(name))

Please note that the value returned from provideMethodWithDeferredValue will be a function.
You will need to make sure that the method you are providing will not execute the function directly because it will cause Maximum call stack size.

In the example below it's using callFake that will prevent to execute the function directly.


```ts
import { Provider } from "ts-auto-mock/extension";

Provider.instance.provideMethodWithDeferredValue((name: string, value: () => any)) => {
    return jasmine.createSpy(name).and.callFake(value);
});
```
2) override the type of the return value 
```ts
type ReturnType = jasmine.Spy;

declare module 'ts-auto-mock/extension' {
  interface Method<TR> extends ReturnType {}
}
```
### Method Usage
1) create an interface
```ts
interface Interface {
    methodToSpy: () => string
}
```
2) create a mock
```ts
const mock: Interface = createMock<Interface>();
```

3) get the spy from the method
You can get the method in two different way

through a function that access to the mock
```ts
import { On, method } from "ts-auto-mock/extension";
const spy: jasmine.Spy = On(mock).get(method(mock => mock.methodToSpy));
```
directly as string
```ts
import { On, method } from "ts-auto-mock/extension";
const spy: jasmine.Spy = On(mock).get(method('methodToSpy'));
```
 
4) trigger the method
```ts
someMethodThatWillTriggerInterfaceA();
expect(spy).toHaveBeenCalled();
```