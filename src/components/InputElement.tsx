type InputElementProps = {
    element: 'input' | 'textarea'
    type: string
    holder: string
    label: string
    name: string
    onChange: (e: any) => void
    value: string
}

const InputElement = ({ element, type, holder, label, onChange, name, value }: InputElementProps) => {
    const elem = element === 'input' ? (<input type={type} value={value} placeholder={holder} onChange={onChange} id={name} />) : (<textarea value={value} placeholder={holder} onChange={onChange} id={name} rows={3}></textarea>)

    return (
        <div>
            <label htmlFor={name} style={{ display: 'block', marginBottom: '.2rem', fontSize: '.8em' }}>{label}</label>
            {elem}
        </div>
    )
}

export default InputElement