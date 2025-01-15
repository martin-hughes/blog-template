import Container from '@/app/_components/container'

type Props = {
  isMainPage: boolean
}

export function Footer({isMainPage}: Props) {
  const classes = 'py-5 flex flex-col lg:flex-row items-center' + (isMainPage ? '' : ' mx-auto max-w-5xl')
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800'>
      <Container>
        <div className={classes}>
          <p className='text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
            Some exciting footer text
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
