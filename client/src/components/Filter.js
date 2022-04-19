import '../styles/SearchResults.css'

const Filter = (props) => {
    const handleClickCategory = () => {
        props.toggleCategoryButton((prevVal) => {return !prevVal})
    }

    const handleClickPrice = () => {
        props.togglePriceButton((prevVal) => {return !prevVal})
    }
    return (
        <div className="filter">
            <aside>
                <h2>Filter</h2>
                <div>
                <input onClick={handleClickCategory} type="checkbox" id="cateogry-input" name="category-input"/>
                    <label>Category</label>
                </div>
                <div>
                <input onClick={handleClickPrice} type="checkbox" id="price-input" name="price-input"/>
                    <label>Price</label>
                </div>
                
            </aside>
        </div>
    );
}

export default Filter;