const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn && // eslint-disable-line no-console
  typeof window !== 'undefined'
) {
  // eslint-disable-next-line no-console
  console.warn(
    'You are using a whole package of cscore_component'
  );
}
export { default as Button } from './Buttons';

export { default as Calendar } from './Cascader';

export { default as Select } from './Select';

