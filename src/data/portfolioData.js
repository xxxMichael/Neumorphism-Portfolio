export const portfolioData = {
  personal: {
    name: 'Priti Jadhav',
    title: 'Machine Learning Engineer',
    subtitle: 'AI & ML Specialist',
    description: 'A highly motivated student studying Artificial Intelligence and Machine Learning. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.',
    email: 'priti.jadhav@ejemplo.com',
    phone: '+1 234 567 8900',
    location: 'Mumbai, India',
    avatar: 'https://i.ibb.co/9GVzVN1/programmer-illustration.png',
    resume: '/path/to/your/resume.pdf'
  },
  
  skills: {
    technical: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'Machine Learning', level: 85, icon: '🤖' },
      { name: 'TensorFlow', level: 80, icon: '🧠' },
      { name: 'Data Science', level: 85, icon: '📊' },
      { name: 'Deep Learning', level: 75, icon: '🔬' }
    ],
    tools: [
      { name: 'Jupyter', level: 90, icon: '📓' },
      { name: 'Git', level: 85, icon: '📝' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'AWS', level: 65, icon: '☁️' }
    ]
  },

  projects: [
    {
      id: 1,
      title: 'AI-Powered Recommendation System',
      description: 'Sistema de recomendaciones usando machine learning para e-commerce',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      githubUrl: 'https://github.com/priti-jadhav/ml-recommendations',
      liveUrl: 'https://ml-recommendations-demo.com',
      featured: true
    }
  ]
};