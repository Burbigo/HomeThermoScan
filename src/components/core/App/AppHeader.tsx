import * as React from "react";

export interface AppHeaderProps {

}
export interface AppHeaderState {
}

export class AppHeader extends React.Component<AppHeaderProps, AppHeaderState> {
    constructor(props) {
        super(props);

        this.bindMethods();
    }

    public render() {
        return (
            <div className="app-header">
                <h1>Header!!!</h1>

            </div>
        );
    }
    private bindMethods() {
    }
}
