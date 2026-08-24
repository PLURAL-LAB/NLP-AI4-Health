"use client";
import React from "react";


const schedule = [
  {
    time: "8:00 A.M. - 9:00 A.M.",
    session: "Registration",
    speaker: "Overall Chair: Hannah Thomas",
  },
  {
    time: "9:00 A.M. - 9:10 A.M.",
    session: "Workshop Introduction",
    speaker: "Parameshwari Krishnamurthy",
  },
  {
    time: "9:10 A.M. - 9:40 A.M.",
    session: "Opening Address",
    speaker: "Balukrishna S",
  },
  {
    time: "9:40 A.M. - 10:30 A.M.",
    session: "Keynote Talk",
    speaker: "Tanmoy Chakraborty, IIT Delhi; Chair: Asif Ekbal",
  },
  {
    time: "10:30 A.M. - 11:00 A.M.",
    session: "Coffee Break",
    speaker: "—",
  },

  /* -------- Workshop Papers : Session 1 -------- */
  {
    time: "11:00 A.M. - 11:45 A.M.",
    session: "Workshop Paper Presentations (Session 1)",
    speaker: "Session Chair: Sobha L (AU-KBC Research Centre)",
    italic: true,
    papers: [
      {
        title: "MOD-KG: MultiOrgan Diagnostic Knowledge Graph",
        presenter: "Anas Anwarul Haq Khan",
      },
      {
        title:
          "Cross-Lingual Mental Health Ontologies for Indian Languages",
        presenter: "Sunaina Singh",
      },
       {
        title:
          "Automated Coding of Counsellor and Client Behaviours in Motivational Interviewing Transcripts",
        presenter: "Soliman Ali",
      }    
    ],
  },

  {
    time: "11:50 A.M. - 12:45 P.M.",
    session: "Panel Discussion",
    sessionSubtitle: "Overcoming Language Barriers in HealthCare",
    speaker:
      "Dipti M Sharma, Joy Mammen, Parag Rindani, Balukrishna S, Surabhi Goel",
    speakerExtra: "Moderator: Hannah Thomas",
  },

  {
    time: "12:45 P.M. - 2:00 P.M.",
    session: "Lunch",
    speaker: "—",
  },

  {
    time: "2:00 P.M. - 2:40 P.M.",
    session: "Keynote Talk",
    speaker: "Dr. Parag R. Rindani, Wockhardt Hospitals, Chair : Joy Mammen",
  },

  /* -------- Workshop Papers : Session 2 -------- */
  {
    time: "2:40 P.M. - 2:50 P.M.",
    session: "Shared Task Overview",
    speaker: "Vandan Mujadia",
  },

  {
    time: "2:50 P.M. - 3:20 P.M.",
    session: "Shared Task Paper & Poster Booster",
    speaker: "Session Moderator: Priyanka Dasari",
    italic: true,
    papers: [
      {
        title:
          "NLP4Health: Multilingual Clinical Dialogue Summarization and QA with mT5 and LoRA",
        presenter: "Moutushi Roy",
      },
      {
        title:
          "Multilingual Clinical Dialogue Summarization and Information Extraction with Qwen-1.5B LoRA",
        presenter: "Kunwar Zaid",
      },
      {
        title:
          "Patient-Centric Multilingual QA and Summary Generation for Head and Neck Cancer and Blood Donation",
        presenter: "Saloni Chitte",
      },
      {
        title:
          "MedQwen-PE: Parameter-Efficient Multilingual Patient-Centric Medical QA and Summarization",
        presenter: "Vinay Babu Ulli",
      },
      {
        title: "SAHA: Samvad AI for Healthcare Assistance",
        presenter: "Aditya Kumar / Team",
      },
    ],
  },
  {
    time: "3:25 P.M. - 3:30 P.M.",
    session: "Concluding Remarks",
    speaker: "Dipti M Sharma",
  },

  {
    time: "3:30 P.M. - 4:00 P.M.",
    session: "Coffee Break",
    speaker: "—",
  },

  /* -------- Shared Task -------- */


];


const WorkshopSchedule = () => {
  return (
    <section
      className="relative bg-[#F8F6F1] py-12 xl:py-16"
      id="workshop-schedule"
    >
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-raleway mb-10 xl:mb-14 text-center text-gray-900">
          Workshop Schedule{" "}
          <span className="text-gray-500 text-2xl md:text-3xl">
            (Tentative)
          </span>
        </h2>

        <div className="max-w-7xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-4 px-6 py-4 border-b-2 border-gray-400">
            <div className="font-bold text-lg md:text-xl text-gray-900">
              Time
            </div>
            <div className="font-bold text-lg md:text-xl text-gray-900">
              Session
            </div>
            <div className="font-bold text-lg md:text-xl text-gray-900">
              Speaker / Moderator
            </div>
          </div>

          {/* Table Rows */}
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-4 px-6 py-5 border-b border-gray-300"
            >
              {/* Time */}
              <div className="text-base md:text-lg text-gray-700 font-medium">
                {item.time}
              </div>

              {/* Session */}
              <div className="text-base md:text-lg text-gray-800">
                <div className="font-medium">{item.session}</div>

                {item.sessionSubtitle && (
                  <div className="text-sm md:text-base italic text-gray-600 mt-1">
                    {item.sessionSubtitle}
                  </div>
                )}

                {/* Papers list */}
                {item.papers && item.papers.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm md:text-base text-gray-700 list-disc list-inside">
                    {item.papers.map((paper, pIdx) => (
                      <li key={pIdx}>
                        <span className="font-medium">
                          {paper.title}
                        </span>
                        {paper.presenter && (
                          <span className="text-gray-600">
                            {" "}
                            — {paper.presenter}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Speaker / Moderator */}
              <div
                className={`text-base md:text-lg text-gray-700 ${
                  item.italic ? "italic text-gray-600" : ""
                }`}
              >
                <div>{item.speaker}</div>
                {item.speakerExtra && (
                  <div className="mt-1">{item.speakerExtra}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default WorkshopSchedule;
