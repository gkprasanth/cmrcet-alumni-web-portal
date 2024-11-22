import React from "react";

const AchievementsPage = () => {
  const achievementsData = [
    {
      id: 1,
      name: "John Doe",
      batch: "2010",
      department: "Computer Science",
      achievements: [
        {
          title: "Founder of TechWave Inc.",
          description:
            "Established a startup specializing in AI-driven healthcare solutions, currently valued at $10M.",
          year: 2020,
          category: "Entrepreneurship",
        },
        {
          title: "Top Innovator Award",
          description:
            "Recognized for outstanding contribution to AI research at the Global Tech Summit.",
          year: 2019,
          category: "Awards",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      batch: "2015",
      department: "Mechanical Engineering",
      achievements: [
        {
          title: "Published Research in Renewable Energy",
          description:
            "Co-authored a paper on innovative solar panel technologies in the Journal of Renewable Energy.",
          year: 2018,
          category: "Research",
        },
        {
          title: "Green Engineer Award",
          description:
            "Awarded for pioneering sustainable engineering solutions in urban development.",
          year: 2021,
          category: "Awards",
        },
      ],
    },
    {
      id: 3,
      name: "Aarav Gupta",
      batch: "2008",
      department: "Civil Engineering",
      achievements: [
        {
          title: "Built Landmark Bridge",
          description:
            "Led the construction of the CityLink Bridge, an architectural marvel connecting two major cities.",
          year: 2015,
          category: "Professional",
        },
        {
          title: "Community Builder Award",
          description:
            "Recognized for efforts in rebuilding housing infrastructure post-natural disasters.",
          year: 2017,
          category: "Community Service",
        },
      ],
    },
    {
      id: 4,
      name: "Emily Carter",
      batch: "2012",
      department: "Biotechnology",
      achievements: [
        {
          title: "Patent for Cancer Detection Kit",
          description:
            "Developed a low-cost, rapid diagnostic kit for early-stage cancer detection.",
          year: 2019,
          category: "Innovation",
        },
        {
          title: "National Biotechnology Award",
          description: "Honored for groundbreaking research in genetic engineering.",
          year: 2020,
          category: "Awards",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Notable Achievements
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {achievementsData.map((person) => (
          <div
            key={person.id}
            className="p-6 bg-white border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {person.name}
              </h2>
              <p className="text-sm text-gray-500">
                Batch: {person.batch} | {person.department}
              </p>
            </div>
            <div className="space-y-4">
              {person.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 border rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-medium text-gray-700">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {achievement.year} | {achievement.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
