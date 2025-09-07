import { useState } from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('core');

  // Sample data - replace with actual team data
  const facultyCoordinator = {
    name: "Dr. Santhanakrishnan M",
    title: "Faculty Coordinator",
    image: "public/core/WhatsApp Image 2025-08-12 at 16.08.17_92f8956d.jpg",
    linkedin: "https://linkedin.com/in/santhanakrishnan",
    instagram: "https://instagram.com/santhanakrishnan"
  };

  const coreLeadership = [
    { name: "RTR. ADHITHYAN M", title: "Associate Community Service Director 25-26", image: "/core/RTR. ADHITHYAN M.jpeg" },
    { name: "RTR. ANITHA S", title: "Associate Club Service Director 25-26", image: "/core/RTR. ANITHA S.jpg" },
    { name: "RTR. ARCHITHA M", title: "Sergeant-At-Arms 25-26", image: "/core/RTR. ARCHITHA M.jpeg" },
    { name: "RTR. BHUVANESWARI S", title: "Associate International Service Director 25-26", image: "/core/RTR. BHUVANESWARI S.jpg" },
    { name: "RTR. GOKULA SARATHY P S", title: "Treasurer 25-26", image: "/core/RTR. GOKULA SARATHY P S.jpg" },
    { name: "RTR. HARISH T", title: "Technical Head 25-26", image: "/core/RTR. HARISH T.png" },
    { name: "RTR. HARSSHITHA KUMARAVEL", title: "International Service Director 25-26", image: "/core/RTR. HARSSHITHA KUMARAVEL.jpeg" },
    { name: "RTR. JAYAPRAKASH", title: "Membership Development Head 25-26", image: "/core/RTR. JAYAPRAKASH.jpg" },
    { name: "RTR. KEERTANA SRIRAM", title: "Editorial Board Head 25-26", image: "/core/RTR. KEERTANA SRIRAM.jpeg" },
    { name: "RTR. KEERTHIVASAN", title: "Photography Head 25-26", image: "/core/RTR. KEERTHIVASAN.png", imageClassName: "rotate-90 object-top scale-110" },
    { name: "RTR. LAKSHANYA RAMESH", title: "Creatives Head 25-26", image: "/core/RTR. LAKSHANYA RAMESH.jpg" },
    { name: "RTR. MUKESH KUMAR K", title: "Associate Membership Development Head 25-26", image: "/core/RTR. MUKESH KUMAR K.jpg" },
    { name: "RTR. NANDHINI M", title: "Vice President 25-26", image: "/core/RTR. NANDHINI M.jpg" },
    { name: "RTR. NETHRA SHREE T D", title: "Joint Secretary 25-26", image: "/core/RTR. NETHRA SHREE T D.jpg" },
    { name: "RTR. PRITVI R", title: "Associate Professional Service Director 25-26", image: "/core/RTR. PRITVI R.jpg" },
    { name: "RTR. RISHAB V", title: "Professional Service Director 25-26", image: "/core/RTR. RISHAB V.jpg" },
    { name: "RTR. SANJIT M", title: "President 25-26", image: "/core/RTR. SANJIT M.jpeg" },
    { name: "RTR. SHARUKH AKTHAR A", title: "Associate Creatives Head 25-26", image: "/core/RTR. SHARUKH AKTHAR A.jpeg" },
    { name: "RTR. SHERIN BANU", title: "Community Service Director 25-26", image: "/core/RTR. SHERIN BANU.jpg" },
    { name: "RTR. SHRINIDHI R", title: "Secretary 25-26", image: "/core/RTR. SHRINIDHI R.jpg" },
    { name: "RTR. SA SIVA SOORYAA", title: "Club Advisor 25-26", image: "/core/RTR. SA SIVA SOORYAA.jpg" },
    { name: "RTR. SIVA SRUTHY VGP", title: "Public Relations Officer 25-26", image: "/core/RTR. SIVA SRUTHY VGP.JPG" },
    { name: "RTR. SIVADHARSHAN M S", title: "Deputy Sergeant-At-Arms 25-26", image: "/core/RTR. SIVADHARSHAN M S .JPG" },
    { name: "RTR. SRIRAM BALAJI", title: "Club Service Director 25-26", image: "/core/RTR. SRIRAM BALAJI.jpg" },
    { name: "RTR. SRISANJANA B", title: "Videography Head 25-26", image: "/core/RTR. SRISANJANA B.jpg" },
  ];

  const boardMembers: { name: string; title: string; image: string; linkedin?: string; instagram?: string }[] = [];

  const currentTeam = activeTab === 'core' ? coreLeadership : boardMembers;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Meet the Changemakers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of leaders and volunteers who work tirelessly to create positive change in our community and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Coordinator */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              Faculty Coordinator
            </h2>
            <p className="text-gray-600">
              Our guiding mentor and advisor
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={facultyCoordinator.image}
                  alt={facultyCoordinator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-2">
                {facultyCoordinator.name}
              </h3>
              <p className="text-lg text-gray-600 mb-4">{facultyCoordinator.title}</p>
              <div className="flex justify-center space-x-4">
                {facultyCoordinator.linkedin && (
                  <a
                    href={facultyCoordinator.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {facultyCoordinator.instagram && (
                  <a
                    href={facultyCoordinator.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600">
              The passionate individuals driving our initiatives forward
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('core')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'core'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-text-dark'
                }`}
              >
                Core Leadership
              </button>
              <button
                onClick={() => setActiveTab('board')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'board'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-text-dark'
                }`}
              >
                Board Members
              </button>
            </div>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage; 