import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {
    const greetParent = () => {alert('Hi Parent')}
    return (
        <ChildComponent greetHandler={greetParent} />
    )
}
