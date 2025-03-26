import React,{useState}from "react";
const AddMovie=()=>{
    const [data,setData]=useState({
        title: '',
        director: '',
        genre: '',
        releaseYear: '',
        synopsis: '',
        posterImage: '',
    });

const handleChange=(e)=>{
    const{name,value}=e.target;
    setData({
        ...data,[name]:value
    });
};

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data);
}
return(
     <div className="add-movie-container">
        <h1>Add Movie</h1>
        <form onSubmit={handleSubmit} className="add-movie-form">
            <label >
                title:
                <input type="text" name="title" value={data.title} onChange={handleChange} required/>
            </label>
            <label >
                director:
                <input type="text" name="director" value={data.director} onChange={handleChange} required/>
            </label>
            <label >
                Genre:
                <input type="text" name="Genre" value={data.title} onChange={handleChange} required/>
            </label>
            <label >
                releaseYear:
                <input type="number" name="year" value={data.title} onChange={handleChange} required/>
            </label>
            <label>
          Synopsis:
          <textarea
            name="synopsis"
            value={formData.synopsis}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Poster Image URL:
          <input
            type="url"
            name="posterImage"
            value={formData.posterImage}
            onChange={handleChange}
            required
          />
        </label>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>





        </form>

     </div>


)
}
export default AddMovie;