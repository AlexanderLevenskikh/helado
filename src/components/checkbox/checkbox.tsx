import {Component, createSignal} from "solid-js";
import {checkboxInputStyle, checkboxStyle} from "./checkbox.css";

interface IComponentProps {

}

export const Checkbox: Component<IComponentProps> = ({children}) => {
    const [getActivity, setActivity] = createSignal(false);

    return (
        <label>
            <input type="checkbox" className={checkboxInputStyle} onClick={() => setActivity(prev => !prev)}/>
            <svg
                className={`${getActivity() ? checkboxStyle.checked : checkboxStyle.default}`}
                aria-hidden="true"
                viewBox="0 0 15 11"
                fill="none"
            >
                <path
                    d="M1 4.5L5 9L14 1"
                    stroke-width="2"
                    stroke={getActivity() ? "#fff" : "none"}
                />
            </svg>
            <span
                aria-hidden={true}
            >
                {children}
            </span>
        </label>
    )
};