import { render } from 'solid-js/web';
import {Component} from "solid-js";

const Main: Component = () => {
    return (
        <div>
            <header>
                <p>
                    Edit <code>src/main.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    );
};

render(() => <Main />, document.getElementById('root') as HTMLElement)