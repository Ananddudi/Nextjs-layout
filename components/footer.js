function Footer() {
  return (
    <section
      style={{
        marginTop: "-10%",
        width: "1400px",
        height: "179px",
        backgroundImage: `url(${"/footer.png"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-5 pt-3 w-100 d-flex justify-content-around align-items-center">
        <img src="./worker.png" alt="worker" width="20%" />
        <img src="./safeguard.png" alt="worker" width="20%" />
        <img src="./support.png" alt="worker" width="20%" />
      </div>
    </section>
  );
}
export default Footer;
