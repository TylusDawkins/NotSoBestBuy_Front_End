const Filter = (props) => {
    return (
        <div className="filter">
            <aside>
                <h2>Filter</h2>
                <input type="checkbox" id="cateogry-input" name="category-input"/>
                    <label>Category</label>
                <input type="checkbox" id="price-input" name="price-input"/>
                    <label>Price</label>
                
            </aside>
        </div>
    );
}

export default Filter;