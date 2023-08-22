import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

interface BaseLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  label: string
}

const BaseLabel: FC<BaseLabelProps> = ({ className, label, ...props}) => {
  return (
    <label className={twMerge("text-slate-600 text-sm", className)} {...props} >{label}</label>
  )
}

export default BaseLabel