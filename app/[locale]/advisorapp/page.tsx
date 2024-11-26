import Image from "next/image";

export default function AdvisorApp(){
    return(
        <>
        <main>
            <div className="flex flex-col mt-4">
                <div className="containerContent flex flex-col">
                    <h1>Advisor App</h1>
                    <Image src={'/advisorapp.png'} width={1400} height={9000} alt="Imagem projeto Advisor App" />
                </div>
            </div>
        </main>
        </>
    )
}