import "./_SectorSelect.scss"
const SectorSelect = ({onChange}) => {
    const sectors = [
      { label: "Administración y Finanzas", value: "Administración y Finanzas" },
      { label: "Atención al Cliente y Servicios", value: "Atención al Cliente y Servicios" },
      { label: "Atención y Cuidados", value: "Atención y Cuidados" },
      { label: "Artes y Creatividades", value: "Artes y Creatividades" },
      { label: "Dirección y Ejecución", value: "Dirección y Ejecución" },
      { label: "Hostelería y Turismo", value: "Hostelería y Turismo" },
      { label: "Psicología", value: "Psicología" },
      { label: "Sanidad", value: "Sanidad" },
      { label: "Servicios a la Comunidad", value: "Servicios a la Comunidad" },
      { label: "Tecnología", value: "Tecnología" },
      { label: "Terapias Alternativas y Desarrollo Personal", value: "Terapias Alternativas y Desarrollo Personal" },
    ];
  
    return (
     <>
      <select name="sector" id="sector" onChange={onChange} className="sectorSelect"> 
        <option value="">
          SECTOR 
        </option>
        {sectors.map((sector) => (
          <option key={sector.value} value={sector.value}>
            {sector.label}
          </option>
        ))}
      </select>
   
      </>
    );
  };
  export default SectorSelect;
