import React from 'react';

const Field = ({name, label, value, onChange, placeholder ="", type="text", error="" }) => {
    if (type === "textarea") {
        return (
            <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea
                className={"form-control" + (error && " is-invalid")}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <p className="invalid-feedback">{error}</p>}
        </div>
        );
    }
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                className={"form-control" + (error && " is-invalid")}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <p className="invalid-feedback">{error}</p>}
        </div>
     );
}
 
export default Field;