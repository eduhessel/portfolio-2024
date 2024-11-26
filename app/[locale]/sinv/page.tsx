import Image from "next/image";

export default function Sinv(){
    return(
        <>
        <main>
            <div className="flex flex-col mt-4">
                <div className="containerContent flex flex-col">
                    <h1>Sinv - Bradesco</h1>
                    <Image src={'/sinv.png'} width={1400} height={9000} alt="Imagem projeto Sinv" />
                </div>
            </div>
        </main>
        </>
    )
}