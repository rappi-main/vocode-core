import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiGlobe, FiCode, FiGithub, FiTwitter, FiSlack } from 'react-icons/fi';
import { FaRobot, FaHeadset, FaServer } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import CTAButton from './components/CTAButton';
import CodeBlock from './components/CodeBlock';

const App = () => {
  const features = [
    {
      icon: <FiPhone className="text-primary-500 text-3xl" />,
      title: "Phone Call Integration",
      description: "Deploy AI to answer and make phone calls via our API and SDKs."
    },
    {
      icon: <FiGlobe className="text-primary-500 text-3xl" />,
      title: "Web Integration",
      description: "Add voice conversations to your web applications with our React SDK."
    },
    {
      icon: <FaRobot className="text-primary-500 text-3xl" />,
      title: "Custom Agents",
      description: "Create your own AI agents with custom behaviors and personalities."
    },
    {
      icon: <FaHeadset className="text-primary-500 text-3xl" />,
      title: "Real-time Streaming",
      description: "Enjoy natural conversations with real-time audio streaming."
    },
    {
      icon: <FiCode className="text-primary-500 text-3xl" />,
      title: "Developer Friendly",
      description: "Easy-to-use APIs and comprehensive documentation for quick integration."
    },
    {
      icon: <FaServer className="text-primary-500 text-3xl" />,
      title: "Scalable Infrastructure",
      description: "Built to handle high volumes of concurrent conversations."
    }
  ];

  const codeExample = `import { useConversation } from "vocode";

const { status, start, stop } = useConversation({
  backendUrl: "wss://api.vocode.dev/conversation",
  audioDeviceConfig: {},
});

// Start a voice conversation with a single click
<button onClick={status === "connected" ? stop : start}>
  {status === "connected" ? "Stop" : "Start"} Conversation
</button>`;

  const handleGetStarted = () => {
    window.location.href = "https://docs.vocode.dev/open-source";
  };

  const handleViewDocs = () => {
    window.location.href = "https://docs.vocode.dev";
  };

  const handleGetApiKey = () => {
    window.location.href = "https://app.vocode.dev";
  };

  const handleGitHub = () => {
    window.open("https://github.com/vocodedev/vocode-python", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Build <span className="gradient-text">voice-based LLM apps</span> in minutes
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Vocode is an open source library that makes it easy to build voice-based LLM applications. 
              Create real-time streaming conversations with LLMs and deploy them to phone calls, Zoom meetings, and more.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CTAButton primary onClick={handleGetStarted}>Get Started</CTAButton>
              <CTAButton onClick={handleViewDocs}>View Documentation</CTAButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build voice-based AI applications that feel natural and responsive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20" id="docs">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Integration</h2>
              <p className="text-xl text-gray-600 mb-6">
                Add voice conversations to your application with just a few lines of code. 
                Our React SDK makes it easy to get started.
              </p>
              <p className="text-gray-600 mb-8">
                Vocode handles all the complexities of real-time audio streaming, 
                speech recognition, and speech synthesis, so you can focus on building your application.
              </p>
              <CTAButton primary onClick={handleViewDocs}>View Documentation</CTAButton>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CodeBlock code={codeExample} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vocode integrates with the best speech-to-text, text-to-speech, and LLM providers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {['OpenAI', 'Anthropic', 'ElevenLabs', 'Deepgram', 'Azure', 'Google Cloud'].map((provider, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-4 shadow-md flex items-center justify-center h-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-gray-800">{provider}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of developers building the future of voice-based AI applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton white onClick={handleGetApiKey}>Get API Key</CTAButton>
            <CTAButton white outline onClick={handleGitHub}>
              <FiGithub className="mr-2" />
              Star on GitHub
            </CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;