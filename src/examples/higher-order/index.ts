import { ComponentEnhancer, compose, withHandlers, withState } from 'recompose'

export default function provideExampleValue<TProps>(value: string): ComponentEnhancer<TProps, TProps> {
  return compose<TProps, TProps>(
    withState('value', 'setValue', value),
    withHandlers({
      onChange: ({ setValue }) => (ev: any, newValue: string) => {
        setValue(newValue)
      },
      onAdd: () => (...args: any[]) => console.log('added a new mention', ...args),
    })
  )
}
