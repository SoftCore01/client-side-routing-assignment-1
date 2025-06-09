type TopicProp = {
    text: string
}

export default function Topic({text}: TopicProp) {
    return (
        <div className="topic">
            <small className="search-small">{text}</small>
        </div>
    )
}