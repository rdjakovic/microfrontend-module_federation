/// <reference types="react" />
declare module "@not-for-import/app1/components/Counter" {
    const Counter: () => JSX.Element;
    export default Counter;
}
declare module "app1/App1" {
    import './index.css';
    const App: () => JSX.Element;
    export default App;
}
