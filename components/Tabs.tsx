type Props = {
  children: string
}

const Tabs = ({ children }: Props) => {
  return <span className="text-xl">{children}</span>
}

export { Tabs }
