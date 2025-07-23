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
    languages: [
      { name: 'Python', level: 95, icon: '🐍' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'R', level: 80, icon: '📊' },
      { name: 'SQL', level: 90, icon: '🗄️' },
      { name: 'Java', level: 75, icon: '☕' }
    ],
    frameworks: [
      { name: 'TensorFlow', level: 90, icon: '🧠' },
      { name: 'PyTorch', level: 85, icon: '🔥' },
      { name: 'Scikit-learn', level: 95, icon: '⚙️' },
      { name: 'Pandas', level: 90, icon: '🐼' },
      { name: 'NumPy', level: 95, icon: '�' }
    ],
    tools: [
      { name: 'Jupyter', level: 95, icon: '📓' },
      { name: 'Git', level: 90, icon: '📝' },
      { name: 'Docker', level: 75, icon: '🐳' },
      { name: 'AWS', level: 70, icon: '☁️' },
      { name: 'Google Colab', level: 90, icon: '🔬' }
    ]
  },

  projects: [
    {
      id: 1,
      title: 'Content Analyzer',
      description: 'A robust tool designed for content creators, bloggers, and writers',
      image: 'https://i.ibb.co/Km8Bg8X/brain-ai-project.png',
      technologies: ['Python', 'NLP', 'TensorFlow', 'Flask'],
      githubUrl: 'https://github.com/priti-jadhav/content-analyzer',
      liveUrl: 'https://content-analyzer-demo.com',
      featured: true,
      category: 'Python'
    },
    {
      id: 2,
      title: 'Neural Network Classifier',
      description: 'Deep learning model for image classification',
      image: 'https://i.ibb.co/dBFpXrd/neural-network.png',
      technologies: ['Python', 'PyTorch', 'CNN', 'Computer Vision'],
      githubUrl: 'https://github.com/priti-jadhav/neural-classifier',
      liveUrl: 'https://neural-classifier-demo.com',
      featured: false,
      category: 'Machine Learning'
    },
    {
      id: 3,
      title: 'Sentiment Analysis Tool',
      description: 'NLP model for analyzing sentiment in text data',
      image: 'https://i.ibb.co/ZJ8Kwtd/data-visualization.png',
      technologies: ['Python', 'NLTK', 'Transformers', 'Streamlit'],
      githubUrl: 'https://github.com/priti-jadhav/sentiment-analysis',
      liveUrl: 'https://sentiment-analysis-demo.com',
      featured: false,
      category: 'NLP'
    }
  ],

  experience: [
    {
      id: 1,
      position: 'Technical Content Writer',
      company: 'AI Research Lab',
      period: '2023 - Present',
      description: 'Creating technical documentation and research papers on AI/ML topics. Writing comprehensive guides for machine learning implementations.',
      technologies: ['Python', 'TensorFlow', 'Research', 'Documentation'],
      icon: '🔬'
    },
    {
      id: 2,
      position: 'Content Writer',
      company: 'Tech Blog Platform',
      period: '2022 - 2023',
      description: 'Writing technical articles about artificial intelligence, machine learning algorithms, and data science concepts for a broad audience.',
      technologies: ['Python', 'Data Science', 'Technical Writing', 'SEO'],
      icon: '✍️'
    },
    {
      id: 3,
      position: 'ML Intern',
      company: 'Data Analytics Startup',
      period: '2022',
      description: 'Worked on data preprocessing, model training, and evaluation. Contributed to building recommendation systems and predictive models.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      icon: '🎯'
    }
  ],

  certifications: [
    {
      id: 1,
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University',
      date: '2023',
      image: 'https://i.ibb.co/JkXM3vW/stanford-cert.png',
      credentialId: 'STAN-ML-2023-001'
    },
    {
      id: 2,
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI',
      date: '2023',
      image: 'https://i.ibb.co/8jT3QmR/deeplearning-cert.png',
      credentialId: 'DL-AI-2023-002'
    },
    {
      id: 3,
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2022',
      image: 'https://i.ibb.co/YLtG8vX/tensorflow-cert.png',
      credentialId: 'TF-DEV-2022-003'
    }
  ]
};