```
📦src
┣ 📂@types // 전역적으로 사용하는 타입을 정의하는 폴더
┃ ┗ 📜[type].d.ts
┣ 📂apis // api를 정의하는 폴더
┃ ┣ 📜[api].ts
┃ ┣ 📜index.ts
┃ ┗ 📜instance.ts
┣ 📂components // 전역적으로 사용하는 컴포넌트를 정의하는 폴더
┃ ┣ 📂[component]
┃ ┃ ┣ 📜[component].tsx
┃ ┃ ┗ 📜index.ts
┃ ┗ 📜index.ts
┣ 📂containers // 특정 페이지에서 사용하는 컴포넌트를 정의하는 폴더
┃ ┣ 📂[page]
┃ ┃ ┗ 📜index.ts
┣ 📂hooks // 전역적으로 사용하는 커스텀 훅을 정의하는 폴더
┃ ┣ 📂[hook]
┃ ┃ ┗ 📜[hook].ts
┃ ┃ ┣ 📜index.ts
┃ ┗ 📜index.ts
┣ 📂lib // 전역적으로 사용하는 JS 라이브러리 코드를 정의하는 폴더
┃ ┣ 📂[lib]
┃ ┃ ┣ 📜[lib].tsx
┃ ┃ ┗ 📜index.ts
┃ ┗ 📜index.ts
┗ 📂pages
┃ ┣ 📂api
┃ ┃ ┗ 📜hello.ts
┃ ┣ 📂[page]
┃ ┃ ┗ 📜index.ts
┃ ┣ 📜_app.tsx
┃ ┣ 📜_document.tsx
┃ ┗ 📜index.tsx
```
