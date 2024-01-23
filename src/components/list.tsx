interface events {
    id:number,
    name:string,
    date:string,
    tickets:number,
    price:number
}
interface data {
    data: Array<events>;
}

const List = ( props: data ) => {

    const events = props.data

    return(
        <>
            <h2>Events:</h2>
            {events.map(data =>
                <p key={data.id}> {data.name} {data.date} {data.price}€</p>
            )}
        </>
    )
}

export default List