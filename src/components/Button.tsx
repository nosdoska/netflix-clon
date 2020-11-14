import classnames from 'classnames'

export default function Button({
    children,
    ...props
}: React.PropsWithChildren<{ className?: string }>): React.ReactElement {
    const className = classnames(
        'px-4 py-2 mx-auto text-lg text-white rounded shadow bg-primary focus:outline-none',
        props.className
    )

    return <button className={className}>{children}</button>
}
