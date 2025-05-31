const authStyles = {
    page: {
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      padding: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', sans-serif",
    },
    container: {
      width: '100%',
      maxWidth: 400,
      padding: '40px 30px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: 16,
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)',
      animation: 'fadeIn 0.8s ease-in-out',
    },
    title: {
      fontSize: 28,
      fontWeight: '600',
      color: '#00ffff',
      textAlign: 'center',
      marginBottom: 24,
      textShadow: '0 0 5px #00ffff',
    },
    input: {
        width: '100%',
        padding: '12px 14px',
        marginBottom: 16,
        fontSize: 16,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 8,
        backgroundColor: 'transparent',
        color: 'white',
        outline: 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
    },
    inputFocus: {
      borderColor: '#00ffff',
      boxShadow: '0 0 10px #00ffff',
    },
    button: {
      width: '100%',
      padding: '12px 0',
      fontSize: 16,
      fontWeight: '600',
      color: '#0d0d0d',
      backgroundColor: '#00ffff',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.3s',
    },
    buttonHover: {
      transform: 'scale(1.03)',
      boxShadow: '0 0 12px #00ffff',
    },
    message: {
      marginTop: 12,
      fontSize: 14,
      textAlign: 'center',
    },
    success: {
      color: '#00ffae',
    },
    error: {
      color: '#ff4d4f',
    },
  };
  
  export default authStyles;
  