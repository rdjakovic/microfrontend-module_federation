/// <reference types="react" />
declare module "@not-for-import/app2/components/Counter" {
    const Counter: () => JSX.Element;
    export default Counter;
}
declare module "app2/App2" {
    import './index.css';
    const App: () => JSX.Element;
    export default App;
}
