import '../styles/SearchResults.css'

const Filter = (props) => {
    const handleClickCategory = () => {
        props.toggleCategoryButton((prevVal) => {return !prevVal})
    }

    const handleClickPrice = () => {
        props.togglePriceButton((prevVal) => {return !prevVal})
    }
    let catArray = props.searchResults.map((category) => {return category.Category_name})
    let catFillUnique = new Set(catArray) 
    let catFill = [...catFillUnique]
    return (
        <div className="filter">
            <aside>
                <h2>Filter</h2>
                <div>
                    <h5>Categories</h5>
                {catFill.map((category) => (
                    <div>
                        <input onClick={handleClickCategory} type="checkbox" id="cateogry-input" name="category-input"/>
                            <label>{category}</label>
                    </div>
                ))}
                </div>
                <div>
                    <h5>Price</h5>
                <input onClick={handleClickPrice} type="checkbox" id="price-input" name="price-input"/>
                    <label>Price</label>
                </div>
                
            </aside>
        </div>
    );
}

export default Filter;