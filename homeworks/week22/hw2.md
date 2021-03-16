1. 請列出 React 內建的所有 hook，並大概講解功能是什麼

   ## useState - 回傳一個 state 值，以及更新 state 的 function，在首次 render 時，回傳的 state 值，會跟設定參數一樣。

   （例如傳 null ，state 一開始就會是 null），並且是一個非同步的 function，如果更新的 state 值和前一個相同，則不會 re-render。（大概像火球術那樣基礎並且重要）

   ## useEffect - 使用 useEffect。傳遞到 useEffect 的 function 會在 render 後執行。可以把 useEffect 當作 React 從純函式的世界通往指令世界的跳脫方式。

   套句老師說的『在 render 後，你想做什麼？』（大概像緩速魔法那種感覺）

   ## useContext － 接收一個 context object（React.createContext 的回傳值）並回傳該 context 目前的值。

   Context 目前的值是取決於由上層 component 距離最近的 <MyContext.Provider> 的 value prop。（接收或回傳一個值，並且這個值是可以傳遞）
   當 component 上層最近的 <MyContext.Provider> 更新時，該 hook 會觸發重新 render，並使用最新傳遞到 MyContext 的 context value 傳送到 MyContext provider。（上層如果更新，會觸發這個魔法，讓它傳遞到最下層並更新值）（有點像連結的心靈魔法那種感覺）
   **不要忘記 useContext 的參數必需為 context object 自己，正確: useContext(MyContext)，呼叫 useContext 的 component 總是會在 context 值更新時重新 render。**
   ----------（以上都是基礎魔法第一課，下面是額外選修的科目）

   ## useReducer - useState 的替代方案。接受一個 (state, action) => newState 的 reducer，然後回傳現在的 state 以及其配套的 dispatch 方法。

   `const [state, dispatch] = useReducer(reducer, initialArg, init);`
   你需要複雜的 state 邏輯而且包括多個子數值或下一個 state 依賴之前的 state，useReducer 會比 useState 更適用。而且 useReducer 可以讓你觸發深層更新的 component 作效能的最佳化，因為你可以傳遞 dispatch 而不是 callback。(一個火球術更改了魔法陣的架構變成暴炎術的感覺)

   ## useCallback － 回傳一個 memoized 的 callback。（用來記住一個 function instance（實例））

   傳遞一個 inline callback 及依賴 array。useCallback 會回傳該 callback 的 memoized 版本，它僅在依賴改變時才會更新。當傳遞 callback 到已經最佳化的 child component 時非常有用，這些 child component 依賴於引用相等性來防止不必要的 render（例如，shouldComponentUpdate）。
   （useCallback 的主要目的是避免在 component 內部宣告的 function，因為隨著每次 render 不斷重新被宣告跟建立，每次拿到的都是不同的 instance。這樣的 function 如果被當成 prop 往下傳給其他 component，就可能導致下面的 component 無意義地被重新 render。）(有限定條件的情況下搭配的快速詠唱的感覺？)

   ## useMemo －  回傳一個 memoized 的值。（用來記住一個值））

   傳遞一個「建立」function 及依賴 array。useMemo 只會在依賴改變時才重新計算 memoized 的值。這個最佳化可以避免在每次 render 都進行昂貴的計算。（如果值很小使用 useMemo 並不划算，它的作用是『避免重複進行複雜耗時的計算』，所以把計算的結果存起來，為了檢查什麼時候該重新計算，每次 render 時還會額外去比對 depdendencies 陣列裡面的內容，如果值沒有很大，反而需要消耗額外效能去做檢查）
   要謹記傳到 useMemo 的 function 會在 render 期間執行。不要做一些通常不會在 render 期間做的事情。例如，處理 side effect 屬於 useEffect，而不是 useMemo。如果沒有提供 array，每次 render 時都會計算新的值。（快速詠唱魔法，但是不要拿來紀錄火球術這種基礎魔法，會浪費記憶格數，大概那種感覺）

   ## useRef - useRef 回傳一個 mutable 的 ref object，.current 屬性被初始為傳入的參數（initialValue）。

   回傳的 object 在 component 的生命週期將保持不變。（useRef 是一個可以讓我們抓取到 DOM 節點的 hooks。創建一個 DOM 的節點，讓我們擁有綁定 DOM 的使用權。**改變 current 的值不會觸發 re-render**）（操控系魔法的感覺？）

   ## useImperativeHandle - useImperativeHandle 可以讓使用 ref 時能向父 component 暴露自定義的 instance 值。

   (input 元素是額外再封裝成一個 component 的話，而父 component 也想要對於這個被額外封裝成 component 的 input 元素可以執行像是 focus 的需求的話，那這時候就還需要用到 useImperativeHandle 這個 Hook。)

   ## useLayoutEffect - 與宣告 useEffect 本身相同，但它會在所有 DOM 改變後，同步調用。

   使用它來讀取 DOM layout 並同步重新 render。在瀏覽器執行繪製之前，useLayoutEffect 內部的更新將被同步刷新。
   盡可能使用標準的 useEffect 來避免阻礙視覺上的更新。（也許可用在 Loding 時使用？）（使用方式與 useEffect 一樣，只是差別在觸發的時間點是在所有 DOM 改變之後才會同步調用。
   但這個方式會阻礙瀏覽器的更新，所以在使用上應該先以 useEffect 為主，如果有問題才使用 useLayoutEffect。）

   ## useDebugValue - useDebugValue 可以用來在 React DevTools 中顯示自訂義 hook 的標籤。

