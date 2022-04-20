import '../styles/SearchResults.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Filter = (props) => {
        let catIdArray = props.searchResults.map((category) => {
            return [category.Category_name,category.Category_id]
        })
        let catIdObject = Object.fromEntries(catIdArray)
        console.log(catIdObject)
        let catIdObjectKeys = Object.keys(catIdObject)
        console.log(catIdObjectKeys)
        let {id} = useParams()
        console.log({id})

    return (
        <div className="filter">
            <aside>
                <h2>Filter</h2>
                <div> 
                    {id==="0" && <h5>Categories</h5>}
                { id==="0" && catIdObjectKeys.map((category) => (
                    <div>
                        <Link to={`/search/${catIdObject[category]}`}>{catIdObject.category}{category}</Link>
                    </div>
                ))}
                </div>
                    <div>
                    <h5>Price</h5>
                <input type="checkbox" id="price-input" name="price-input"/>
                    <label>$0 - $200</label>
                    </div>
                    <div>
                <input type="checkbox" id="price-input" name="price-input"/>
                    <label>$200 - $400</label>
                    </div>
                    <div>
                <input type="checkbox" id="price-input" name="price-input"/>
                    <label>$400 - $600</label>
                    </div>
                    <div>
                <input type="checkbox" id="price-input" name="price-input"/>
                    <label>$600 - $800</label>
                    </div>
                    <div>
                <input type="checkbox" id="price-input" name="price-input"/>
                    <label>$800 - $1000</label>
                    </div>
                    <div>
                <input type="checkbox" id="price-input" name="price-input"/>
                    <label>$1000 - $2000</label>
                </div>
            </aside>
        </div>
    );
}

export default Filter;