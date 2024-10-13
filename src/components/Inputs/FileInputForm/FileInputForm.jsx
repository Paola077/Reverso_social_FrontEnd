import { useEffect, useState } from "react";
import "./_FileInputForm.scss";
import deleteIcon from "/icons/Delete.svg";

export const FileInputForm = ({
  title,
  placeholder,
  fileName,
  name,
  onChange
}) => {
  const [hideUploader, setHideUploader] = useState(true);

  const handleUploader = () => {
    setHideUploader(false);
    data.shouldModifyFile = true;
  };

  useEffect(() => {
    if (fileName === undefined || fileName === null || fileName === "") {
      setHideUploader(false);
    } else {
      setHideUploader(true);
    }
  }, [fileName]);

  return (
    <div className="inputBox">
      <h4>{title}:</h4>
      {hideUploader ? (
        <div className="containerFilename">
          <input
            type="text"
            placeholder={placeholder}
            value={fileName}
            readOnly
            className="inputForm inputFilename"
          />
          <button onClick={handleUploader} className="button buttonRemove"
          style={{}}
          >
            <img
              className="tabButtonContainer__deleteButton__deleteIcon"
              src={deleteIcon}
              alt="Quitar fichero"
            />
          </button>
        </div>
      ) : (
        <input
          className="inputForm"
          type="file"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      )}
    </div>
  );
};
