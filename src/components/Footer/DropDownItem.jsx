import rightIcon from "../../assets/RightIcon.svg"
const DropDownItem = ({ name }) => {
    return <div style={{
        display: 'flex', alignItems: 'center', gap: 15
    }}>
        <img src={rightIcon} alt="" />
        <span style={{ fontWeight: 400, fontSize: '16px', color: 'white', lineHeight: '28px' }}>{name}</span>
    </div>
}

export default DropDownItem;