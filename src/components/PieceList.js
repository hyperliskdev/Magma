


const GET_LOCATIONS = gql`
    query GetLocations {
        locations {
            title
            code
            description
        }
    }
`;


function LocationList({ onLocationClicked }) {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    return (
        <div>
            <ul>
                {data.locations.map(location => (
                    <li key={location.code}></li>
                ))}
            </ul>
        </div>
    )



}