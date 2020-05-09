export default ({ emoji, href }) => {
    const text = href.substring(0, href.indexOf("."))
    return (
        <a
            key={text}
            rel="noopener noreferrer"
            target="_blank"
            href={`//${href}`}
        >
            {emoji} ./{text}
        </a>
    )
}
