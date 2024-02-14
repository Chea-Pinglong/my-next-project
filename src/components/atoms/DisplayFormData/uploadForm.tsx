import { useState } from "react";
import DisplayFormData from "./DisaplayFormData";
import { number } from "yup";

export default function UploadForm() {
  const [formDataList, setFormDataList] = useState([]);
  const [updateData , setupdateData] = useState();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    date: "",
    location: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDataList((prevList) => [...prevList, formData]);
    console.log(formData);
    setFormData({
      id: "",
      title: "",
      description: "",
      date: "",
      location: "",
      image: null,
    });
  };
  
  return (
    <div>
      <h2>Upload Form</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="id">ID:</label>
          <input 
            type="text" 
            id="id" 
            name="id" 
            value={formData.id} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input 
            type="text" 
            id="description" 
            name="description" 
            value={formData.description} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input 
            type="text" 
            id="date" 
            name="date" 
            value={formData.date} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={formData.location} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input 
            type="file" 
            id="image" 
            name="image" 
            onChange={handleFileChange} 
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div  className='flex flex-wrap gap-5'>
      {formDataList.map((data, index) => (
        <DisplayFormData key={index} formData={data} />
      ))}
      </div>
    </div>
  );
}
