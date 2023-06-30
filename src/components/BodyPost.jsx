import { useId } from "react";

function BodyPost({ data }) {
    let content = data.content?.replace(`@${data.replyingTo}`, '');
    const bodyId = useId();
    return (
        <>
            <blockquote key={bodyId} className='content'>
                <span className='tagname'>{data.replyingTo && `@${data.replyingTo} `}</span>
                {content}
            </blockquote>
        </>
    )
}

export default BodyPost