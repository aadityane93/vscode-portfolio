const GithubPage = () => {

  return (
    <>
      <div style={{ 
        padding: '40px 20px',
        textAlign: 'center',
        minHeight: '600px',
        backgroundColor: '#0d1117',
        color: '#c9d1d9'
      }}>
        <div>
          <a href="https://github.com/aadityane93" target="_blank" rel="noopener noreferrer">
            <img 
              style={{ height: 'auto' }} 
              alt="" 
              src="https://avatars.githubusercontent.com/u/29502306?v=4" 
              width="260" 
              height="260" 
            />
            <br />
            <u>Github.com/aadityane93</u>
          </a>
        </div>
        <div style={{ padding: '20px' }}></div>
        <h1 style={{ marginBottom: '2rem' }}>GitHub Contributions</h1>
        <div style={{ marginLeft: '7rem' }}>
          
        <iframe 
          src="https://ghchart.rshah.org/aadityane93" 
          style={{ 
            border: 0, 
            width: '100%',
            height: '400px', 
            maxWidth: '800px'
          }} 
        ></iframe>
        
      </div>
      
      </div>

    </>
  );
};

export default GithubPage;