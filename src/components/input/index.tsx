import { RegisterOptions, UseFormRegister } from "react-hook-form"
import { } from "../../assets/css/index.css"
interface InputProps {
    type: string
    placeholder: string
    name: string
    register: UseFormRegister<any>
    error?: string
    rules?: RegisterOptions
    className?: string
    value?: string
    defaultValue?: string
    autoComplete?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface TxtareaProps {

    placeholder: string
    name: string
    register: UseFormRegister<any>
    error?: string
    rules?: RegisterOptions
    className?: string
    value?: string
    defaultValue?: string
    autoComplete?: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Input({ autoComplete, defaultValue, className, value, name, placeholder, type, register, rules, error, onChange }: InputProps) {
    return (
        <div>
            <input
                autoComplete={autoComplete}
                className={className}
                placeholder={placeholder}
                type={type}
                value={value}
                defaultValue={defaultValue}
                {...register(name, rules)}
                onChange={onChange}
                id={name}
            />
            {error && <p className="erro">{error}</p>}
        </div>
    )
}
export function TxtArea({ autoComplete, defaultValue, className, value, name, placeholder, register, rules, error, onChange }: TxtareaProps) {
    return (
        <div>
            <textarea
                autoComplete={autoComplete}
                className={className}
                placeholder={placeholder}

                value={value}
                defaultValue={defaultValue}
                {...register(name, rules)}
                onChange={onChange}
                id={name}
            />
            {error && <p className="erro">{error}</p>}
        </div>
    )
}