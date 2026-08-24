"use client";

const ExpectedOutcomes=()=> {
  return (
    <div className="relative py-8 xl:py-12 text-black font-(family-name:--font-roboto)" id="expected-outcomes">
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <h2 className=" mb-4 text-xl xl:text-3xl font-bold font-(family-name:--font-raleway)">Expected Outcomes</h2>
        <ul className="list-disc pl-5 space-y-4 text-sm xl:text-xl leading-relaxed">
          <li>
            By the end of the workshop, participants will have a deeper understanding of the current challenges and opportunities in
            deploying language technologies in healthcare.
          </li>
          <li>
            We expect that the workshop will help create a community of interdisciplinary experts who can then engage together to find
            meaningful solutions to existing challenges in healthcare communications with the use of NLP, AI and other language technologies.
          </li>
          <li>
            The workshop will provide potential directions for future research and collaboration.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExpectedOutcomes;