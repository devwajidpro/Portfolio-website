
const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#08080d] pointer-events-none">

      {/* Center Color Cluster */}
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 mt-7">

        {/* Pink - Top to Upper Right */}
        <div
          className="absolute left-1/2 top-1/2
          h-[380px] w-[380px] rounded-full
          bg-[radial-gradient(circle,#871B56_0%,#5B163D_40%,transparent_75%)]
          blur-[65px] animate-pink-flow"
        />

        {/* Green - Bottom to Left */}
        <div
          className="absolute left-1/2 top-1/2
          h-[400px] w-[400px] rounded-full
          bg-[radial-gradient(circle,#07532F_0%,#003B20_40%,transparent_75%)]
          blur-[75px] animate-green-flow"
        />

        {/* Blue - Bottom to Right */}
        <div
          className="absolute left-1/2 top-1/2
          h-[380px] w-[380px] rounded-full
          bg-[radial-gradient(circle,#293D78_0%,#19264F_40%,transparent_75%)]
          blur-[75px] animate-blue-flow"
        />

      </div>

      {/* Grid */}
      <div
        className="absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
        bg-[size:28px_28px]"
      />

    </div>
  )
}

export default BackgroundEffect
