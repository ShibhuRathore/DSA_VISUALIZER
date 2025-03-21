const MainViewPort = () => {
  return (
    <div className="bg-gray-950 h-full flex justify-center font-signika items-center">
      <div className="main_content_container bg-gray-950 px-8 pt-14 sm:pt-32 md:pt-40 xl:pt-40 2xl:pt-40 shadow-blue-400 rounded-lg">
        <div className="main_title_description flex-3 flex-col font-overpass">
          <h2 className=" flex-3 flex-col text-center font-bold text-gray-200">
            <h2 className="text-[2.5rem] md:text-[4rem]">
              Transform Your DSA Learning
            </h2>
            <span className="text-[2.4rem] md:text-[3.9rem] bg-clip-text text-transparent bg-gradient-to-r from-[#7186ff] to-[#fe7587]">
              Through Visualization
            </span>
          </h2>
          <p className="text-xl mt-[1.5rem] md:w-[80%] text-gray-300 text-center">
            Experience a transformative approach to DSA learning through
            immersive visualizations, simplifying intricate concepts for deeper
            comprehension and mastery
          </p>
        </div>
        <div className="button_container flex justify-center mt-16">
          <a
            href="https://github.com/ShibhuRathore"
            target="_blank"
            className="cursor-pointer bg-transparent border border-slate-700 hover:border-slate-600 text-blue-200 px-6 py-2 rounded-md mr-4 bg-slate-900 hover:text-gray-100 focus:outline-none button_shadow"
          >
            GitHub Code
          </a>
          <a
            href="hhttps://github.com/ShibhuRathore/DSA_VISUALIZER.git"
            target="_blank"
            className="cursor-pointer bg-transparent border border-slate-700 hover:border-slate-600 text-blue-200 px-6 py-2 rounded-md bg-slate-900 hover:text-gray-100 focus:outline-none button_shadow"
          >
            Creator
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainViewPort;
