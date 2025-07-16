import  {type ErrorInfo, Component, type ReactNode } from "react";

type Props = {
    children: ReactNode
}

type State = {
    hasError: boolean;
}
export class ErrorBoundary extends Component<Props, State>{
    state = { hasError: false};
    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(`ErrorBoundary: ${error} info: ${info}`);
    }

    render(){
        if(this.state.hasError){
            return <h1>Ups... un Error</h1>
        } 

        return this.props.children;
    }
}