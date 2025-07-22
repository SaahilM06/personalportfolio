interface ChatResponse {
  content: string;
}

const PORTFOLIO_DATA = {
  projects: {
    'poker ai bot': {
      name: 'Poker AI Bot',
      description: 'Texas Hold\'em AI leveraging game theory and CFR algorithms',
      details: `Architected a Texas Hold'em AI leveraging game theory to approximate Nash equilibrium strategies.

Key features:
• Counterfactual Regret Minimization (CFR) for solving imperfect information games
• Millions of training iterations to minimize exploitability
• Complex betting and card abstraction via clustering equity distributions
• Integration with a custom Python poker engine for dynamic in-game decisions

Technologies used:
• Python
• Machine Learning
• Game Theory (CFR)
• Probabilistic Modeling`,
    },
    'social arbitrage swing trader': {
      name: 'Social Arbitrage Swing Trader',
      description: 'Swing trading algorithm exploiting sentiment-price inefficiencies',
      details: `Conceptualized a swing trading algorithm to exploit sentiment-price inefficiencies.

Key features:
• Consolidated Reddit, Twitter, and news data for anomaly detection
• Fine-tuned BERT-based NLP model for sentiment classification
• Backtested on 6 years of data achieving a 64% win rate and 1.8 Sharpe ratio
• Outperformed SPY by 12% using tailored exit strategies and risk controls

Technologies used:
• Python
• NLP (BERT)
• yFinance API
• Sentiment Analysis`,
    },
    'debate bot': {
      name: 'Debate Bot',
      description: 'AI-powered debate assistant for real-time rebuttals',
      details: `Prototyped an AI debate assistant for real-time rebuttals, tested in 10+ rounds with 90% accuracy.

Key features:
• Real-time audio streaming with WebSockets and Whisper transcription
• Voice responses generated with Coqui TTS
• Web data queried via Brave Search API, indexed with FAISS
• Rebuttals generated through GPT-3.5 prompts

Technologies used:
• WebSockets
• Whisper
• Coqui TTS
• Brave API, FAISS, GPT-3.5`,
    },
  },
  skills: [
    'Frontend Development (React, TypeScript, Modern CSS)',
    'Machine Learning & AI',
    'Natural Language Processing (NLP, BERT)',
    'Python, Java, C++, SQL, JavaScript',
    'Full Stack Web Development (React, FastAPI, Firebase)',
    'Cloud Platforms (AWS Lambda, SageMaker, IoT Core)',
    'Data Analysis (Pandas, NumPy, scikit-learn)',
    'Model Deployment (Docker, WebSockets, MQTT)',
    'Databases (PostgreSQL, MongoDB, DynamoDB)',
    'UI/UX Design (Figma)'
  ],
  experience: [
    {
      role: 'Machine Learning Research Intern',
      company: 'Texas Instruments',
      period: 'May 2025 – Aug 2025',
      description: 'Led development of an edge-cloud fall-detection system leveraging mmWave sensors and AWS services.',
      highlights: [
        'Achieved >98% reduction in power consumption',
        'Built MQTT pipeline into AWS IoT Core, Lambda, and SageMaker',
        'Developed PointNet++ classifier processing 100+ events/sec'
      ]
    },
    {
      role: 'Software Engineer Intern',
      company: 'Suits',
      period: 'Aug 2024 – May 2025',
      description: 'Focused on AI-integrated backend systems and prediction engines.',
      highlights: [
        'Boosted chatbot accuracy 40% with LangChain and Hugging Face Transformers',
        'Designed payment behavior predictor on 15,000+ transactions achieving 94.6% accuracy'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Texas Convergent',
      period: 'Aug 2024 – Present',
      description: 'Startup-focused development translating business needs into technical solutions.',
      highlights: [
        'Launched MVP with React and Firebase backends',
        'Delivered apps with 5,000+ downloads across Apple and Google Play Stores',
        'Led investor demo initiatives with live product showcases'
      ]
    }
  ]
};

const generateResponse = (message: string): ChatResponse => {
  const lowerMessage = message.toLowerCase();
  
  // Check for specific experience queries
  for (const exp of PORTFOLIO_DATA.experience) {
    const roleMatch = lowerMessage.includes(exp.role.toLowerCase());
    const companyMatch = lowerMessage.includes(exp.company.toLowerCase());
    
    if (roleMatch || companyMatch) {
      return {
        content: `${exp.role} - ${exp.company} (${exp.period})\n${exp.description}\n\nKey achievements:\n${exp.highlights.map(h => '• ' + h).join('\n')}`
      };
    }
  }

  // Check for specific project queries
  for (const [key, project] of Object.entries(PORTFOLIO_DATA.projects)) {
    if (lowerMessage.includes(key) || lowerMessage.includes(project.name.toLowerCase())) {
      return {
        content: project.details
      };
    }
  }

  // Experience overview
  if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('work history')) {
    const overview = PORTFOLIO_DATA.experience
      .map(exp => `• ${exp.role} at ${exp.company} (${exp.period})`)
      .join('\n');

    return {
      content: `Here's an overview of Saahil's professional experience:\n\n${overview}\n\nWould you like to know more about any specific role? Just ask about it!`
    };
  }

  // Project overview
  if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
    const overview = Object.values(PORTFOLIO_DATA.projects)
      .map(project => `• ${project.name}: ${project.description}`)
      .join('\n');

    return {
      content: `Here's an overview of Saahil's key projects:\n\n${overview}\n\nWould you like to learn more about any specific project? Just ask about it!`
    };
  }

  // Skills overview
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
    return {
      content: `Saahil's technical expertise includes:\n\n${PORTFOLIO_DATA.skills.map(skill => '• ' + skill).join('\n')}\n\nWould you like to know more about any specific skill area?`
    };
  }

  // AI/ML specific queries
  if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
    return {
      content: `Here's an overview of Saahil's AI/ML experience:\n\nProjects:\n• Poker AI Bot: Game theory-based AI for Texas Hold'em\n• Social Arbitrage Trader: ML-powered trading algorithm\n• Debate Bot: Real-time AI debate assistant\n\nRelevant Experience:\n• Machine Learning Research Intern at Texas Instruments\n• AI Systems Development at Suits\n\nWould you like to know more about any specific AI project or role?`
    };
  }

  // Contact-related queries
  if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
    return {
      content: `You can reach Saahil through:

• Email: saahilm30@gmail.com
• LinkedIn: linkedin.com/in/saahil-mehta-5431a525b
• GitHub: github.com/SaahilM06

Feel free to connect!`
    };
  }

  // Navigation help
  if (lowerMessage.includes('find') || lowerMessage.includes('where') || lowerMessage.includes('how to')) {
    return {
      content: `The portfolio is organized into several sections:

• Experience: Professional roles at Texas Instruments, Suits, and Texas Convergent
• Projects: Innovative technical work (Poker AI Bot, Social Arbitrage Trader, Debate Bot)
• Skills: Comprehensive technical expertise
• Contact: Ways to get in touch

What would you like to find?`
    };
  }

  // Default response
  return {
    content: `I can help you learn about Saahil's:

• Experience (Texas Instruments, Suits, Texas Convergent)
• Projects (Poker AI Bot, Social Arbitrage Trader, Debate Bot)
• Technical expertise and skills
• Contact information

What would you like to know? Ask for an overview or specific details about any area!`
  };
};

export const chatService = {
  generateResponse,
}; 