2. 請列出 class component 的所有 lifecycle 的 method，並大概解釋觸發的時機點
   可以先分為三大階段：
   創建 component (componentDidMount)
   更新 component(componentDidUpdate)
   銷毀 component (componentWillUnmount)

## mounting 階段

constructor ：初始化
static getDerivedStateFromProps()
render ：渲染
componentDidMount： DOM 掛載完成

componentDidMount: DOM 已經掛載完成 ，在這個階段可以呼叫 api 來更新 DOM ，適合做一些初始化的工作

## updating 階段

static getDerivedStateFromProps()
shouldComponentUpdate 3. render 4. getSnapshotBeforeUpdate() 5. componentDidUpdate ：component 已經更新完畢
componentDidUpdate: 當 props or state 更新 ，就會觸發組件更新 DOM，所以千萬不要在這個階段 setState，會造成無限循環

## Unmount 銷毀

componentWillUnmount component 即將銷毀
componentWillUnmount: component 從 DOM 被移除 ，在這階段可以用來清除一些計時器

3. 請問 class component 與 function component 的差別是什麼？

## Class component

1.  需繼承 React.Component
2.  具有生命週期，可以針對某些情境決定是否渲染，ex shouldComponentUpdate()
3.  具有 state (Stateful component)
4.  需要實作 render 方法
5.  擁有 this
6.  每次都可以拿到最新的 this.props，因為 this 隨時都在變化，

## Functional component

1.  沒有生命週期 (Hook userEffect 出現後，就有生命週期）
2.  沒有 state（Stateless），所以被稱為無狀態組件（Hook useState 出現後就可以有 state ）
3.  可以用 arrow function 宣告或是一般的 function
4.  沒有 this
5.  編譯更快
6.  props 會一直是原本傳進來的那個，而不會跟著更新。

## uncontrolled 跟 controlled component 差在哪邊？要用的時候通常都是如何使用？

    Controlled component：由 React 管控 HTML form element 的 state
    Uncontrolled component：由 HTML form element 自行管理 state

controlled component 的使用情境：
需要對表單檢查是否修改過、格式驗證等狀況，需要取得表單的 state 或內容去連動修改其他 component 時。
如果只是想要簡單的去取得表單的值或者只是想要直接操控 DOM 則可以使用 Uncontrolled component。
**雖然不受控制的組件通常更容易實現，因為只需使用引用從 DOM 獲取值，但是通常建議您通過不受控制的組件來支持受控組件。**

## 參考資料：

    [React 官方資料](https://zh-hant.reactjs.org/docs/hooks-reference.html)
    [關於 useState，你需要知道的事 - Justin Chien](https://medium.com/@xyz030206/%E9%97%9C%E6%96%BC-usestate-%E4%BD%A0%E9%9C%80%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B-5c8c4cdda82c)
    [什麼時候該使用 useMemo 跟 useCallback - TH Chang](https://medium.com/ichef/%E4%BB%80%E9%BA%BC%E6%99%82%E5%80%99%E8%A9%B2%E4%BD%BF%E7%94%A8-usememo-%E8%B7%9F-usecallback-a3c1cd0eb520#:~:text=useCallback%20%E7%9A%84%E4%B8%BB%E8%A6%81%E7%9B%AE%E7%9A%84%E6%98%AF,%E6%84%8F%E7%BE%A9%E5%9C%B0%E8%A2%AB%E9%87%8D%E6%96%B0render%E3%80%82)
    [【Day 24】 useRef - 莫力全 Kyle Mo](<https://ithelp.ithome.com.tw/articles/10221937?sc=rss.iron#:~:text=useRef%20%E6%98%AF%E4%B8%80%E5%80%8B%E5%8F%AF%E4%BB%A5%E8%AE%93,%E5%88%B0DOM%20%E7%AF%80%E9%BB%9E%E7%9A%84hooks%E3%80%82&text=const%20inputRef%20%3D%20useRef(null)%3B,-%E5%91%BC%E5%8F%ABuseRef%20%E5%BB%BA%E7%AB%8B&text=%E6%9C%89%E4%BA%86useRef%20%E5%B0%B1%E5%8F%AF%E4%BB%A5,%E7%AD%89%E5%B0%8DDOM%20%E7%9A%84%E6%93%8D%E4%BD%9C%E3%80%82>)
    [認識 React Hooks 之三 - Penghua](https://ithelp.ithome.com.tw/articles/10253073)
    [React Functional Component 與 Class Component 的差異](https://medium.com/coding-hot-pot/react-functional-component-v-s-class-component-e46c6dc5a319)
    [I Want To Know React - Uncontrolled component](https://ithelp.ithome.com.tw/articles/10250448?sc=rss.iron)
    [[Day 27 - 即時天氣] React 中的表單處理（Controlled vs Uncontrolled）以及 useRef 的使用](https://ithelp.ithome.com.tw/articles/10227866)
    [React lifeCycle 生命週期](https://medium.com/coding-hot-pot/react-lifecycle-%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F-a48683ae3922)
