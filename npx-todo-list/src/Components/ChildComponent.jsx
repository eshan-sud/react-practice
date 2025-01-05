
export const ChildComponent = (props) => {
    return (
        <>
            <button className='bg-red-700 p-3 rounded-xl text-white' onClick={() => {props.greetHandler()}}>Greet Parent</button>
        </>
    )
}
