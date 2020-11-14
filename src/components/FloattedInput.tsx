import React from 'react'
import classnames from 'classnames'

const FloattedInputContext = React.createContext({ value: '', setValue(value: string) {} })

function FloattedInput({
    children,
    error,
    ...props
}: React.PropsWithChildren<{
    className?: string
    error?: string
}>): React.ReactElement {
    const [value, setValue] = React.useState<string>('')
    const className = classnames('relative', props.className)

    return (
        <FloattedInputContext.Provider value={{ value, setValue }}>
            <div className={className}>
                <div className='relative flex items-center group'>{children}</div>

                {error ? <span className='block mt-1 text-sm text-yellow-700'>{error}</span> : null}
            </div>
        </FloattedInputContext.Provider>
    )
}

FloattedInput.Label = function ({
    children,
    ...props
}: React.PropsWithChildren<
    React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
>): React.ReactElement {
    const { value } = React.useContext(FloattedInputContext)
    const labelClassname = classnames(
        'absolute ml-2 text-gray-500 transition-transform duration-100 ease-in-out transform top-1/2 group-focus-within:text-xs group-focus-within:-translate-y-5 md:group-focus-within:-translate-y-6',
        {
            '-translate-y-1/2 text-sm': value === '',
            '-translate-y-5 text-xs md:-translate-y-6': value !== '',
        }
    )

    return (
        <label className={labelClassname} {...props}>
            {children}
        </label>
    )
}

FloattedInput.Input = function ({
    error,
    className,
    ...props
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    error?: string
}): React.ReactElement {
    const { value, setValue } = React.useContext(FloattedInputContext)

    React.useEffect(() => {
        if (props.value) {
            setValue(props.value as string)
        }
    }, [props.value])

    function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setValue(event.target.value)

        if (props.onChange) {
            props.onChange(event)
        }
    }

    const inputClassname = classnames(
        'block w-full px-2 pt-5 pb-1 focus:outline-none md:h-16',
        {
            'border border-solid border-gray-500 focus:border-blue-600': error === '',
            'border-b-2 border-solid border-yellow-600': error !== undefined && error !== '',
        },
        className
    )

    return <input value={value} onChange={onChange} className={inputClassname} {...props} />
}

export default FloattedInput
