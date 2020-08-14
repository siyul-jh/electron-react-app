## Yarn 사용

NPM이 아닌 Yarn을 사용

### `yarn dev`

현재 프로젝트를 기발자 모드로 실행 시킬 수 있다.

### `yarn dist`

현재 프로젝트를 빌드 한다. window와 mac둘다 빌드를 진행한다.
빌드된 결과물은 react는 build 폴더가 생성되며
electron는 dist 폴더에 생성된다.

### `yarn dist:mac`

현재 프로젝트를 MAC용으로 빌드한다.

### `yarn dist:win`

현재 프로젝트를 Window용으로 빌드한다.

### `Electron 환경설정`

Electron의 환경설정은 public > electron.js 에서 설정한다.

### `React 특이사항`

Electron-React의 경우 특이사항이 있다.

1. BrowserRouter가 작동을 하지 않는다고 한다.
   그래서 HashRourer를 사용해야한다고 한다.

2. iframe의 사용이 힘들다.
   iframe의 사용은 가능하나 Electron의 문법을 사용하여 작성해야하는 듯하다.
   혹은 작동을 안하거나... 사실 확인을 더 자세히 못했다.
