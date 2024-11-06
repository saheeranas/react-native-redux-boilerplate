// .storybook/index.tsx
import {view} from './storybook.requires';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: key => Promise.resolve(storage.getString(key) || null),
    setItem: (key, value) => Promise.resolve(storage.set(key, value)),
  },
});

export default StorybookUIRoot;
