const Section5 = () => {
    return (
        <section className="relative h-[800px] bg-white" style={{ clipPath: "polygon(0% 0,100% 0%,100% 100%,0 100%)" }}>
            <div className="relative h-[calc(100svh+700px)] -top-[80svh]">

                <div className="sticky top-[calc(100svh-700px)] h-[700px]">

                    <div className="flex flex-col mb-24">
                        <h1 className="text-6xl max-md:mt-36">Explore our solutions</h1>
                        <button>CLICK</button>
                    </div>
                    <div className="flex text-xl w-full px-[10vw]">
                        <div className="flex-1 flex flex-col items-start justify-center gap-12">
                            <button>Charging solutions</button>
                            <button>Company</button>
                            <button>Info Hub</button>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-center gap-12">
                            <button>Charging solutions</button>
                            <button>Company</button>
                            <button>Info Hub</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default Section5
