import {Checkbox} from '../checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
}

export const WithText = () => <Checkbox>Check me</Checkbox>

WithText.storyName = 'with text';
