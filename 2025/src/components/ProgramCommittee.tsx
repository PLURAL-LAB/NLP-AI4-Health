"use client";

const programCommitteeMembers = [
  {
    name: "Miguel Angel Rios Gaoana",
    affiliation: "University of Vienna",
  },
  {
    name: "Vincent Briva Iglesias",
    affiliation:
      "School of Applied Language and Intercultural Studies (SALIS), Dublin City University",
  },
  {
    name: "Sara Vecchiato",
    affiliation: "Università degli Studi di Udine",
  },
  {
    name: "Sneha Mithun",
    affiliation: "Tata Memorial Hospital, Mumbai",
  },
  {
    name: "Ashish Kumar Jha",
    affiliation: "Tata Memorial Hospital, Mumbai",
  },
  {
    name: "Dilip Abraham",
    affiliation: "Christian Medical College, Vellore",
  },
  {
    name: "Sivakumar Balasubramanian",
    affiliation: "Christian Medical College, Vellore",
  },
  {
    name: "Sonish Sivarajkumar",
    affiliation: "School of Computing and Information, University of Pittsburgh",
  },
  {
    name: "Asif Ekbal",
    affiliation: "Department of Computer Science and Engineering, IIT Patna",
  },
  {
    name: "Tathagata Raha",
    affiliation: "M42 Health, Abu Dhabi",
  },
  {
    name: "Ashwath Rao B",
    affiliation: "Manipal Institute of Technology, Manipal",
  },
  {
    name: "Karunesh Arora",
    affiliation: "Centre for Development of Advanced Computing, Pune",
  },
  {
    name: "Dipankar Das",
    affiliation: "Jadavpur University, Kolkata",
  },
];

const studentVolunteers = [
  "Aaryan Kashyap",
  "Amisha",
  "Aryan Patel",
  "Bodana Yuvrajsinh Dilipsinh",
  "Kalava Kolanu Aparna",
  "Priyanka Dasari",
  "Vishnuraj Arjunasamy",
];

const ProgramCommittee = () => {
  return (
    <div
      className="bg-[#F8F6F1] relative py-8 xl:py-12 text-black font-(family-name:--font-roboto)"
      id="program-committee"
    >
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <h2 className="mb-10 text-xl xl:text-3xl font-bold font-(family-name:--font-raleway)">
          Program Committee Members
        </h2>
        <div className="w-full">
          <ul className="list-disc pl-5 space-y-4 text-sm xl:text-xl leading-relaxed">
            {programCommitteeMembers.map((member, idx) => (
              <li key={idx} className="flex items-start list-item">
                <div className="flex-1">
                  <span className="text-base xl:text-lg font-bold">
                    {member.name}
                  </span>
                  <span className="text-sm xl:text-base text-black">
                    , {member.affiliation}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="mt-16 mb-10 text-xl xl:text-3xl font-bold font-(family-name:--font-raleway)">
          Student Volunteers
        </h2>
        <div className="w-full">
          <ul className="list-disc pl-5 space-y-3 text-sm xl:text-xl leading-relaxed">
            {studentVolunteers.map((volunteer, idx) => (
              <li key={idx} className="flex items-start list-item">
                <span className="text-base xl:text-lg">{volunteer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramCommittee;