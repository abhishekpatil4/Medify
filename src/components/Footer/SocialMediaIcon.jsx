const SocialMediaIcon = ({ icon }) => {
    return <div style={{ borderRadius: "100%", backgroundColor: 'white', height: '35px', width: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={icon} alt="" height={"16px"} />
    </div>
}

export default SocialMediaIcon;