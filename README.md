# phoebe-coach
Phoebe — AI Career Coach 🎯

Your free, personalized AI career coach built for Indian students and professionals.

Live Site → phoebecoach.vercel.app

What is Phoebe?
Phoebe is a web app that helps you build a clear, structured roadmap toward your dream career. Whether you want to become an IAS Officer, Data Analyst, Full Stack Developer, Doctor, or anything else — Phoebe creates a personalized day-by-day plan and holds you accountable through daily proof submissions and AI-powered quizzes.

Features

🗺️ AI Roadmap Generator — Enter your goal, get a structured 180-day roadmap instantly
✅ Daily Proof System — Submit what you studied each day
🧠 AI Quiz Verification — Groq AI generates a quiz based on your proof to verify learning
🔥 Streak Tracker — Track your consistency with streaks and XP
📋 Custom Plan Builder — Build your own phases and tasks with deadlines
🔐 Secure Auth — Real authentication powered by Supabase
📱 Mobile Friendly — Works on all devices


Tech Stack
LayerTechnologyFrontendHTML, CSS, Vanilla JavaScriptBackend APIVercel Serverless FunctionsAI ModelGroq API (LLaMA 3.3 70B)AuthenticationSupabase AuthDatabaseSupabase PostgreSQLHostingVercel

How It Works

Sign up with your email
Set your goal — e.g. "Become a Data Analyst"
Get your roadmap — AI generates a 180-day structured plan
Submit daily proof — Write what you studied today
Pass the quiz — AI verifies your learning with a relevant question
Track progress — Watch your streak grow and XP increase


Local Development
bash# Clone the repo
git clone https://github.com/AshutoshPuriGoswami/phoebe-coach.git
cd phoebe-coach

# Add environment variables
# Create a .env file with:
GROQ_API_KEY=your_groq_api_key

# Deploy on Vercel or run locally
vercel dev

Environment Variables
VariableDescriptionGROQ_API_KEYYour Groq API key from console.groq.com

Roadmap

 Mobile app (React Native)
 Community leaderboard
 Mentor connect feature
 WhatsApp daily reminders
 Offline mode


Contributing
Pull requests are welcome! If you find a bug or have a feature idea, open an issue.

License
MIT License — free to use and modify.

Built with ❤️ for Indian students by Ashutosh Puri Goswami
