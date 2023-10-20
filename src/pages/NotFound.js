const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function NotFound() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                No such contacts here, unfortunately!
            </h1>
        </div>
    );
};