import React from "react";

const Search = () => {
    const [search, setSearch] = React.useState("");

    return (
        <div>
            <h3 className="title">CONTACTS LIST</h3>
                <input 
                    type="text" 
                    placeholder="Search name" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
           
        </div>
    )
}

export default Search