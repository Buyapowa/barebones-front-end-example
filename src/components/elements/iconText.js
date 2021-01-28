import IconBox from './iconBox'

const IconText = (props) => {
  return (
    <div className="flexW flexC">
      <IconBox icon={props.icon} />
      <div className="filler">{props.text}</div>
    </div>
  )
}

export default IconText;