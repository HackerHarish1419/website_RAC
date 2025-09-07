import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram } from 'react-icons/fi';

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  imageClassName?: string;
}

const TeamMemberCard = ({ name, title, image, linkedin, instagram, imageClassName = '' }: TeamMemberCardProps) => {
  return (
    <motion.div
      className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300 ${imageClassName}`}
        />
        
        {/* Social Media Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {linkedin && (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            )}
            {instagram && (
              <motion.a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-text-dark mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard; 