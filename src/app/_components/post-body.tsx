import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

export function PostBody({content}: Props) {
  // We don't get to choose that __html is named against the convention
  // eslint-disable-next-line @typescript-eslint/naming-convention
  return <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{__html: content}} />
}
