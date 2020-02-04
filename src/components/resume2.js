export default {
  Profile: {
    summary:
      'Full Stack Developer with a passion for front-end web development and design. Programming is one of the ways to express my creativity and I look forward to being able to hone my skills in a collaborative and dynamic environment.'
  },

  SocialMedias: [
    'https://github.com/nikkisato',
    'https://www.linkedin.com/nikkisato',
    'https://www.facebook.com/'
  ],
  contact: [
    {
      name: 'Nikki sato',
      email: 'Nikki.satopdx@gmail.com',
      website: 'www.nikkisato.com',
      Phone: '(503)-858-7070'
    }
  ],
  Experiences: [
    {
      companyName: 'Phototainment',

      url: 'https://www.phototainment.com/',
      roles: [
        {
          title: 'Photographer',
          description: 'Booth Photographer',
          startDate: '2018',
          endDate: 'Present',
          location: 'Portland, Oregon'
        }
      ]
    },
    {
      companyName: 'Portland State University',

      url: 'https://www.pdx.edu/',
      roles: [
        {
          title: 'Helpdesk and Desktop Service Tech',
          description: 'Helped users',
          startDate: '2015',
          endDate: '2018',
          location: 'Portland, Oregon'
        }
      ]
    }
  ],
  Skills: [
    {
      Area: 'Tech Stack',
      SkillSet: [
        {
          Name: 'MongoDb',
          Hot: true
        },
        {
          Name: 'Node.js',
          Hot: false
        },
        {
          Name: 'Express',
          Hot: false
        },
        {
          Name: 'PostgreSQL/SQL',
          Hot: false
        },
        {
          Name: 'Q-Unit',
          Hot: false
        },
        {
          Name: 'Jest/Travis',
          Hot: false
        }
      ]
    },
    {
      Area: 'Web-Based Application Development',
      SkillSet: [
        {
          Name: 'JavaScript (ES5, ES6)',
          Hot: true
        },
        {
          Name: 'TypeScript',
          Hot: false
        },
        {
          Name: 'HTML5',
          Hot: true
        },
        {
          Name: 'CSS (SCSS/SASS)',
          Hot: true
        },
        {
          Name: 'React/Redux',
          Hot: true
        }
      ]
    }
  ],
  Education: [
    {
      school: 'Portland state University',
      description: [
        {
          description:
            'BA Advertising and Marketing, Minor in Photography and Design Management',
          startDate: '2015',
          endDate: '2019',
          location: 'Portland, Oregon'
        }
      ]
    },
    {
      school: 'Alchemy Code Lab',
      description: [
        {
          description: 'Full Stack Developer',
          startDate: '2019',
          endDate: '2020',
          location: 'Portland, Oregon'
        }
      ]
    }
  ],

  Projects: [
    {
      title: 'CovrLettr',
      tech: 'Express, MongoDB, Node.js, Javascript',
      description:
        'Writing Cover Letters for people who are entering the software developer field. The program will ask a series of questions, take in user input, and output a customized cover letter. Currently a Backend Project for the moment.'
    },
    {
      title: 'Nag Me',
      tech: 'PostgresSQL, Express, Node.js, Javascript',
      description:
        'NagMe is the super proactive task and reminder app, that uses Pushover (push notifications) to send notifications to your phone. Users can add, update, delete Nags'
    },
    {
      title: 'Guess Who',
      tech: 'Vanilla Javascript, HTML/CSS',
      description:
        'The classic Guess Who board game is now online. Used a different set of characters (aliens) to make a different experience of the game. Used local storage to persist user data and leaderboards.'
    }
  ]
};
