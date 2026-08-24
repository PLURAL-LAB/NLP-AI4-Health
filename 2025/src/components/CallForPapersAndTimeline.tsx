"use client";

import React from "react";
import Image from "next/image";

const callForPapersItems = [
  "NLP for multilingual and low-resource healthcare applications",
  "Translation and simplification of patient documents (e.g., consent forms, summaries)",
  "Speech and voice technologies for clinical data capture",
  "Language model development for underrepresented languages in health domains",
  "Adapting and fine-tuning LLMs for healthcare-specific use",
  "Interfaces for patients with low literacy or special accessibility needs",
  "NLP tools that support culturally sensitive patient care and education",
  "Ethical and equitable AI use in healthcare language technologies",
  "Real-world case studies on multilingual healthcare NLP deployments",
  "Shared task systems, datasets, and evaluation methodologies",
];

const timeline = [
  { label: "First Call for Papers", date: "July 22, 2025" },
  { label: "Second Call for Papers", date: "August 22, 2025" },
  { label: "Third Call for Papers", date: "September 22, 2025" },
  { label: "Submission Deadline", date: "October 6, 2025", oldDate: "September 29, 2025" },
  { label: "ARR Commitment Deadline", date: "October 27, 2025" },
  { label: "Notification of Acceptance", date: "November 3, 2025" },
  { label: "Camera-ready Papers Due", date: "November 11, 2025" },
  { label: "Proceedings Due", date: "December 1, 2025" },
  { label: "Workshop", date: "December 23, 2025" },
];

const CallForPapersAndTimeline = () => {
  return (
    <section
      className="py-16 xl:py-24 text-black font-(family-name:--font-roboto) min-h-screen"
      id="call-for-papers"
    >
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        {/* Mobile view - stacked layout */}
        <div className="lg:hidden">
          {/* Call for Papers */}
          <div className="mb-16">
            <h2 className="text-xl xl:text-3xl font-bold font-(family-name:--font-raleway) mb-8">
              Call for Papers
            </h2>
            <p className="text-sm xl:text-lg mb-12 text-[#010102]">
              We invite submissions of original research papers, position
              papers, and system demonstrations that address challenges at the
              intersection of language technologies and healthcare
              communication, particularly in multilingual and low-resource
              settings. Submissions may describe completed work, ongoing
              projects, preliminary results, or innovative ideas relevant to the
              following (but not limited to) topics:
            </p>

            <div className="flex flex-col space-y-6 font-(family-name:--font-raleway)">
              {callForPapersItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="font-bold text-sm xl:text-base">
                    {index + 1}.
                  </span>
                  <p className="text-sm xl:text-xl text-black">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop Timeline */}
          <div className="relative -mx-8 sm:-mx-12 md:-mx-16 px-8 sm:px-12 md:px-16 py-12 text-black overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-12 font-(family-name:--font-raleway) text-center">
                Workshop Timeline
              </h2>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr_auto] items-center gap-8"
                  >
                    <div className="flex items-center">
                      <Image
                        src="/blackArrow.svg"
                        alt="Circle Arrow"
                        height={20}
                        width={20}
                      />
                      <p className="text-xs ml-3">{item.label}</p>
                    </div>
                    <div className="text-xs text-right">
                      {item.oldDate && (
                        <p className="line-through text-gray-500">{item.oldDate}</p>
                      )}
                      <p className={item.oldDate ? "font-semibold" : ""}>{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button - Mobile */}
          <div className="mt-12 text-center">
            <button
              onClick={() =>
                window.open(
                  "https://openreview.net/group?id=aclweb.org/AACL-IJCNLP/2025/Workshop/NLP-AI4Health#tab-recent-activity",
                  "_blank"
                )
              }
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
            >
              Submit Your Paper
            </button>
          </div>
        </div>

        {/* Desktop view - side by side layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-start">
          {/* Call for Papers - Left side */}
          <div className="flex flex-col h-full">
            <h2 className="text-xl xl:text-3xl font-bold font-(family-name:--font-raleway) mb-8 xl:mb-12">
              Call for Papers
            </h2>
            <p className="text-sm xl:text-lg mb-8 text-[#010102]">
              We invite submissions of original research papers, position
              papers, and system demonstrations that address challenges at the
              intersection of language technologies and healthcare
              communication, particularly in multilingual and low-resource
              settings. Submissions may describe completed work, ongoing
              projects, preliminary results, or innovative ideas relevant to the
              following (but not limited to) topics:
            </p>

            <div className="flex flex-col space-y-4 flex-grow">
              {callForPapersItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="font-medium text-sm xl:text-lg">
                    {index + 1}.
                  </span>
                  <p className="text-sm xl:text-lg leading-snug font-normal text-black">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop Timeline - Right side */}
          <div className="relative -mr-24 xl:-mr-32 2xl:-mr-40 pr-24 xl:pr-32 2xl:pr-40 text-black overflow-hidden flex flex-col h-full">
            <div className="relative z-10 flex flex-col h-full pt-12 xl:pt-16">
              <div className="max-w-4xl mx-auto flex flex-col justify-between flex-grow relative">
                {/* Title positioned above first item */}
                <h2 className="text-xl xl:text-3xl font-semibold font-(family-name:--font-raleway) absolute -top-12 xl:-top-16 left-0">
                  Workshop Timeline
                </h2>
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[2fr_1fr] items-center gap-16 py-4"
                  >
                    <div className="flex items-center">
                      <Image
                        src="/blackArrow.svg"
                        alt="Black Arrow"
                        height={30}
                        width={30}
                      />
                      <p className="font-normal text-lg ml-4">{item.label}</p>
                    </div>
                    <div className="text-right">
                      {item.oldDate && (
                        <p className="font-normal text-base line-through text-gray-500">{item.oldDate}</p>
                      )}
                      <p className="font-bold text-lg">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button - Desktop (positioned after the grid) */}
        <div className="hidden lg:block mt-16 text-center">
          <button
            onClick={() =>
              window.open(
                "https://openreview.net/group?id=aclweb.org/AACL-IJCNLP/2025/Workshop/NLP-AI4Health#tab-recent-activity",
                "_blank"
              )
            }
            className="bg-black text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
          >
            Submit Your Paper
          </button>
        </div>

        {/* Submission Guidelines */}
        <div className="bg-gray-50 border-l-4 border-black p-6 mb-12 rounded-r-lg mt-16">
          <h3 className="font-bold text-sm xl:text-lg mb-3 font-(family-name:--font-raleway)">
            Submission Guidelines
          </h3>
          <p className="text-sm xl:text-base mb-3">
            Please use the{" "}
            <a
              href="https://github.com/acl-org/acl-style-files"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              ACL 2025 style template
            </a>{" "}
            for your submission. The submission should be anonymized for
            double-blind review.
          </p>
          <p className="text-sm xl:text-base mb-3">
            <strong>Page limits:</strong>
          </p>
          <ul className="text-sm xl:text-base mb-3 ml-4">
            <li>• 4 pages for short papers (excluding references and appendices)</li>
            <li>
              • 8 pages for full papers (excluding references and appendices)
            </li>
          </ul>
          <p className="text-sm xl:text-base">
            Accepted papers will be published in the ACL Anthology as part of
            the IJCNLP-AACL 2025 workshop proceedings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallForPapersAndTimeline;