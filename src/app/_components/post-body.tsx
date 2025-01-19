type Props = {
  content: string
}

export function PostBody({content}: Props) {
  return (
    <div
      className='prose dark:prose-invert
      prose-blockquote:rounded-md
      prose-blockquote:bg-sky-100
      prose-blockquote:py-1.5
      prose-blockquote:mb-5
      [&>*]:prose-blockquote:my-0
      dark:prose-blockquote:bg-sky-950
      prose-blockquote:border-l-sky-200
      dark:prose-blockquote:border-l-sky-700
      prose-p:text-justify
      prose-hr:py-1 prose-hr:my-2
      prose-img:rounded-xl
      prose-h1:text-3xl
      prose-h2:text-2xl
      prose-h3:text-xl
      prose-h4:text-lg
      prose-inline-code:bg-gray-100
      dark:prose-inline-code:bg-gray-800
      prose-pre:border-l-4
      prose-pre:border-l-gray-300
      prose-pre:bg-gray-100
      prose-pre:text-gray-700
      dark:prose-pre:border-l-gray-700
      dark:prose-pre:text-gray-200
      dark:prose-pre:bg-gray-600
      prose-a:decoration-gray-300
      hover:prose-a:decoration-gray-700
      dark:prose-a:decoration-gray-700
      dark:hover:prose-a:decoration-gray-300
      '
      // We don't get to choose that __html is named against the convention
      // eslint-disable-next-line @typescript-eslint/naming-convention
      dangerouslySetInnerHTML={{__html: content}}
    />
  )
}
