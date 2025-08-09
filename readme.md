private 설정되지 않은 것들만 실행시키기

> pnpm exec lerna run test --no-private

쉼포(,)를 이용한 실행

> pnpm exec lerna run test,build

패키지에 변화가 없을 때는 실행시키지 않기

> pnpm exec lerna add-caching
>
> \# 상단 명령어 실행 후 실행하기
> pnpm exec lerna run test --scope=a --verbose

nx 추가하기
> pnpm -w add nx

nx 그래프 설치
> pnpm exec nx graph
