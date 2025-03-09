import { useEffect, useRef } from 'react';
import 'github-calendar/dist/github-calendar-responsive.css';

const GithubPage = () => {
  const calendarRef = useRef(null);


  useEffect(() => {
    const initCalendar = async () => {
      try {
        const GitHubCalendar = (await import('github-calendar')).default;
        
        if (calendarRef.current) {
          calendarRef.current.innerHTML = '';
          
          new GitHubCalendar(calendarRef.current, 'aadityane93', {
            responsive: true,
            tooltips: true,
            global_stats: false, // Disable stats
            theme: 'dark',
            cache: 0,
            proxy: username => {
              return `https://gh-calendar.rscharlie.workers.dev/${username}?nocache=${Date.now()}`
            }
          });
        }
      } catch (error) {
        console.error('GitHub Calendar Error:', error);
      }
    };

    const timer = setTimeout(initCalendar, 500);
    
    return () => {
      clearTimeout(timer);
      if (calendarRef.current) {
        calendarRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div style={{ 
      padding: '40px 20px',
      textAlign: 'center',
      minHeight: '600px',
      backgroundColor: '#0d1117',
      color: '#c9d1d9'
    }}>
      <div>
      
      
       <a href="https://github.com/aadityane93">
       <img style={{height:'auto'}} alt="" src="https://avatars.githubusercontent.com/u/29502306?v=4" width="260" height="260"> 
      </img>
      <br></br>
       <u> Github.com/aadityane93 </u>
       </a>
      </div>
      <div style={{padding: '20px'}}>

      </div>
      <h1 style={{ marginBottom: '2rem' }}>GitHub Contributions</h1>
      <div 
        ref={calendarRef}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          borderRadius: '6px',
          backgroundColor: '#161b22'
        }}
      />
      
      <style jsx global>{`
        /* Remove all text elements */
        .contrib-footer, 
        .contrib-column,
        .float-left,
        .text-muted {
          display: none !important;
        }

        /* No contributions color */
        rect.ContributionCalendar-day[data-level="0"] {
          fill: #30363d !important;
        }

        /* Contribution colors */
        rect.ContributionCalendar-day[data-level="1"] { fill: #0e4429; }
        rect.ContributionCalendar-day[data-level="2"] { fill: #006d32; }
        rect.ContributionCalendar-day[data-level="3"] { fill: #26a641; }
        rect.ContributionCalendar-day[data-level="4"] { fill: #39d353; }

        /* Calendar grid styling */
        .calendar {
          padding: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default GithubPage;