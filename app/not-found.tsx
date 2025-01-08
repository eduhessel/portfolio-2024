import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  const styles = {
    container: {
      backgroundColor: "#000000",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: "36px",
      marginBottom: "20px",
    },
    text: {
      fontSize: "18px",
      marginBottom: "20px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
    },
    box: {
      backgroundColor: "#333333",
      padding: "15px 20px",
      borderRadius: "5px",
      marginTop: "30px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🚫</h1>
      <h1 style={styles.header}>404 - Página não encontrada</h1>
      <p style={styles.text}>
        Desculpe, a página que você está procurando não existe.
      </p>
      <div style={styles.box}>
        <Link href="/" style={styles.link}>
          Clique aqui para recarregar a página
        </Link>
      </div>
    </div>
  );
}
