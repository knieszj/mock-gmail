import React from 'react'

const SearchBar = ({functionsInState}) => {


    return (
        <>
            <form onSubmit={functionsInState}>
                <input type="text" value={''} onChange={''}/>
                <input type="submit" value="Send Note"/>
            </form>

        </>
    )
}
export default SearchBar