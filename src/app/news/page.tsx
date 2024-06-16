import Image from "next/image"

const page = () => {
    return (
        <div className="w-full min-h-[100vh]  bg-red-200
        flex justify-center items-center"
        >

            {/* <div className="w-96 h-96 border-2 border-yellow-500">
                <div className={'image-container'}>
                    <Image src="/images/i.jpg" alt="" fill className="object-cover" />
                </div>
            </div> */}

            <div className="min-w-[500px] max-w-[800px] h-[800px] ">
                <Image
                    src="/images/1.jpg"
                    alt="logo"
                    width={2000}
                    height={2000}
                />
            </div>

        </div>
    )
}
export default page