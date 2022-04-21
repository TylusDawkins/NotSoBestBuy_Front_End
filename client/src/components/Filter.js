import '../styles/SearchResults.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


//attention
const Filter = (props) => {
        let catIdArray = props.searchResults.map((category) => {
            return [category.Category_name,category.Category_id]
        })
        let catIdObject = Object.fromEntries(catIdArray)
        let catIdObjectKeys = Object.keys(catIdObject)
        let {id, val} = useParams()

        const handleClickCat = () => {
            props.setView(false)
        }
        const handleClickPrice = () => {
            props.setView(true)
        }
    return (
        <div className="filter">
            <aside>
                <h2>Filter</h2>
                <div> 
                    {<h5>Categories</h5>}
                {catIdObjectKeys.map((category) => (
                    <div>
                        <Link onClick={handleClickCat} to={`/search/${catIdObject[category]}/${val}`}><label>{category}</label></Link>
                    </div>
                ))}
                </div>
                    <div>
                    <h5>Price</h5>
                <Link onClick={handleClickPrice} to={`/search/${id}/200`}> <label>$200 or less</label></Link>
                    </div>
                    <div>
                <Link onClick={handleClickPrice} to={`/search/${id}/400`}><label>$400 or less</label></Link>
                    
                    </div>
                    <div>
                <Link onClick={handleClickPrice} to={`/search/${id}/600`}><label>$600 or less</label></Link>
                    
                    </div>
                    <div>
                <Link onClick={handleClickPrice} to={`/search/${id}/800`}><label>$800 or less</label></Link>
                    
                    </div>
                    <div>
                <Link onClick={handleClickPrice} to={`/search/${id}/1000`}><label>$1000 or less</label></Link>
                    
                    </div>
                    <div>
                <Link onClick={handleClickPrice} to={`/search/${id}/2000`}><label>$2000 or less</label></Link>
                    
                </div>
                    <div>
                <Link onClick={handleClickPrice} to={`/search/${id}/2001`}><label>$2000 or more</label></Link>
                    
                </div>
            </aside>
        </div>
    );
}

export default Filter;