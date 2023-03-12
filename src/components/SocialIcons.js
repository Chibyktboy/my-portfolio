const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Chibyktboy">
        <i className="fa-brands fa-github" aria-hidden="true" title="Ezechindu Chibuike' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/chibuike-ezechindu-445a38175/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Ezechindu Chibuike' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/buikem_dmw/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Ezechindu Chibuike' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/Chibykke">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Ezechindu Chibuike' Twitter Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href=" https://wa.me/08164598818">
        <i className="fa-brands fa-whatsapp" aria-hidden="true" title="Ezechindu Chibuike' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
