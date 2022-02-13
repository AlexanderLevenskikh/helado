import {style, styleVariants} from '@vanilla-extract/css';

export const checkboxInputStyle = style({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
});

const baseCheckboxStyle = style({
    display: 'inline-block',
    height: '15px',
    width: '15px',
    background: '#fff',
    border: '2px #eee solid',
    marginRight: '8px',
});

export const checkboxStyle = styleVariants({
    default: [baseCheckboxStyle],
    checked: [baseCheckboxStyle, style({
        borderColor: 'rgba(42,134,250,0.87)',
        background: 'rgba(42,134,250,0.87)'
    })],
});