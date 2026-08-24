"use client";
import React from "react";

const sharedTaskTimeline = [
  {
    label: "First Call for Participation (Registration)",
    date: "August 01",
    year: "2025",
  },
  {
    label: "Second Call for Participation (Registration)",
    date: "August 28",
    year: "2025",
    showRegisterButton: true,
  },
  {
    label: "Release of Sample Submission Dataset",
    date: "September 04",
    year: "2025",
  },
  {
    label: "Release of Training Dataset",
    date: "October 03",
    year: "2025",
  },
  {
    label: "Release of Test Dataset",
    date: "October 07",
    year: "2025",
  },
  { label: "System Submission Deadline", date: "October 17", year: "2025" },
  { label: "Result announcement", date: "October 21", year: "2025" },
  {
    label: "Final Papers Submission Deadline",
    date: "October 24",
    year: "2025",
  },
  {
    label: "Notification of acceptance/writing papers for shared task",
    date: "November 03",
    year: "2025",
  },
  { label: "Camera Ready Papers Due", date: "November 11", year: "2025" },
  { label: "Pre-recorded Video Due", date: "November 21", year: "2025" },
  { label: "Workshop Date", date: "December 23", year: "2025" },
];

const SharedTask = () => {
  const handleRegisterClick = () => {
    // Replace this URL with your actual registration link
    const registrationLink =
      "https://docs.google.com/forms/d/e/1FAIpQLScM7VbgF8CCsEPErsgjes7PG9-mCnbQfUt75ZBMiZkTK6WgVQ/viewform?usp=dialog";
    window.open(registrationLink, "_blank");
  };

  const handleDatasetClick = () => {
    const datasetLink =
      "https://www.codabench.org/competitions/10527/?secret_key=64e1ba8a-017b-4c55-ad40-b58bfc3c1f24";
    window.open(datasetLink, "_blank");
  };

  return (
    <section
      className="relative bg-[#F8F6F1] py-8 xl:py-12 text-black overflow-hidden font-(family-name:--font-roboto)"
      id="shared-task"
    >
      <div className="relative z-10 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <h2 className="text-xl xl:text-3xl font-bold font-(family-name:--font-raleway) mb-4">
          Shared Task on Patient-Centric Question Answering
        </h2>
        <p className="text-sm xl:text-xl text-[#0A0A0A] mb-6 font-medium">
          Multilingual Health Question Answering for Head and Neck Cancer and
          Cystic Fibrosis
        </p>

        {/* Task Overview */}
        <div className="mb-8">
          <h3 className="text-lg xl:text-2xl font-bold font-(family-name:--font-raleway) mb-4">
            Task Overview
          </h3>
          <p className="text-sm xl:text-lg mb-4 leading-relaxed">
            This shared task challenges participants to build models that can{" "}
            <strong>generate concise summaries</strong> and{" "}
            <strong>answer patient-centric questions</strong> based on natural,
            multi-turn dialogues related to Head and Neck Cancer (HNC) and
            Cystic Fibrosis. The dialogues are real-world conversations between
            patients and healthcare providers, focusing on providing reliable,
            understandable information to patients and caregivers.
          </p>
        </div>

        {/* Sample Dataset */}
        <div className="mb-8">
          <h3 className="text-lg xl:text-2xl font-bold font-(family-name:--font-raleway) mb-4">
            Sample Dataset
          </h3>
          <div className="bg-gray-50 border-l-4 border-gray-800 p-4 rounded-r-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm xl:text-base text-gray-800 font-medium">
                  <button
                    onClick={handleDatasetClick}
                    className="text-black underline hover:text-gray-600 transition-colors duration-300 cursor-pointer font-medium"
                  >
                    Access the sample dataset and competition platform
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Dataset Short Description Box */}
          <div className="text-xs xl:text-sm text-gray-700 leading-relaxed">
            <p className="mb-2">
              <br />
              The <strong>NLP4Health Dataset</strong> is part of the Shared Task
              on Patient-Centric Question Answering. Key features include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Organized by patient scenarios</strong> with multiple
                consultation instances per case
              </li>
              <li>
                <strong>Multiple file formats</strong> including conversation
                transcripts, structured summaries, and QA pairs
              </li>
              <li>
                <strong>Two participation tracks</strong>: Closed Task (provided
                data only) or Open Task (external resources allowed)
              </li>
            </ul>
          </div>
        </div>

        {/* Data Description */}
        <div className="mb-8">
          <h3 className="text-lg xl:text-2xl font-bold font-(family-name:--font-raleway) mb-4">
            Data Description
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-md xl:text-xl font-semibold mb-2">
                Training Set:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm xl:text-lg ml-4">
                <li>
                  50K validated dialogues in English, Hindi, Telugu, Tamil,
                  Bangla, Gujarati, Kannada and Dogri on HNC and Cystic Fibrosis
                </li>
                <li>
                  Synthetically generated dialogues validated by humans for
                  medical accuracy and cultural appropriateness
                </li>
                <li>
                  Each dialogue includes:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>
                      A multi-turn conversation between patients and healthcare
                      providers
                    </li>
                    <li>A summary capturing the main information points</li>
                    <li>4-5 question-answer pairs derived from the dialogue</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md xl:text-xl font-semibold mb-2">
                Test Set:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm xl:text-lg ml-4">
                <li>
                  5K unseen dialogues for which participants must generate
                  summaries and answers to new questions
                </li>
                <li>
                  Gold summaries and answers validated by medical experts will
                  be used for evaluation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Task Objectives */}
        <div className="mb-8">
          <h3 className="text-lg xl:text-2xl font-bold font-(family-name:--font-raleway) mb-4">
            Task Objectives
          </h3>
          <p className="text-sm xl:text-lg mb-4">
            Participants are asked to build models with fewer than 3 billion
            parameters that can:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm xl:text-lg ml-4">
            <li>
              <strong>Generate informative and accurate summaries</strong> of
              multi-turn healthcare dialogues
            </li>
            <li>
              <strong>Answer patient-centric questions</strong> based on the
              dialogue content with high factual correctness and clarity
            </li>
            <li>
              <strong>Support cross-lingual input-output:</strong> The model
              should be capable of taking input dialogues in one language and
              generating summaries and answers in a different requested target
              language from the supported set
            </li>
            <li>
              Participants may use any available external data for training
              (open task) or must strictly use the provided training data
              (closed task)
            </li>
          </ul>
        </div>

        {/* Evaluation */}
        <div className="mb-8">
          <h3 className="text-lg xl:text-2xl font-bold font-(family-name:--font-raleway) mb-4">
            Evaluation
          </h3>
          <p className="text-sm xl:text-lg mb-4">
            Models will be evaluated on:
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="text-md xl:text-xl font-semibold mb-2">
                Automatic Metrics:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm xl:text-lg ml-4">
                <li>ROUGE, BLEU, BERTScore for summaries</li>
                <li>Exact Match (EM), F1 score for QA pairs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-md xl:text-xl font-semibold mb-2">
                Human Evaluation:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm xl:text-lg ml-4">
                <li>
                  Medical experts will assess factual accuracy, completeness,
                  and helpfulness of generated summaries and answers
                </li>
                <li>
                  Evaluation will be conducted for question answering tasks for
                  English and translated test data
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="mb-8">
          <h3 className="text-lg xl:text-2xl font-bold font-(family-name:--font-raleway) mb-4">
            Submission Guidelines
          </h3>
          <p className="text-sm xl:text-lg mb-4">Participants should submit:</p>
          <ul className="list-disc list-inside space-y-2 text-sm xl:text-lg ml-4">
            <li>Generated summaries for all test dialogues</li>
            <li>Answers to all test questions</li>
            <li>
              Models must have fewer than 3B parameters, and participants should
              also provide a resource link (e.g., GitHub or Hugging Face) for
              the model
            </li>
            <li>
              Submit results via the shared task website before the deadline in
              codabench
            </li>
          </ul>
        </div>

        {/* Data Usage and Access */}
        <div className="mb-8">
          <h3 className="text-lg xl:text-2xl font-bold font-(family-name:--font-raleway) mb-4">
            Data Usage and Access
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm xl:text-lg ml-4">
            <li>
              The training, validation, and test data will be released in{" "}
              <strong>standard JSON format</strong> containing dialogues,
              summaries, and QA pairs
            </li>
            <li>
              The data is licensed for the{" "}
              <strong>shared task purposes only</strong>
            </li>
          </ul>
        </div>

        {/* Baselines and Resources */}
        <div className="mb-8">
          <h3 className="text-lg xl:text-2xl font-bold font-(family-name:--font-raleway) mb-4">
            Baselines and Resources
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm xl:text-lg ml-4">
            <li>
              Baseline models and evaluation scripts will be provided upon data
              release
            </li>
            <li>Suggested toolkits and example code will be made available</li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h3 className="text-lg xl:text-2xl font-bold font-(family-name:--font-raleway) mb-6">
            Timeline
          </h3>

          {/* Desktop view (lg and up) */}
          <div className="flex-col space-y-4 mt-4 h-full lg:block hidden">
            {sharedTaskTimeline.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[2fr_1fr_1fr] gap-8 items-center"
              >
                {/* Label Section */}
                <div className="col-span-1 text-sm xl:text-lg flex gap-2">
                  <span>{index + 1}.</span>
                  <span>{item.label}</span>
                </div>

                {/* Date + Year Section */}
                <div className="col-span-1 font-bold flex items-baseline gap-1 min-w-[110px] justify-start text-[#0A0A0A] text-lg font-(family-name:--font-raleway)">
                  <span className=" whitespace-nowrap">{item.date},</span>
                  <span className=" whitespace-nowrap">{item.year}</span>
                </div>

                {/* Register Button Section */}
                <div className="col-span-1 flex justify-start items-center">
                  {item.showRegisterButton && (
                    <button
                      onClick={handleRegisterClick}
                      className="bg-black text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 cursor-pointer ml-2"
                    >
                      Register Here
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile and tablet view */}
          <div className="lg:hidden flex flex-col space-y-4 font-raleway">
            {sharedTaskTimeline.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-start gap-x-6 items-start">
                  {/* Label */}
                  <div className="flex gap-2 w-2/3">
                    <span className="font-bold text-sm">{index + 1}.</span>
                    <p className="text-sm text-start leading-snug font-medium text-black">
                      {item.label}
                    </p>
                  </div>

                  {/* Date & Year */}
                  <div className="flex items-end text-right font-(family-name:--font-raleway) font-bold text-sm">
                    <span className="whitespace-nowrap">{item.date},</span>
                    <span className="whitespace-nowrap">{item.year}</span>
                  </div>
                </div>

                {/* Register Button for mobile */}
                {item.showRegisterButton && (
                  <div className="flex justify-start ml-4">
                    <button
                      onClick={handleRegisterClick}
                      className="bg-black text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                    >
                      Register Here
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm xl:text-base text-red-700 font-medium">
                <strong>Important:</strong> Registration post-test data release
                will not be accepted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharedTask;
