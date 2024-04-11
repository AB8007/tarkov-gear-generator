export const SearchForm = ({ setSearchValue }) => {

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <>
            Search: <input onChange={handleChange}></input>
        </>
    )
}