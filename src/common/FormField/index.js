import React from 'react'

export default ({input, label, type, required, meta: { error, touched }}) => {
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input className="form-control" {...input} type={type} required={required} />
            { error && touched && (
            <div className="mt-2 text-danger title">{error}</div>
            ) }
        </div>
    )
}