import { useState, useEffect} from 'react'
import axios from 'axios'


const AddBook =(props)=>{
    const [authors, setAuthors] = useState([])
    const [publishers, setPublishers] = useState([])

    useEffect(()=>{
        const authorUrl = 'http://localhost:3005/api/author'
        const pubUrl = 'http://localhost:3005/api/publishing'

        axios.get(authorUrl).then(res => setAuthors(res.data))
        axios.get(pubUrl).then(res => setPublishers(res.data))
    }, [])

    const authorDiv = authors.map(author => {
        return(
            <div className="form-check form-check-inline" key={author.author_id}>
                <label htmlFor={author.author_id} className="form-check-label">{author.author_name}</label>
                <input id={author.author_id} defaultValue={author.author_id} type="radio" className="form-check-input" name="author_id" onChange={props.handleChange} />
            </div>
        )
    }) 


    const publishingDiv = publishers.map(publishing => {
        return(
            <div className="form-check form-check-inline" key={publishing.pub_id}>
                <label htmlFor={publishing.pub_id} className="form-check-label">{publishing.company_name}</label>
                <input id={publishing.pub_id} defaultValue={publishing.pub_id} type="radio" className="form-check-input" name="pub_id" onChange={props.handleChange} />
            </div>

        )
    })

    return(
        <>
        {props.isPostSuccess.isSuccess ? <Success /> :
            <main className="add-book" id="addBooks">
                <div className="container">
                    <form className="book-form" id="bookForm" onSubmit={ props.handleSubmit }>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="title" className="form-label">Book Title:</label>
                                <input id="title" type="text" className="form-control" name="title" onChange={props.handleChange} />
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="author-box">
                                        <p className="form-text">Authors</p>
                                        {authorDiv}
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="author-box">
                                        <p className="form-text">Publishers</p>
                                        {publishingDiv}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <label htmlFor="copyrightYear" className="form-label">Copyright Year:</label>
                                <input id="copyrightYear" type="number" min="1900" max="2050" step="1" className="form-control" name="copyright_year" onChange={props.handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="edition" className="form-label">Edition:</label>
                                <input id="eidtion" type="number" min="1" max="100" step="1" className="form-control" name="edition" onChange={props.handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="editionYear" className="form-label">Edition Year:</label>
                                <input id="eidtionYear" type="number" min="1900" max="2050" step="1" className="form-control" name="edition_year" onChange={props.handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="language" className="form-label">Language:</label>
                                <input id="language" type="text" className="form-control" name="language" onChange={props.handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="numOfPages" className="form-label">Number of Pages:</label>
                                <input id="numOfPages" type="number" min="0" max="1000" step="1" className="form-control" name="num_pages" onChange={props.handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="qty" className="form-label">Quantity:</label>
                                <input id="qty" type="number" min="1" max="30" step="1" className="form-control" name="qty" onChange={props.handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="rating-box">
                                    <p className="form-text">Rating:</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="Primary" id="primaryRating" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="primaryRating">Primary</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="Juvenile" id="juvenileRating" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="juvenileRating">Juvenile</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="Pre-adolescent" id="pre-AdolescentRating" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="pre-AdolescentRating">Pre-adolescent</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="Adolescent" id="adolescentRating" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="adolescentRating">Adolescent</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="rating" defaultValue="Adult" id="adultRating" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="adultRating">Adult</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="format-box">
                                    <p className="form-text">Format:</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="format_id" defaultValue="1" id="physicalFormat" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="physicalFormat">Physical</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="format_id" defaultValue="4" id="videoFormat" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="videoFormat">Video</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="format_id" defaultValue="2" id="audioFormat" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="audioFormat">Audio</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="format_id" defaultValue="3" id="ditalFormat" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="ditalFormat">Dital</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <p className="form-text">Binding:</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="binding" defaultValue="paperback" id="bindingFormat" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="bindingFormat">Paperback</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="binding" defaultValue="hardback" id="bindingFormat" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="bindingFormat">Hardback</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="binding" defaultValue="non-physical" id="bindingFormat" onChange={props.handleChange} />
                                        <label className="form-check-label" htmlFor="bindingFormat">Non-Physical</label>
                                    </div>
                            </div>
                        </div>
                        
                        <div className="row mb-3">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Cover Image</span>
                                    <input className="form-control" name="cover_image" type="file" onChange={props.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <button className="btn btn-dark" type="submit">Add Book</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            
        }
            
            
        </>
    )
}

const Success =()=> {
    return (
        <div className="container">
            <h2>Book was successfully added.</h2> 
        </div>
    )
}


export default AddBook