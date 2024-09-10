import React, { ChangeEventHandler, useState } from "react";
import CustomForm from "../components/CustomForm";
import Title from "../components/Title";
import Icon from "../components/Icon";


function HomePage() {
    const [formData, setFormData] = useState({name: '', gender:''})

    const onSubmitHandler = (e:React.FormEvent<HTMLElement>)=>{
        e.preventDefault()
        const form = e.target as HTMLFormElement

        const name = (form.elements.namedItem('name') as HTMLInputElement).value
        const gender = (form.elements.namedItem('gender') as HTMLInputElement).value
        setFormData({name:name, gender:gender})

    }
    return (
      <div className="home-section flex flex-column">
        <Icon gender={formData.gender}/>
        <Title data={formData} />
        <CustomForm handleSubmit={onSubmitHandler} />
      </div>
    );
  }
  
  export default HomePage;