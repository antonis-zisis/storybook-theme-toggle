import addons, { types } from '@storybook/addons';
import ToggleTheme from './ToggleTheme';

addons.register('storybook-theme-toggle', (api) => {
    addons.add('sstorybook-theme-toggle', {
        title: 'Toggle Theme',
        type: types.TOOL,
        match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
        render: () => <ToggleTheme api={api} />,
    });
});
