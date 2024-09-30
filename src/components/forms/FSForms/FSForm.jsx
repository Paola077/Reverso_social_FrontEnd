import { useNavigate, useParams } from "react-router-dom";
import "./_FSForm.scss"
import { useState } from "react";
import { InputForm } from "../../Inputs/InputForm";
import { Button } from "../../buttons/button/Button";


const FSForm = ({ text, formFields }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);

        //lógica para backend
    };

    const handleCancel = () => {
        setFormData({});  // Resetea los campos del formulario
    };

    return (
        <div className="formBackGround">
            <form onSubmit={handleSubmit}>
                <div className="formBox" >
                    <button className="buttonExit" onClick={() => navigate("/reverso-social/femsenior") }>
                        <img src="/icons/Exit.svg" alt="Cerrar formulario" />
                    </button>
                    
                    <h2 className="requestTitle">{text}</h2>

                    {formFields.map((field, index) => (
                        
                        <InputForm 
                        key={index}
                        title={field.title}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        name={field.name}
                        onChange={handleChange}
                        options={field.options || []}
                        />
                    ))}
                    <div className="buttonBox">
                        <Button 
                        textButton={"Cancelar"}
                        backgroundColor={"white"}
                        border={"0.15rem solid #7176f8"}
                        color={"#7176f8"}
                        width={"20rem"}
                        height={"3rem"}
                        onClick={handleCancel}/> 

                        <Button 
                        textButton={"Aceptar"}
                        backgroundColor={"#7176f8"}
                        border={"0.15rem solid #7176f8"}
                        color={"white"}
                        type={"submit"}
                        width={"20rem"}
                        height={"3rem"}
                        />

                    </div>

                </div>
                
            </form>

        </div>
    )
}

export default FSForm;