type Props = {
  content: string
}

export function PostBody({content}: Props) {
  // We don't get to choose that __html is named against the convention
  return (
    <div
      className='prose dark:prose-invert
      prose-blockquote:bg-sky-100
      dark:prose-blockquote:bg-sky-950
      prose-blockquote:border-l-sky-200
      dark:prose-blockquote:border-l-sky-700
      prose-h1:font-bold prose-h1:text-xl
    prose-a:text-blue-600
      prose-p:text-justify prose-img:rounded-xl
      prose-headings:underline' // eslint-disable-next-line @typescript-eslint/naming-convention
      dangerouslySetInnerHTML={{__html: content}}
    />
  )
}
