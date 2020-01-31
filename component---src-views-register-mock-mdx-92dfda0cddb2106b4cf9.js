(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{FVCx:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return m}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var r=n("/FXl"),o=n("TjRS");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/views/register-mock.mdx"}});var c={_frontmatter:a},i=o.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(i,s({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"register-mock"},"Register mock"),Object(r.b)("p",null,"registerMock will register your custom mock that will be re used automatically whenever a another mock will convert the same interface"),Object(r.b)("p",null,"./person.ts"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-ts"}),"export interface Person {\n  id: string;\n}\n")),Object(r.b)("p",null,"./person-fake.ts"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-ts"}),'import { Person } from \'./person\';\n\nexport class PersonFake extends Person {\n  public id: string;\n  public name: string;\n\n  constructor() {\n    this.id = "Basic Id";\n    this.name = "Basic name";\n  }\n}\n')),Object(r.b)("p",null,"./context.ts"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-ts",metastring:"context.ts","context.ts":!0}),"import { registerMock } from 'ts-auto-mock';\nimport { Person } from './person';\nimport { PersonFake } from './person-fake';\n\nregisterMock<Person>(() => new PersonFake());\n")),Object(r.b)("p",null,"./my-test.ts"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-ts",metastring:"my-test.ts","my-test.ts":!0}),'interface Wrapper {\n    person: Person;\n}\n\nconst mock: Wrapper = createMock<Wrapper>();\nmock.person // PersonFake\nmock.person.id // "Basic Id"\nmock.person.name // "Basic name"\n')),Object(r.b)("p",null,"When using a fake we recommend using the ",Object(r.b)("a",s({parentName:"p"},{href:"./extension"}),"extension strategy")," to retrieve the fake object.\nAn example of usage for Promise->FakePromise can be found in ",Object(r.b)("a",s({parentName:"p"},{href:"https://github.com/Typescript-TDD/ts-auto-mock/blob/master/test/registerMock/extensionStrategy/extensionStrategy.test.ts"}),"the test folder"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," You can use it only in the common file (webpack context.ts, mocha tsnode.js, etc), using ",Object(r.b)("inlineCode",{parentName:"p"},"registerMock")," in other files will have unexpected results."))}m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/views/register-mock.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-views-register-mock-mdx-92dfda0cddb2106b4cf9.js.map