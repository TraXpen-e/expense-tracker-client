export interface PropType {
  color?: string
  center?: boolean
  marginTopBtm?: boolean
}


export interface IHeaderProps {
  roundedHeaderButton?: boolean,
  logoLink?: React.ReactComponentElement<any>,
  links?: Array<React.ReactComponentElement<any>>,
  className?: string,
  collapseBreakpointClass?: string
}