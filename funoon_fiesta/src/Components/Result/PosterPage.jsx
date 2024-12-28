import React, { useEffect, useState } from 'react';
import { Trophy, Crown } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import EnhancedPoster from './WinnerPoster';
import { useResults } from '../../../context/DataContext';
import onStage from '../../assets/img/poster.jpeg';
import offStage from '../../assets/img/poster.jpeg';
import img from '../../assets/img/poster.jpeg';
import img1 from '../../assets/img/poster1.jpg';
import img2 from '../../assets/img/poster2.jpg';

const PosterPage = () => {
  const { programName } = useParams();
  const { results } = useResults();
  const [programWinners, setProgramWinners] = useState([]);
  const [programData, setProgramData] = useState({
    category: "",
    stage: "ON STAGE"
  });
  
  const posterBackgrounds = [img, img1, img2];

  useEffect(() => {
    if (results.length > 0 && programName) {
      const programInfo = results.find(
        result => result.programName.toUpperCase() === programName.toUpperCase()
      );

      const formattedResults = results
        .filter(result => result.programName.toUpperCase() === programName.toUpperCase())
        .sort((a, b) => b.points - a.points)
        .slice(0, 3)
        .map((winner, index) => ({
          fields: {
            Place: (index + 1).toString(),
            Name: winner.studentName || "---",
            Team: winner.teamName || "Individual"
          }
        }));

      while (formattedResults.length < 3) {
        formattedResults.push({
          fields: {
            Place: (formattedResults.length + 1).toString(),
            Name: "---",
            Team: "---"
          }
        });
      }

      setProgramWinners(formattedResults);
      setProgramData({
        category: programInfo?.category || "",
        stage: programInfo?.stage || "ON STAGE"
      });
    }
  }, [results, programName]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {programName} Winners
            </h1>
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Celebrating excellence and outstanding achievements in {programName}
          </p>
        </motion.div>

        {/* Winners Overview */}
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-5xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {programWinners.map((winner, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 w-full md:w-auto"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-gray-400' : 'bg-amber-600'}`}>
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-gray-900 dark:text-white font-bold text-lg">
                      {winner.fields.Name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {winner.fields.Team}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Posters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full">
          {posterBackgrounds.map((bg, index) => (
            <div key={index} className="flex justify-center">
              <EnhancedPoster
                programName={programName}
                programCategory={programData.category}
                stage={programData.stage}
                records={programWinners}
                defaultBackground={programData.stage === "OFF STAGE" ? offStage : onStage}
                backgroundImage={bg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PosterPage;
