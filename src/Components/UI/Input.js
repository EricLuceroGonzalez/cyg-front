import { useEffect, useRef } from 'react';

const Input = (props) => {
    const {
        id,
        name='',
        wrapperClassName = '',
        placeholder = '',
        label = '',
        type = 'text',
        error = false,
        errorText = '',
        required = false,
        ...rest
    } = props;

    const inputRef = useRef();
// useEffect(
//     ()=>{
//         console.log('Here');
//         console.log(props);
//     },[]
// )
    return (
        <div className={wrapperClassName}>
            <div
                className={`transition-colors duration-150 ease-out hover:ease-in${
                    error
                        ? 'focus-within:border-red border-red-600'
                        : 'focus-within:border-primary'
                }`}
                onClick={() => inputRef.current.focus()}
            >
                <label
                    htmlFor={id}
                    className='text-xs text-primary font-light placeholder-red px-2 pt-1.5 hover:text-indigo-500 hover:text-bold'
                >
                    {label} {required && <span className='text-red-400'>*</span>}
                </label>
                <input
                    ref={inputRef}
                    type={type}
                    name={name}
                    className='w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md hover:text-indigo-600 focus:outline-none focus:ring'
                    id={id}
                    placeholder={placeholder}
                    {...rest}
                />
            </div>
            {errorText && (
                <p className='text-xs pl-2 mb-4 text-red-300'>{errorText}</p>
            )}
        </div>
    );
};

export default Input;